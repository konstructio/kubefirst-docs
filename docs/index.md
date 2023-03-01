---
slug: /
---
# Kubefirst Platforms

## What is Kubefirst?

Kubefirst is a fully automated and operational open source platform that includes some of the most popular open source tools available in the Kubernetes space, all working together from a single command.

We support local, AWS, and Civo clouds. By running our cli commands against your empty environment, you'll get a GitOps cloud management and application delivery ecosystem complete with automated Terraform workflows, Vault secrets management, GitLab or GitHub integrations with Argo, and demo applications that demonstrate how it all pieces together.

![Kubefirst Architecture](./img/kubefirst/kubefirst-arch.png)

---

## Choose your platform type

Choose one of the available options below

<div class="row">
    <div class="col col--6 margin-bottom--lg">
        <div class="card">
            <div class="card__image">
            <img
               src="\img\local_github.jpg"
               alt="Image alt text"
               title="Logo Title Text 1" />
            </div>
            <div class="card__body">
            <h3>Kubefirst Local (GitHub)</h3>
            <p>
               The <strong>fastest</strong> way to explore the kubefirst platform!
            </p>
            <p>
               With kubefirst local, you can explore some of the best parts of Kubefirst running for free on a local k3d cluster in less than 5 minutes - without any cloud costs or domain prerequisites.
            </p>
            </div>
            <div class="card__footer">
                <form>
                    <button class="button button--secondary button--block" formaction="kubefirst/local/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col col--6 margin-bottom--lg">
        <div class="card">
            <div class="card__image">
            <img
               src="\img\aws_github.jpg"
               alt="Image alt text"
               title="Logo Title Text 1" />
            </div>
            <div class="card__body">
            <h3>Kubefirst on AWS (GitHub)</h3>
            <p>
               Our AWS cloud platform can accommodate all of the <strong>needs of your enterprise</strong> and supports both GitHub and GitLab providers.
            </p>
            <p>
               The GitHub option will leverage the free GitHub system at <a href="https://www.github.com/">github.com</a>
            </p>
            </div>
            <div class="card__footer">
                <form>
                    <button class="button button--secondary button--block" formaction="kubefirst/github/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col col--6 margin-bottom--lg">
        <div class="card">
            <div class="card__image">
            <img
               src="\img\aws_gitlab.jpg"
               alt="Image alt text"
               title="Logo Title Text 1" />
            </div>
            <div class="card__body">
            <h3> Kubefirst on AWS (GitLab)</h3>
            <p>
               Our AWS cloud platform can accommodate all of the <strong>needs of your enterprise</strong> and supports both GitHub and GitLab providers.
            </p>
            <p>
               The GitLab option will move your git repositories to your newly created kubefirst management cluster.
            </p>
            </div>
            <div class="card__footer">
                <form>
                    <button class="button button--secondary button--block" formaction="kubefirst/gitlab/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
    <div class="col col--6 margin-bottom--lg">
        <div class="card">
            <div class="card__image">
            <img
               src="\img\civo_github.jpg"
               alt="CIVO Cloud with GitHub"
               title="Logo Title Text 1" />
            </div>
            <div class="card__body">
            <h3>Kubefirst on CIVO Cloud (GitHub) 🆕</h3>
            <p>
               The perfect cloud environment where Kubernetes will be the center of attention.
            </p>
            <p>A <strong>simple cloud footprint</strong> with a powerful open source cloud native tool   set for identity and infrastructure management, application delivery, and secrets management.
            </p>
            </div>
            <div class="card__footer">
                <form>
                    <button class="button button--secondary button--block" formaction="kubefirst/civo/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
</div>

To learn more about Kubefirst check out our [overview](kubefirst/overview.md).
