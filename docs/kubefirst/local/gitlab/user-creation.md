---
title: Atlantis User Creation
---

In this tutorial we will show how to add users to your local cluster through [Atlantis](https://www.runatlantis.io/), which will allow a preview of how changes made will be expressed through Terraform before branches are merged into your repository.

Navigate to the `gitops` repository in your personal GitLab account, clone the contents, and create a new branch:

```shell
cd gitops
git checkout -b new-user
```

The file `k3d-gitlab/terraform/users/admins.tf` contains blocks that represent admin users - the kubefirst_bot user, and a commented-out admin_one user:

```terraform
module "admin_one" {
  source = "./modules/user/gitlab"
  acl_policies        = ["admin"]
  email               = "admin@your-company-io.com"
  first_name          = "Admin"
  gitlab_username     = "admin_one_gitlab_username"
  last_name           = "One"
  initial_password    = var.initial_password
  username            = "aone"
  user_disabled       = false
  userpass_accessor   = data.vault_auth_backend.userpass.accessor
}
```

Uncomment and edit this code to replace the values for the `email`, `first_name`, `github_username`, `last_name`, and `username` before pushing to your branch.

```shell
git add .
git commit -m feat: add new user
git push --set-upstream origin new-user
```

Now, create a merge request. This will kick off the Atlantis workflow. Within a minute or so, a comment will appear on the merge request that shows the Terraform plan with the changes it will be making to your infrastructure.

<!-- TODO: 2.0 - fix this image for a GitLab one -->
![Atlantis comments example](../../../img/kubefirst/local/atlantis-comments.png)

To apply these changes, you or someone in the organization can submit a comment on that merge request with the following text: `atlantis apply`. Doing so will instruct Atlantis to apply the plan. It will report back with the results within a minute or so.

> Atlantis merges your merge request automatically once an apply is successfully executed. Don't merge Terraform merge requests yourself. Atlantis will always run plans automatically for you when a merge request is opened that changes files mapped in `atlantis.yaml`.

Any new users you have created through this process will have their temporary initial passwords stored in your local [HashiCorp Vault](https://argocd.localdev.me/applications/vault) cluster. You can also access Vault using the information provided to you in the terminal: you will find your users' individual initial passwords in the Vault secret store `/secrets/users/<username>`.

![vault token login](../../../img/kubefirst/local/vault-token-login.png)

Once you've provided them their initial password, they can update it throughout the platform by modifying their user password entity in Vault. Anyone can change their own password, and admins can reset anyone's password. These rules, just like everything else on kubefirst, can be configured in your new gitops repository.

![default user creation](../../../img/kubefirst/local/default-user-creation.png)

The existence of a new user with your specified parameters demonstrates that you have successfully updated your users using Atlantis!

### Troubleshooting Atlantis

The free ngrok tunnel used for kubefirst local has a 2-hour expiration by default. In order to prevent this expiration from interfering with automated atlantis executions, we have added an auto-rotating ngrok tunnel cronjob to the atlantis namespace. The job will rotate the ngrok tunnel automatically register the new ngrok url with your atlantis secrets in vault and your gitops webhook.

Atlantis works by sending a webhooks to Atlantis from your gitops repository. If you're not receiving Terraform plan comments, check the webhooks section of your `gitops` repository settings and review the responses from the sent webhook requests.
