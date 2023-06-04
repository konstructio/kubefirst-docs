---
title: Git Authentication
id: gitAuth
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "@site/docs/stylesheets/tabs.module.css";

import GitHubTokens from '@site/docs/aws/advanced/partials/github/_tokens.mdx'
import GitLabTokens from '@site/docs/aws/advanced/partials/gitlab/_tokens.mdx'

<Tabs groupId="git_provider" queryString>
    <TabItem value="github" label="GitHub" attributes={{className: styles.github}}>
      <GitHubTokens />
    </TabItem>
    <TabItem value="gitlab" label="GitLab" attributes={{className: styles.gitlab}}> 
      <GitLabTokens />
    </TabItem>
</Tabs>