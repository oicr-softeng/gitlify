<h1 align="center"> Gitlify </h1><br>

<p align="center">
  Trigger Netlify builds manually from the PR.
</p>

<p align="center">
  <a href="#" target="_blank"><img alt="General Availability" title="General Availability" src="https://www.overture.bio/img/progress-horizontal-UD.svg" width="320" /></a>
</p>

[![Slack](http://slack.overture.bio/badge.svg)](http://slack.overture.bio)

## Table of Contents
- [Introduction](#introduction)

## Introduction

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## How to use

### Authenticate

Make a [new personal access token on Github](https://github.com/settings/tokens/new) with permission `read:user`, and add it to your .env file (see `.env.example`).

`GITHUB_TOKEN=your_token_here`

### Publish a branch to Netlify

`gitlify your_branch_name`
