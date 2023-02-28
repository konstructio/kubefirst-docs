/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    'kubefirst/overview',
    {
      type: 'category',
      label: 'Local Platform',
      items: [
        {
          type: 'category',
          label: 'Explore',
          items: [
            'kubefirst/local/install',
            'kubefirst/local/explore/overview',
            'kubefirst/local/explore/console',
            'kubefirst/local/explore/user-creation',
            'kubefirst/local/explore/metaphor',
            'kubefirst/local/explore/github-repositories'
          ]
        },
        'kubefirst/local/limitations',
        'kubefirst/local/destroy'
      ]
    },
    {
      type: 'category',
      label: 'Civo Platform',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/civo/install',
            'kubefirst/civo/getting-started/overview',
            'kubefirst/civo/getting-started/github-repositories',
            'kubefirst/civo/getting-started/user-creation',
            'kubefirst/civo/getting-started/metaphor'
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault'
          ]
        },
        'kubefirst/civo/destroy'
      ]
    },
    {
      type: 'category',
      label: 'AWS Platform (GitHub)',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/github/install',
            'kubefirst/github/github-repositories',
            'kubefirst/github/overview',
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault'
          ]
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'explore/security',
            'explore/certificates',
            'explore/github-token',
            'explore/metaphor'
          ]
        },
        'kubefirst/github/destroy'
      ]
    },
    {
      type: 'category',
      label: 'AWS Platform (GitLab)',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/gitlab/install',
            'kubefirst/gitlab/explore',
            'kubefirst/gitlab/gitlab',
            'kubefirst/gitlab/gitlab-repositories',
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault'
          ]
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'explore/security',
            'explore/certificates',
            'explore/metaphor'
          ]
        },
        'kubefirst/gitlab/destroy'
      ]
    },
    {
      type: 'category',
      label: 'Installer Options',
      items: [
        'explore/open-telemetry'
      ]
    },
    'kubefirst/FAQ',
    'kubefirst/credit'
  ]
};

module.exports = sidebars;
