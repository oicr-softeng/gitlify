#!/usr/bin/env node

const axios = require('axios');
require('dotenv').config();

process.argv && console.log('looking for environmental variables in', process.cwd());

const [
    ,
    ,
    argvBranchName = '',
    argvWebhookUrl = '',
] = process.argv;

const {
    GITHUB_USER,
    NETLIFY_WEBHOOK,
} = process.env;

const gitlifyCLI = (
    branchName = argvBranchName || '',
    webhookId = NETLIFY_WEBHOOK || argvWebhookUrl || '',
    developer = GITHUB_USER || 'anonymous',
    appMode = process.argv ? 'CLI' : 'Plugin',
) => (
    branchName && webhookId && !['', 'anonymous'].includes(developer)
    ? axios(`https://api.github.com/users/${developer}`)
        .then(() =>
            axios.post(`https://api.netlify.com/build_hooks/${webhookId
        }?trigger_branch=${branchName
        }&trigger_title=triggered+manually+by+${developer}+using+Gitlify${appMode}`)
                .then(({
                    data,
                    status,
                }) => console.log('deploy command sent', status, data))
                .catch(error => console.log('something went wrong', error)))
        .catch(() => console.log('user name not found:', developer))
    : console.log(
        'Error: You need to give me a valid branch name, webhook url and username.',
        branchName,
        webhookId,
        developer,
    )
);

exports.module = gitlifyCLI;

process.argv && gitlifyCLI();
