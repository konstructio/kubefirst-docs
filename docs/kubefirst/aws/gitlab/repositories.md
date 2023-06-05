---
title: Repositories
---

# GitLab Repositories

In the GitOps nature, we rely on repositories to have a single source of truth when it comes to project updates. kubefirst makes heavy use of the GitOps approach to automate the development and maintenance of applications. In that regard, during the installation process, kubefirst will create a few GitLab repositories as described below.

## Repositories

![GitLab repositories](@site/docs/img/common/gitlab/repositories.png)

### `gitops`

The `gitops` repository houses all of our IAC and all of our GitOps configurations. All of the infrastructure that you receive with kubefirst was produced by Terraform and all of your applications are delivered with Argo CD. You will add to this `gitops` repository as your business needs require additional infrastructure or applications.

### metaphor

`metaphor` is a suite of demo microservice applications to demonstrate how an application can be integrated into the kubefirst platform following best practices. It is described in more details [here](@site/docs/common/metaphor.mdx).

## Repositories Management

The repositories are being managed in Terraform. If you need additional repositories, just add a new section of Terraform code to `terraform/gitlab/kubefirst-repos.tf`

```terraform
module "your_repo_name" {
  depends_on = [
    gitlab_group.kubefirst
  ]
  source                                = "./templates/gitlab-repo"
  group_name                            = gitlab_group.kubefirst.id
  repo_name                             = "your-repo-name"
  create_ecr                            = true
  initialize_with_readme                = true
  only_allow_merge_if_pipeline_succeeds = false
  remove_source_branch_after_merge      = true
}
```

GitLab's Terraform provider offer many more configuration options than just these settings. Take a look at the `Resources` section of the [GitLab provider documentation](https://registry.terraform.io/providers/gitlabhq/gitlab/latest/docs/resources).

## Making Terraform Changes

To make infrastructure and configuration changes with Terraform, simply open a merge request in the `gitops` repository. Your merge request will automatically provide plans, state locks, and applies, and even comment in the merge request itself. You'll have a simple, peer reviewable, auditable changelog of all infrastructure and configuration changes.

All this automation is possible because of Atlantis. Atlantis is a tool that runs in your Kubernetes cluster and via a webhook, listens for merge requests in your `gitops` repository. When it detect a merge request, it will run `terraform plan`, and post the plan as a comment in the merge request. If the Terraform plan succeed, Atlantis will run `terraform apply`, and post the results as a comment in the merge request.

![Terraform Atlantis Merge Request](@site/docs/img/common/gitlab/atlantis.png)
