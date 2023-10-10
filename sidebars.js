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
  aws: [
    'aws/overview',
    {
      'Quick Start': [
        {
          Install: [
            {
              type: 'autogenerated',
              dirName: 'aws/quick-start/install',
            },
          ],
        },
        'aws/quick-start/repositories',
      ],
      Explore: [
        {
          type: 'autogenerated',
          dirName: 'aws/explore',
        },
      ],
      Advanced: [
        {
          type: 'autogenerated',
          dirName: 'aws/advanced',
        },
      ],
    },
    'aws/gitops-catalog',
    'aws/deprovision',
    'aws/faq',
    'aws/credits',
  ],
  do: [
    'do/overview',
    {
      'Quick Start': [
        {
          Install: [
            {
              type: 'autogenerated',
              dirName: 'do/quick-start/install',
            },
          ],
        },
        'do/quick-start/repositories',
      ],
      Explore: [
        {
          type: 'autogenerated',
          dirName: 'do/explore',
        },
      ],
    },
    'do/gitops-catalog',
    'do/deprovision',
    'do/faq',
    'do/credits',
  ],
  civo: [
    'civo/overview',
    {
      'Quick Start': [
        {
          Install: [
            {
              type: 'autogenerated',
              dirName: 'civo/quick-start/install',
            },
          ],
        },
        'civo/quick-start/repositories',
      ],
      Explore: [
        {
          type: 'autogenerated',
          dirName: 'civo/explore',
        },
      ],
    },
    'civo/gitops-catalog',
    'civo/deprovision',
    'civo/faq',
    'civo/credits',
  ],
  gcp: [
    'gcp/overview',
    {
      'Quick Start': [
        {
          'Install': [
            {
            type: 'autogenerated',
            dirName: 'gcp/quick-start/install',
          }
        ],
      },
      'gcp/quick-start/repositories',
      ],
      'Explore': [
        {
          type: 'autogenerated',
          dirName: 'gcp/explore',
        },
      ],
    },
    'gcp/gitops-catalog',
    'gcp/deprovision',
    'gcp/faq',
    'gcp/credits',
  ],
  k3d: [
    'k3d/overview',
    {
      'Quick Start': [
        {
          type: 'autogenerated',
          dirName: 'k3d/quick-start',
        },
      ],
      Explore: [
        {
          type: 'autogenerated',
          dirName: 'k3d/explore',
        },
      ],
    },
    'k3d/gitops-catalog',
    'k3d/deprovision',
    'k3d/faq',
    'k3d/credits',
  ],
  vultr: [
    'vultr/overview',
    {
      'Quick Start': [
        {
          Install: [
            {
              type: 'autogenerated',
              dirName: 'vultr/quick-start/install',
            },
          ],
        },
        'vultr/quick-start/repositories',
      ],
      Explore: [
        {
          type: 'autogenerated',
          dirName: 'vultr/explore',
        },
      ],
    },
    'vultr/gitops-catalog',
    'vultr/deprovision',
    'vultr/faq',
    'vultr/credits',
  ],
};

module.exports = sidebars;
