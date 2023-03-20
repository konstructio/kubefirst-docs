---
title: Destroy
---

## Destroying your local kubefirst k3d platform

### Automated Teardown

To destroy your k3d cluster, and the Git repositories that we created for you, run:

```shell
kubefirst k3d destroy
```

### Removing CA from the trusted store

If you installed the MkCert CA to the trusted store you can remove it with:

```shell
mkcert -uninstall
```
