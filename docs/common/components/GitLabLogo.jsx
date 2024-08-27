import { useColorMode } from '@docusaurus/theme-common';
import GitLabDark from '../../img/common/gitlab/gitlab-dark.svg';
import GitLabLight from '../../img/common/gitlab/gitlab-light.svg';

export const GitLabLogo = () => {
    if (useColorMode().colorMode === 'dark') {
        return (
            <GitLabDark width="80px" alt="GitLab logo" />
        )
    } else {
        return (
            <GitLabLight width="80px" alt="GitLab logo" />
        )
    }
}

export default GitLabLogo;
