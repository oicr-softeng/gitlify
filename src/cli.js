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
    GITHUB_TOKEN,
    GITHUB_USER,
    NETLIFY_WEBHOOK,
} = process.env;

const gitlifyCLI = (
    branchName = argvBranchName || '',
    webhookId = NETLIFY_WEBHOOK || argvWebhookUrl || '',
    developer = GITHUB_USER || 'anonymous',
    token = GITHUB_TOKEN || '',
    appMode = process.argv ? 'CLI' : 'Plugin',
) => (
    branchName && webhookId && token && !['', 'anonymous'].includes(developer)
        ? axios(`https://api.github.com/users/${developer}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(() =>
            axios.post(`https://api.netlify.com/build_hooks/${webhookId
            }?trigger_branch=${branchName
            }&trigger_title=triggered+manually+by+${developer}+using+Gitlify${appMode}`)
                .then(({
                    data,
                    status,
                }) => console.log('deploy command sent', status, data))
                .catch(error => console.log('something went wrong with Netlify', error)))
            .catch(error => console.log('something went wrong with GitHub', error))
        : console.log(
            'Error: You need to give me a valid branch name, Netlify webhook URL, GitHub personal access token, and GitHub username.',
            branchName,
            webhookId,
            token,
            developer,
        )
);

exports.module = gitlifyCLI;

process.argv && gitlifyCLI();
