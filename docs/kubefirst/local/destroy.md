---
title: Destroy
---

## Destroying your local kubefirst k3d platform

### Automated Teardown

To destroy your k3d cluster and the git repositories that we created for you run:

```shell
kubefirst k3d destroy
```

### Removing CA from the trusted store

If you installed the MkCert CA to the trusted store you can remove it with:

```shell
mkcert -uninstall
```

### Tips

#### Avoiding tools re-download
<!-- TODO: 2.0 - confirm flag on 2.0 -->
The kubefirstCLI download some tools used during cluster provisioning, for example, Terraform, Helm, and Kubectl, in versions compatible with Kubefirst and stores them in the K1 folder. If you are using Kufibefirst to demo in conferences or using poor connections (mobile, hotels) you should consider using this additional flag `--preserve-tools` for each cycle of create/destroy.

This will preserve tools downloaded and will save time and network bandwidth during cluster provisioning.
