# Contributing to the kubefirst documentation

Firstly, we want to thank you for investing your valuable time to contribute to kubefirst!

Note we have a [code of conduct](CODE_OF_CONDUCT.md) which needs to be followed in all your interactions with the project to keep our community healthy.

_For contribution to the kubefirst CLI, please refer yourself to the [CONTRIBUTING.md](https://github.com/kubefirst/kubefirst/blob/main/CONTRIBUTING.md) from the [kubefirst repository](https://github.com/kubefirst/kubefirst)._

- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
  - [Commits](#commits)
  - [Images](#images)
  - [Markdown](#markdown)
  - [Search Index](#search-index)
  - [Testing](#testing)
  - [Update docs across versions](#update-docs-across-versions)
  - [Versioning](#versioning)
- [Help](#help)

## Ways to Contribute

At kubefirst, we believe that every contribution is valuable, not just the code one.

Whether you want to add more details to a specific section or a page, or that you want to fix a typo in the text or in a code example, you are more than welcome to can create a pull request.

For more substantial changes, it is highly suggested that you discuss your idea with us first. You can do that by either creating an [issue](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=), or by joining us in our [Slack community](https://kubefirst.io/slack), and start a thread in the #contributors channel.

If you don't want to make the changes yourself, no worries, we got your back: just report the problem by creating an [issue](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=) or letting us know on our [Slack Community](https://kubefirst.io/slack).

Please check if a problem or a suggestion has already been created as an [issue](https://github.com/kubefirst/docs/issues/) before creating a new one.

## Getting Started

We are using [Docusaurus](https://github.com/facebook/docusaurus) as our documentation platform. More information on Docusaurus is available in their [documentation](https://docusaurus.io/docs). Here's some guidelines that you need to follow or useful information you need to know about before doing any content modification.

### Commits

We subscribe to the [Conventional Commits specification](https://www.conventionalcommits.org). It can be a bit difficult to choose the right commit message prefix since this repository is for documentation, and not an application. Here are the guidelines for the documentation specific ones:

- `docs`: when adding new information to the docs (ex.: creating a new page, adding a section to an existing one).
- `fix`: when fixing the documentation (ex.: correcting a typo, rectifying untrue content).
- `refactor`: rewording part of the content or restructuring the documentation.

Here's the non content related ones:

- `chore`: anything that isn't Docusaurus code related (see `feat` prefix) or documentation content (ex.: updating the `CONTRIBUTING.md` file or releasing a new version of the docs).
- `ci`: any automation, probably GitHub Actions related.
- `feat`: anything related to Docusaurus as our documentation platform (ex.: updating Docusaurus, changing the configurations), aside from styling.
- `style`: anything about styling, mostly CSS.

As of now, we don't see usage for the `perf` & `test` prefixes.

Lastly, your commits need to be signed so they can be verified. GitHub has [great documentation on how to do that](https://docs.github.com/en/authentication/managing-commit-signature-verification). If you do not sign your commit, you'll get additional information by the GitHub Action in your pull request.

### Images

All images will be automatically optimized with a lossless compression level to ensure the best possible experience, while minimizing the image size for slower or expensive internet connection.

All images should be added in the `img` folder under each documentation versions. No specific documentation images should be added in the `static/img` folder: this gives us the opportunity to have different versions for different kubefirst version when needed.

#### Alt Text

All images must have alternative text (alt text) that are representative, and descriptive of the image. It is important as we want our documentation to be accessible to everyone. Images with complex or with a lot of information, such as diagrams, should have a short description in the alt text, and have a full-fledge text explaining every part either within the documentation or as an additional page. As for "utility images", the alt text should be a description of the information or action intended by the image, and not the image or icon itself (ex.: a Twitter logo icon that links to our Twitter page should have "kubefirst Twitter account" instead of "Twitter logo" alt text).

#### Themed images

If you want to use a different image for light, and dark mode, you can use the following syntax:

```markdown
![Alt text here](my-image-for-light-mode.png#light-mode)![Alt text here](my-image-for-dark-mode.png#dark-mode)
```

The magic happens with the CSS looking for path fragments, in our case, a URL with either `#light-mode` or `#dark-mode` in it, and don't display the other image.

### Markdown

Before being able to merge your PR, the [GitHub Action responsible for checking the Markdown validity](https://github.com/kubefirst/docs/blob/main/.github/workflows/check-markdown.yml) needs to pass. If you want to test your changes locally before sending a PR, you can do it by using [act](https://github.com/nektos/act), and run `act -j markdown-check`. We follow the [rules](https://github.com/DavidAnson/markdownlint#rules--aliases) from the [markdownlint application](https://github.com/DavidAnson/markdownlint) with the exceptions of:

- [MD013](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md): limiting the line length to 80 as it's easier to manage without line breaks within the text for documentation content.
- [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md): preventing same text headers as it's needed for our project documentation.
- [MD033](https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md): restrict inline HTML as we sometimes need more customization for the content than what Markdown allows.

We also enforce some styling to prevent ambiguity, and ensure consistency for:

- MD049: underscores for italic text.
- MD050: asterisks for bold text.

#### Special Syntax

##### Admonitions

You can also use special Docusaurus Markdown syntax called admonitions, which let you display beautiful notes, information, warnings, and others.

```markdown
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

which generate

![Admunitions examples](img/admonitions.png)

##### Tabs

If you want to create tabs, it is possible with MDX syntax. To see an example of code, check the [common UI page code](https://github.com/kubefirst/docs/blob/main/versioned_docs/version-2.3/common/ui.mdx) from v2.3 docs. You can see the end result on the [live version of the docs page](https://docs.kubefirst.io/civo/quick-start/install/ui#step-1-install-kubefirst-console).

It will generate the following:

![Animated GIF showing the rendered tabs from the above example](img/tabs.gif)

#### Syntax Highlight

Docusaurus is using Prism for code block syntax highlighting. Here's a list of [supported languages](https://prismjs.com/#supported-languages).

### Search Index

We use [Typesense](https://github.com/typesense/typesense) as the search engine for our documentation. The index should be updated automatically when we deploy a new version, but it's implemented right now. To update it, run the [update-search.yml](.github/workflows/update-search.yml) GitHub Action.

### Testing

To run our documentation locally, simply run `npm start`.

> If you modify the CSS, the changes aren't picked up by the development server like when you modify the documentation content. You need to restart the server with npm.

### Update docs across versions

Sometimes changes in `v.next` are also valid for previous versions, which is often the case when refactoring a section, or adding missing information to a page. You can either copy the change content manually, or use the ZSH tools we created easily for that. First, you need to stage the file(s) you modified or created. Once it's done, run this command from the documentation folder in your terminal:

```shell
zsh tools/duplicator.zsh
```

You'll be presented with a menu giving you the opportunity to select the files you want to copy, and also the possibility to select to which version you want to do it. Once the selections are done, the script will copy or overwrite existing files with the one you modified, and will stage them. You only need to create a new branch for the PR, and [commit](#commits) the changes.

> Note that it is copying the entire file, so it will overwrite the content to the targeted version. We may support updating only changes content in the future.

### Versioning

Docusaurus manages [documentation versions](https://docusaurus.io/docs/versioning), which we started to use since the v2.0.0 release. It means that every time we release a new version (minor or major only) of kubefirst, we need to freeze the `next` documentation, meaning the documentation updated in the `docs` directory, into a versioned one inside the `versioned_docs\version-X.X` folder. To generate a new version, run the [Create a new docs version](https://github.com/kubefirst/docs/actions/workflows/release.yml) GitHub Actions workflow, and enter the desired version number. It will create a pull request with the new version for you.

## Help

If you need help in your kubefirst journey as a contributor, please join our [Slack Community](http://kubefirst.io/slack). We have the `#contributors` channel where you can ask any questions or get help with anything contribution-related. For support as a user, please ask in the `#helping-hands` channel, or directly to @fharper (Fred in Slack), our Developer Advocate.
