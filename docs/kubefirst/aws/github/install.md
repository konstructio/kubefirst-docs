---
title: Install
---

## AWS Platform Installation using GitHub

**kubefirst** is the name of our command line tool that installs the kubefirst platform and provides some platform conveniences.

It installs a fully automated platform of open source cloud native tools with a simple `init` and `create` command.

<!-- TODO: 2.0 - fix this image! -->
![Kubefirst Cluster](../../../img/kubefirst/github/kubefirst-cluster-create.png)

### Prerequisites

[Install](./overview.md#how-to-install-kubefirst-cli) the kubefirst CLI.

#### AWS Prerequisites

1. Create an AWS account with billing enabled.
2. Establish a public hosted zone with DNS routing established ([docs](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html)).
3. Connect with [Administrator Access](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/AdministratorAccessserviceLevelSummary) IAM credentials to your AWS account ([docs](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)).
4. Our Homebrew package will automatically install the [AWS IAM Authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html) dependency. If you use another installation method, you will need to install this utility.

### Step 1 - Create your kbot user and a personal access token

The kubefirst cli will automatically create one admin user for you named `kbot`. After the installation, you will temporarily use that `kbot` account to onboard yourself and the rest your team to the platform. From that point forward, the `kbot` user should only be used for automated activities, and you should use your own personal account for everything else.

The `kbot` user needs to be associated with a GitHub user account that can be used as your organization's bot account. Log out of GitHub and create a new GitHub account to represent this new `kbot` account. Because this account will be used for automation, it's good to choose a username that generically represents your company or your project name - something like `yourcompany-kbot`. You can also have fun with it and give your bot a fun name - the point is that this is not an account for your long term personal use, it's for the kubefirst platform system to use.

Your new `kbot` account will need to be associated with a GitHub organization.

- If you don't already have one that you want to use, while logged into GitHub with your new `kbot` account, establish a new [GitHub organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
- If you do already have a GitHub organization that you want to add kubefirst to, you'll need to add your new kubefirst bot as an owner to the existing organization.

#### GitHub ephemeral authorization during install

If you don't export a [GITHUB_TOKEN](../../../explore/github-token.md) to your shell, the kubefirst cli can generate an ephemeral token that last 8 hours.

### Step 2 - Create your platform

<!-- TODO: 2.0 - check all flags and minimize command -->
```shell
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxx

kubefirst aws create \
  --alerts-email yourdistro@your-company.io \
  --hosted-zone-name your-company.io \
  --cluster-name kubefirst-mgmt \
  --github-owner your-github-organization-name \
  --git-provider github
```
