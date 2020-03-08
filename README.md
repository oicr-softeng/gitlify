<h1 align="center"> Gitlify </h1><br>

<p align="center">
  Trigger Netlify builds manually from the PR.
</p>

<p align="center">
  <a href="#" target="_blank"><img alt="General Availability" title="General Availability" src="https://www.overture.bio/img/progress-horizontal-UD.svg" width="320" /></a>
</p>

[![Slack](http://slack.overture.bio/badge.svg)](http://slack.overture.bio)

## Introduction

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## How to use

### Authenticate
Copy the variable names given in the `.env.example` file onto your project's own `.env`, and then fulfil their values accordingly. 

- `GITHUB_USER` is merely your github handle.
- `GITHUB_TOKEN` is a [new personal access token](https://github.com/settings/tokens/new), with permission `read:user`. Can be reused through multiple projects.
- `NETLIFY_WEBHOOK` is found at `app.netlify.com/sites/<YOUR_PROJECT>/settings/deploys#deploy-contexts`.

### Publish a branch to Netlify
**Note:** *Branch names and tags are case sensitive here.*

e.g. `gitlify develop`

