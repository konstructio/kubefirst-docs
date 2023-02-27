---
sidebar_position: 4
---

# 3. Add User Via Atlantis

In this tutorial we will show how to add users to your cluster through <a href="https://www.runatlantis.io/">Atlantis</a>, which will allow a preview of how changes made will be expressed through terraform before branches are merged into your repository.

## Step 1 - Create a push and pull request

Go to your new gitops repository in your personal GitHub. Navigate to the ```gitops``` project and edit the file ```terraform/users/admins-github.tf```.
In this file, you'll see some blocks that represent admin users - the ```kubefirst_bot``` user, and a commented-out ```admin_one user```.

Edit this code to replace the values for the email, first_name, github_username, last_name, and username.

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

 <br/>

Observe that you need to provide ```team_id``` to the team you want to bind it in GitHub for GitHub related access and ```acl_policies``` to bind to rights on vault.

With the name of your new module in mind, edit the list of ```vault_identity_group_member_entity_ids``` at the top of this file, adding your new module to the list.

## Step 2 - Commit change

Commit this change to a new branch and create a merge request. This will kick off the Atlantis workflow. Within a minute or so of submitting the merge request, a comment will appear on the merge request that shows the terraform plan with the changes it will be making to your infrastructure.

## Step 3 - Approve change

To apply these changes, you or someone in the organization can submit a comment on that Merge Request with the following comment text:

```
atlantis apply
```

Doing so will instruct Atlantis to apply the plan. It will report back with the results of the apply within a minute or so.

**NOTE:** Atlantis merges your Pull Request automatically once an apply is successfully executed. Don't merge Terraform merge requests yourself.

Atlantis will always run plans automatically for you when a merge request is opened that changes files mapped in ```atlantis.yaml```

## Step 4 - Access Vault for initial password

Any new users you have created through this process will have their temporary initial passwords stored in Vault. You can access Vault using the information provided to you in the terminal as well, and you will find your users' individual initial passwords in the Vault secret store ```/secrets/users/<username>```.


![vault users](/img/vault-users.png)

Once you've provided them this initial password, they can update their own password throughout the platform by updating their user password entity in vault. Anyone can change their own password, and Admins can reset anyone's password. These rules, just like everything else on Kubefirst, can be configured in your new gitops repository.
