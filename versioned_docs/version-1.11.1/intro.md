---
sidebar_position: 1
---

# Welcome

## What is Kubefirst?

Kubefirst is a fully automated and operational open source platform that includes some of the most popular open source tools available in the Kubernetes space, all working together from a single command.

We support **local, AWS,** and **Civo clouds**. By running our cli commands against your empty environment, you'll get a GitOps cloud management and application delivery ecosystem complete with automated Terraform workflows, Vault secrets management, GitLab or GitHub integrations with Argo, and demo applications that demonstrate how it all pieces together.

![Kubefirst architecture diagram](/img/kubefirst-arch.png)

## How kubefirst works

- The ```kubefirst``` CLI runs on your localhost and will create an GitLab or GitHub kubernetes ecosystem including Vault, ArgoCD, Argo Workflows, self-hosted runners for GitHub and GitLab, and an application to demonstrate how everything on the platform works.
- We have local, AWS, and Civo platforms available.
- The install takes about 30 minutes to execute.
- Your self-hosted GitLab or SaaS GitHub will come with a ```gitops``` and ```metaphor``` repository.
- All of the infrastructure as code will be in your GitOps repository in the Terraform directory. IAC workflows are fully automated with Atlantis by merely opening a merge request against the ```gitops``` repository.
- All of the applications running in your Kubernetes cluster are registered in the gitops repository in the root ```/registry``` directory.
- The metaphor repositories only needs an update to the main branch to deliver the example application to your new development, staging, and production environments. It will hook into your new Vault for secrets, demonstrate automated certs, automated DNS, and GitOps application delivery. Our CI/CD is powered by Argo CD, Argo Workflows, GitLab or GitHub, and Vault.

## Platform types

<table>
  <thead>
    <tr>
      <th width="10%"></th>
      <th width="10%">Local</th>
      <th width="10%">AWS + GitHub</th>
      <th width="10%">AWS + GitHub</th>
      <th width="10%">CIVO + GitHub</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>how to use</td>
      <td><code>kubefirst local</code></td>
      <td><code>kubefirst init --cloud aws</code></td>
      <td><code>kubefirst init --cloud aws --git-provider gitlab</code></td>
      <td><code>kubefirst civo create</code></td>
    </tr>
    <tr>
      <td>argocd</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>argo workflows</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>vault</td>
      <td>yes, in dev mode</td>
      <td>yes, backed with DynamoDB and KMS</td>
      <td>yes, backed with DynamoDB and KMS</td>
      <td>yes, in dev mode</td>
    </tr>
    <tr>
      <td>atlantis</td>
      <td>yes*</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>metaphor</td>
      <td>metaphor-frontend</td>
      <td>metaphor suite</td>
      <td>metaphor suite</td>
      <td>metaphor-frontend</td>
    </tr>
    <tr>
      <td>chart museum</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>self-hosted runner</td>
      <td>github action runner runner</td>
      <td>github action runner runner</td>
      <td>gitlab-runner</td>
      <td>github action runner runner</td>
    </tr>
    <tr>
      <td>HTTPS/SSL Certificates</td>
      <td>mkcert</td>
      <td>let's encrypt</td>
      <td>let's encrypt</td>
      <td>let's encrypt</td>
    </tr>
    <tr>
      <td>external-secrets-operator</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>kubefirst console</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
    <tr>
      <td>oidc</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>

*<em> On local, atlantis uses an ngrok tunnel to allow github to call us back, so it may not be production ready.</em>

## Console UI

### AWS or CIVO console

Once you run ```kubefirst cluster create``` command at the end of the installation will open a new browser tab with the Console UI at ```https://kubefirst.<your.domain>``` to provide you a dashboard to navigate through the different services that were previsioned.

![table](/img/console_UI.png)

### Local console

Once you run kubefirst local command at the end of the installation will open a new browser tab with the Console UI at ```https://kubefirst.localdev.me``` to provide you a dashboard to navigate through the different services that were previsioned.

## Destroying

Each kubefirst provisioning command also comes with a corresponding destroy to make it easy to destroy any previsioned infrastructure. Specific destroy guidance is provided for each kubefirst platform.
