# Contributing to the Kubefirst documentation

Firstly, we want to thank you for investing your valuable time to contribute to Kubefirst!

_⚠️ Please note that this file is a work-in-progress, so more details will be added in the future._

Note we have a [code of conduct](CODE_OF_CONDUCT.md) which needs to be followed in all your interactions with the project to keep our community healthy.

## Ways to Contribute

At Kubefirst, we believe that every contribution is valuable, not just the code one, which means we welcome

- [bug reports](https://github.com/kubefirst/kubefirst/issues/new);
- [feature requests](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=);
- [documentation issues reports](https://github.com/kubefirst/kubefirst/issues/new?assignees=&labels=feature-request&template=feature_request.md&title=) like unclear section, missing information or even typos;
- and, of course, any code contributions to Kubefirst, or the documentation itself.

Before making a code change, first discuss your idea via an [issue](https://github.com/kubefirst/docs/issues/new/choose). Please check if a feature request or bug report does [already exist](https://github.com/docs/kubefirst/issues/) before creating a new one.

## Getting Started With the Documentation

We are using [Docusaurus](https://github.com/facebook/docusaurus) as our documentation platform. More information on the platform in their [documentation](https://docusaurus.io/docs).

### Commit messages

We subscribe to the [Conventional Commits specification](https://www.conventionalcommits.org). It can be a bit difficult to choose the right commit message prefix since this repository is for documentation, and not an application per se. Here are the guidelines for the documentation specific ones:

- `docs`: when adding new information to the docs (ex.: creating a new page, adding a section to an existing one).
- `fix`: when fixing the documentation (ex.: correcting a typo, rectifying untrue content).
- `refactor`: rewording part of the content or restructuring the documentation.

Here's the non content related ones:

- `chore`: anything that isn't Docusaurus code related (see `feat` prefix) or documentation content (ex.: updating the `CONTRIBUTING.md` file or releasing a new version of the docs).
- `ci`: any automation, probably GitHub Actions related.
- `feat`: anything related to Docusaurus as our documentation platform (ex.: updating Docusaurus, changing the configurations), aside from styling.
- `style`: anything about styling, mostly CSS.

As of now, we don't see usage for the `perf` & `test` prefixes.

### Update the content

WIP

#### Images

All images will be automatically optimized with a lossless compression level to ensure the best possible experience, while minimizing the image size for slower or expensive internet connection.

##### Alt Text

All images must have alternative text (alt text) that are representative, and descriptive of the image. It is important as we want our documentation to be accessible to everyone. Images with complex or with a lot of information, such as diagrams, should have a short description in the alt text, and have a full-fledge text explaining every part either within the documentation or as an additional page. As for "utility images", the alt text should be a description of the information or action intended by the image, and not the image or icon itself (ex.: a Twitter logo icon that links to our Twitter page should have "kubefirst Twitter account" instead of "Twitter logo" alt text).

##### Themed images

If you want to use a different image for light, and dark mode, you can use the following syntax:

```markdown
![Alt text here](my-image-for-light-mode.png#light-mode)![Alt text here](my-image-for-dark-mode.png#dark-mode)
```

The magic happens with the CSS looking for path fragments, in our case, a URL with either `#light-mode` or `#dark-mode` in it, and don't display the other image.

#### Markdown

Before being able to merge your PR, the [GitHub Action responsible for checking the Markdown validity](https://github.com/kubefirst/docs/blob/main/.github/workflows/check-markdown.yml) needs to pass. If you want to test your changes locally before sending a PR, you can do it by using [act](https://github.com/nektos/act), and run `act -j markdown-check`. We follow the [rules](https://github.com/DavidAnson/markdownlint#rules--aliases) from the [markdownlint application](https://github.com/DavidAnson/markdownlint) with the exceptions of:

- [MD013](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md): limiting the line length to 80 as it's easier to manage without line breaks within the text for documentation content.
- [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md): preventing same text headers as it's needed for our project documentation.
- [MD033](https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md): restrict inline HTML as we sometimes need more customization for the content than what Markdown allows.

We also enforce some styling to prevent ambiguity, and ensure consistency for:

- MD049: underscores for italic text.
- MD050: asterisks for bold text.

#### Special Syntax

If you want to create tabs, it will possible, thanks to the [remark-docusaurus-tabs plugin](https://github.com/mccleanp/remark-docusaurus-tabs). You can do it by using the following syntax:

```markdown
<!--tabs-->
# Apple

This is an apple 🍎

# Orange

This is an orange 🍊

# Banana

This is a banana 🍌
<!--/tabs-->
```

It will generate the following:

![Animated GIF showing the rendered tabs from the above example](img/tabs.gif)

In a nutshell, H1 inside the `<!--tabs--><!--/tabs-->` will be use as tab title, and everything in between as the tab content. It is useful when the documentation is similar to most platforms with small exceptions, like CLI commands.

#### Syntax Highlight

Docusaurus is using Prism for code block syntax highlighting. Here's a list of [supported languages](https://prismjs.com/#supported-languages).

### Update the platform

WIP

### Testing your modifications

To run our documentation locally, simply run `npm start`.

> If you modify the CSS, the changes aren't picked up by the development server as when you modify the documentation content. You need to restart the server with npm.

### Update the Search Index

We use [Typesense](https://github.com/typesense/typesense) as the search engine for our documentation. The index should be updated automatically when we deploy a new version using GitHub Actions, but it's not possible right now. The technology we use to serve the docs doesn't manage the trailing slashes, and 404 well, which makes the [Typesense DocSearch scraper](https://github.com/typesense/typesense-docsearch-scraper) loop infinitely on content. So until we have a proper documentation deployment in place, we have to update the search index manually. To do so, you will need [npm](https://github.com/npm/cli), and [Docker](https://www.docker.com) installed.

The first step is to build the documentation:

```shell
npm run build
```

After that, deploy the content of the `build` folder to a hosting service on it's own domain or subdomain. After that, open the [typesense.docsearch.config.json](https://github.com/kubefirst/docs/blob/main/typesense.docsearch.config.json) file. You need to replace the domain `docs.kubefirst.io` with your own inside the `start_urls`, and the `sitemap_urls` JSON properties. This is gonna work even if your domain isn't `docs.kubefirst.io` as the search index is built using the relative path of the indexed content.

As a final step, you need to create a `.env` file with the following content. Replace the `TYPESENSE_API_KEY` value with a kubefirst Typesense API key with writing access:

```dotenv
TYPESENSE_API_KEY=<API_KEY>
TYPESENSE_HOST=typesense.mgmt.kubefirst.com
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
```

You are now ready to run the scraper:

```shell
docker run -it --env-file=.env -e "CONFIG=$(cat typesense.docsearch.config.json | jq -r tostring)" \
  typesense/docsearch-scraper:0.5.0
```

If everything goes right, you'll see a bunch of output, and the process should end with the line `Nb hits: 935` (the number of hits will probably differ as we update the content).

## Getting Started with Kubefirst Code

Please check the [CONTRIBUTING.md](https://github.com/kubefirst/kubefirst/blob/main/CONTRIBUTING.md) file from the [kubefirst](https://github.com/kubefirst/kubefirst/) repository.

## Help

If you need help in your Kubefirst journey as a contributor, please join our [Slack Community](http://kubefirst.io/slack). We have the `#contributors` channel where you can ask any questions or get help with anything contribution-related. For support as a user, please ask in the `#helping-hands` channel, or directly to @fharper (Fred in Slack), our Developer Advocate.
