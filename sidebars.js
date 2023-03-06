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
      label: 'Local with GitHub',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/local/github/install',
            'kubefirst/local/overview',
            'kubefirst/local/github/repositories'
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'kubefirst/local/github/user-creation',
            'explore/metaphor',
            'kubefirst/local/limitations',
            'explore/telemetry'
          ]
        },
        'kubefirst/local/destroy'
      ]
    },
    {
      type: 'category',
      label: 'Local with GitLab',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/local/gitlab/install',
            'kubefirst/local/overview',
            'kubefirst/local/gitlab/repositories'
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'kubefirst/local/gitlab/user-creation',
            'explore/metaphor',
            'kubefirst/local/limitations',
            'explore/telemetry'
          ]
        },
        'kubefirst/local/destroy'
      ]
    },
    {
      type: 'category',
      label: 'Civo with GitHub',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/civo/github/install',
            'kubefirst/civo/overview',
            'kubefirst/civo/github/repositories'
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'kubefirst/civo/user-creation',
            'explore/metaphor',
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault',
            'explore/telemetry'
          ]
        },
        'kubefirst/civo/destroy'
      ]
    },
    {
      type: 'category',
      label: 'Civo with GitLab',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/civo/gitlab/install',
            'kubefirst/civo/overview',
            'kubefirst/civo/gitlab/repositories'
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'kubefirst/civo/user-creation',
            'explore/metaphor',
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault',
            'explore/telemetry'
          ]
        },
        'kubefirst/civo/destroy'
      ]
    },
    {
      type: 'category',
      label: 'AWS with GitHub',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/aws/github/install',
            'kubefirst/aws/github/repositories',
            'kubefirst/aws/github/overview',
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault',
            'explore/telemetry'
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
        'kubefirst/aws/destroy'
      ]
    },
    {
      type: 'category',
      label: 'AWS with GitLab',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'kubefirst/aws/gitlab/install',
            'kubefirst/aws/gitlab/overview',
            'kubefirst/aws/gitlab/repositories',
          ]
        },
        {
          type: 'category',
          label: 'Explore',
          items: [
            'explore/argocd',
            'explore/gitops',
            'explore/terraform',
            'explore/vault',
            'explore/telemetry'
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
        'kubefirst/aws/destroy'
      ]
    },
    'FAQ',
    'credits'
  ]
};

module.exports = sidebars;
