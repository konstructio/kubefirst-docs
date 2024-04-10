---
slug: /
---
# kubefirst Platforms

## What is kubefirst?

kubefirst is a fully automated and operational open source platform that includes some of the most popular open source tools available in the Kubernetes space, all working together from a single command.

We support local, AWS, and Civo clouds. By running our CLI commands against your empty environment, you'll get a GitOps cloud management and application delivery ecosystem complete with automated Terraform workflows, Vault secrets management, GitLab or GitHub integrations with Argo, and demo applications that demonstrate how it all pieces together.

![kubefirst Architecture](img/common/kubefirst/architecture-light.svg#light-mode)![kubefirst Architecture](img/common/kubefirst/architecture-dark.svg#dark-mode)

---

## Choose your platform type

Choose one of the available options below

<div className="row">
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/local/github/local_github.jpg").default}
               alt="Local k3d with GitHub"
               title="Local k3d with GitHub" />
            </div>
            <div className="card__body">
            <h3>kubefirst Local (k3d with GitHub)</h3>
            <p>
               The <strong>fastest</strong> way to explore the kubefirst platform!
            </p>
            <p>
               With kubefirst k3d, you can explore some of the best parts of the kubefirst platform running for free on a local k3d cluster in less than 5 minutes - without any cloud costs or domain prerequisites.
            </p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/local/github/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/local/gitlab/local_gitlab.jpg").default}
               alt="Local k3d with GitLab"
               title="Local k3d with GitLab" />
            </div>
            <div className="card__body">
            <h3>🆕 kubefirst Local (k3d with GitLab)</h3>
            <p>
               The <strong>fastest</strong> way to explore the kubefirst platform!
            </p>
            <p>
               With kubefirst k3d, you can explore some of the best parts of the kubefirst platform running for free on a local k3d cluster in less than 5 minutes - without any cloud costs or domain prerequisites.
            </p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/local/gitlab/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/civo/github/civo_github.jpg").default}
               alt="Civo Cloud with GitHub"
               title="Civo Cloud with GitHub" />
            </div>
            <div className="card__body">
                <h3>🆕 kubefirst on Civo Cloud (GitHub)</h3>
                <p>The perfect cloud environment when Kubernetes will be the center of attention.</p>
                <p>A <strong>simple cloud footprint</strong> with a powerful open source cloud native tool set for identity and infrastructure management, application delivery, and secrets management. Cloud native infrastructure with incredibly fast provisioning times.</p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/civo/github/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/civo/gitlab/civo_gitlab.jpg").default}
               alt="Civo Cloud with GitLab"
               title="Civo Cloud with GitLab" />
            </div>
            <div className="card__body">
                <h3>🆕 kubefirst on Civo Cloud (GitLab)</h3>
                <p>The perfect cloud environment when Kubernetes will be the center of attention.</p>
                <p>A <strong>simple cloud footprint</strong> with a powerful open source cloud native tool set for identity and infrastructure management, application delivery, and secrets management. Cloud native infrastructure with incredibly fast provisioning times.</p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/civo/gitlab/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/aws/github/aws_github.jpg").default}
               alt="AWS Cloud with GitHub"
               title="AWS Cloud with GitHub" />
            </div>
            <div className="card__body">
            <h3> kubefirst on AWS (GitHub)</h3>
            <p>
               Our AWS cloud platform can accommodate all the <strong>needs of your enterprise</strong> and supports the <strong>GitHub</strong> git provider. All you need is a domain in addition to a hosted zone, and within 35 minutes of running a single command, you'll have a secure EKS infrastructure management and application delivery platform.
            </p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/aws/github/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
    <div className="col col--6 margin-bottom--lg">
        <div className="card">
            <div className="card__image">
            <img
               src={require("./img/aws/gitlab/aws_gitlab.jpg").default}
               alt="AWS Cloud with GitLab"
               title="AWS Cloud with GitLab" />
            </div>
            <div className="card__body">
            <h3> kubefirst on AWS (GitLab)</h3>
            <p>
               Our AWS cloud platform can accommodate all the <strong>needs of your enterprise</strong> and supports the <strong>GitLab</strong> git provider. All you need is a domain in addition to a hosted zone, and within 35 minutes of running a single command, you'll have a secure EKS infrastructure management and application delivery platform.
            </p>
            </div>
            <div className="card__footer">
                <form>
                    <button className="button button--secondary button--block" formAction="kubefirst/aws/gitlab/install">View install instructions</button>
                </form>
            </div>
        </div>
    </div>
</div>

To learn more about kubefirst check out our [overview](kubefirst/overview.md).
