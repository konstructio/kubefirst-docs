---
sidebar_position: 4
---

# 3. Add User Via Atlantis

In this tutorial we will show how to add users to your local cluster through <a href="https://www.runatlantis.io/">Atlantis</a>, which will allow a preview of how changes made will be expressed through terraform before branches are merged into your repository.

## Step 1

Navigate to the ```gitops``` repository in your personal GitHub, clone the contents, and create a new branch:

```
cd gitops
git checkout -b new-user
```

## Step 2

The file ```terraform/users/admins-github.tf``` contains blocks that represent admin users - the kubefirst_bot user, and a commented-out admin_one user:

```
module "admin_one" {
  source = "./modules/user/github"
  acl_policies        = ["admin"]
  email               = "admin@your-company-io.com"
  first_name          = "Admin"
  github_username     = "admin_one_github_username"
  last_name           = "One"
  initial_password    = var.initial_password
  username            = "aone"
  user_disabled       = false
  userpass_accessor   = data.vault_auth_backend.userpass.accessor
}
```

Uncomment and edit this code to replace the values for the email, first_name, github_username, last_name, and username before pushing to your branch. <br/>
**Note:** If you are doing using this walkthrough simply to test Atlantis, you do not need to update these fields to be accurate.

```bash
git add .
git commit -m feat: add new user
git push --set-upstream origin new-user
```

## Step 3

Create a pull request. This will kick off the Atlantis workflow. Within a minute or so of submitting the pull request, a comment will appear on the pull request that shows the terraform plan with the changes it will be making to your infrastructure.

![atlantis comments](/img/atlantis-comments.png)

:::caution Are you not getting comments on your PR?

The ngrok tunnel used for kubefirst local has a 2-hour expiration unless you create an account with ngrok. This expiration will prevent you from using automated infrastructure as code through atlantis, but the rest of the platform will continue to function beyond that ngrok evaluation period. <a href="https://dashboard.ngrok.com/signup">Create an account with ngrok</a> to prevent this.

:::

## Step 4

To apply these changes, you or someone in the organization can submit a comment on that Merge Request with the following comment text:

```
atlantis apply
```


Doing so will instruct Atlantis to apply the plan. It will report back with the results of the apply within a minute or so.

**NOTE:** Atlantis merges your Pull Request automatically once an apply is successfully executed. Don't merge Terraform merge requests yourself.

Atlantis will always run plans automatically for you when a merge request is opened that changes files mapped in atlantis.yaml

## Step 5

Any new users you have created through this process will have their temporary initial passwords stored in <a href="https://argocd.localdev.me/applications/vault">your local Vault cluster</a>. You can access Vault using the information provided to you in the terminal as well, and you will find your users' individual initial passwords in the Vault secret store /secrets/users/.

![vault sign in](/img/vault-token-login.png)

Once you've provided them this initial password, they can update their own password throughout the platform by updating their user password entity in vault. Anyone can change their own password, and Admins can reset anyone's password. These rules, just like everything else on Kubefirst, can be configured in your new gitops repository.

![default user created](/img/default-user-creation.png)

The existence of a new user with your specified parameters demonstrates that you have successfully updated your users using Atlantis!