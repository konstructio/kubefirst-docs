---
title: Terraform & Atlantis
---

Terraform is our infrastructure as code layer and we manage our Terraform workflows with `atlantis` automation.

## Making Changes In Terraform

### Automatic Plans With Atlantis

Any change request that includes a .tf file will prompt `atlantis` to wake up and run your Terraform plan. Atlantis will post the plan's result to your change request as a comment within a minute or so.

Review and approve the change request.

You can always run a new Terraform plan by commenting directly in your pull request with the words `atlantis plan`.

### Apply and Merge

Add the comment `atlantis apply` in the approved change request. This will prompt Atlantis to wake up and run your `terraform apply`.

The apply results will be added to your change request comments by Atlantis.

If the apply is successful, your code will automatically be merged with main, your change request will be closed, and the state lock will be removed in Atlantis.

## Managing Terraform State

The following table shows how state is stored based on your installation selection:

| State Backed      | AWS | Local | Civo |
|-------------------|-----|-------|------|
| AWS S3 Bucket     | X   |       |      |
| Civo object store |     |       | X    |
| MinIO (locally)   |     | X     |      |

## Tips

### What is the general flow of changes using Atlantis for IaC?

- **Create a Commit and Change Request:** The change described by Terraform instructions will be created in a PR at a folder which [Atlantis is listening for it](https://github.com/kubefirst/gitops-template/blob/main/aws-github/atlantis.yaml). Once the Change Request is created on GitHub/GitLab, Atlantis will plan it and show possible impacts of it.
- **Approve the change:** Once you are ready, someone with access will provide `atlantis apply` on the change request, triggering the processs of executing the `plan` created.
- **Change is applied by Atlantis**: Atlantis will execute the Terraform plan, and Terraform will update shared statestore with new current state changes, change request will be merged to main,  reflecting the new desried state.

:::note The term "Change Request" is a "Pull Request" on Github and "Merge Request" on Gitlab.

### What can I use Atlantis & Terraform for?

For example, you can use your gitops repo to help track the creation of repos:

- [AWS + GitHub repository template](https://github.com/kubefirst/gitops-template/blob/main/aws-github/terraform/github/repos.tf)
- [local + GitHub repository template](https://github.com/kubefirst/gitops-template/blob/main/k3d-github/terraform/github/repos.tf)

With Terraform using the S3 based state store, you can add any Terraform file to the gitops repo on which [Atlantis is listeting for](https://github.com/kubefirst/gitops-template/blob/main/aws-github/atlantis.yaml) and Atlantis will try to plan and when approved to apply such plan for you.

Beyond repositories and users, Atlantis allow you to have your IaC demands to be tracked by your main branch registry. Easing up the usage of Terraform based workflows to update the infractruture you are operating.
