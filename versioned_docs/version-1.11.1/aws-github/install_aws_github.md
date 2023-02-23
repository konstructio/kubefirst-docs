---
sidebar_position: 1
---

# Installation

## Prerequisites

- Install the Kubefirst CLI if you haven't already done so.
- Create an AWS account with billing enabled.
- Establish a public hosted zone with dns routing established (<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-working-with.html">see documentation</a>).
- Connect with <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/AdministratorAccessserviceLevelSummary">AdministratorAccess</a> IAM credentials to your AWS account (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys">see documentation</a>).
- Our brew package will automatically install the <a href="https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html">AWS IAM Authenticator</a> dependency. If you use another installation method, you will need to install this utility.

## 1. Create your kubefirst bot user and a personal access token

The kubefirst CLI will automatically create one admin user for you. We refer to this initial user as the `kubefirst bot`. After the installation, you will temporarily use that `kubefirst bot` to onboard yourself and the rest your team to the platform. From that point forward, the kubefirst bot should only be used for automated activities, and you can use your own personal account.

This kubefirst bot user needs to be associated with a GitHub user account. Log out of GitHub and create a new GitHub account to represent this new kubefirst bot account. Because this account will be used for automation, it's a good to choose a username that generically represents your company or project name - something like yourcompany-bot is a good idea. You can also have fun with it and give your bot a fun name - the point is that this is not an account for your long term personal use, it's for the kubefirst system to use.

Your new bot account will need to be associated with a GitHub organization.

- If you don't already have one that you want to use, while logged into GitHub with your new bot account, establish a new <a href="https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch">GitHub organization</a>.
- If you do already have a GitHub org that you want to add Kubefirst to, you'll need to add your new kubefirst bot to the existing organization now.

### GitHub Authorization during install

Kubefirst utilizes the user's GitHub token to generate resources within the user's GitHub account details.
At the beginning of the installation, Kubefirst will ask you to generate the GitHub token.

## 2. Init local set up

Let's init your local setup providing values for the following flags:

<!-- please ensure table column widths are appropriate for content -->

<table>
  <thead>
    <tr>
      <th width="10%">Flag</th>
      <th width="30%">Description</th>
      <th width="10%">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--admin-email</code></td>
      <td>an email address that can be used for certificate renewal alerts</td>
      <td>your_name@yourcompany.com</td>
    </tr>
    <tr>
      <td><code>--cloud</code></td>
      <td>we only support aws, gcp coming soon</td>
      <td>aws</td>
    </tr>
    <tr>
      <td><code>--hosted-zone-name</code></td>
      <td>name of the platform's hosted zone domain - this will drive the URLs of your tools (gitlab.yourdomain.com, argocd.yourdomain.com, etc)</td>
      <td>yourdomain.com</td>
    </tr>
    <tr>
      <td><code>--cluster-name</code></td>
      <td>the name of your cluster</td>
      <td>your_cluster_name</td>
    </tr>
    <tr>
      <td><code>--region</code></td>
      <td>name of the aws region in which to place your region specific resources</td>
      <td>us-east-1</td>
    </tr>
    <tr>
      <td><code>--profile</code></td>
      <td>name of the aws profile the cli should leverage</td>
      <td>default</td>
    </tr>
    <tr>
      <td><code>--s3-suffix</code></td>
      <td>unique identifier for s3 buckets</td>
      <td>your-s3-bucket-name</td>
    </tr>
    <tr>
      <td><code>--github-owner</code></td>
      <td>name of your github organization name</td>
      <td>your_organization</td>
    </tr>
    <tr>
      <td><code>--aws-nodes-graviton</code></td>
      <td>Graviton nodes (ARM) on AWS EKS compute nodes</td>
      <td>true</td>
    </tr>
    <tr>
      <td><code>--aws-nodes-spot</code></td>
      <td>nodes spot on AWS EKS compute nodes</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

<br />

```
kubefirst init \
--admin-email yourname@yourcompany.com \
--cloud aws \
--hosted-zone-name yourdomain.com \
--region us-east-1 \
--profile default \
--cluster-name your-cluster-name \
--github-owner your-github-organization-name
```

### Using a config file

```yaml
# config.yaml
config:
  admin-email:  yourname@yourcompany.com 
  hosted-zone-name: yourdomain.com
  region: us-east-1 
  profile: default
  cluster-name: your-cluster-name
  github-owner: your-github-organization-name
  cloud: aws
```

```
kubefirst init  -c ./config.yaml
```

The ```init``` process produces a directory of utilities, a state file, and some staged platform content that can now be found at ```~/.kubefirst```

## 3. Create the platform

Simply run the following command:

```
kubefirst cluster create
```