---
title: Certificates
---

## SSL Certificates

In cloud versions of the kubefirst platform, we use [Cert Manager](https://cert-manager.io/) with a [Let's Encrypt](https://letsencrypt.org) clusterissuer for TLS encryption to all of our ingressed services. These certificates are requested automatically, and will auto-renew.

On local versions of the kubefirst platform, we leverage [mkcert](https://github.com/FiloSottile/mkcert) to generate certificates for a domain we host at `kubefirst.dev`.

To trust mkcerts in your browser, run

```bash
mkcert -install
```
