import { useColorMode } from '@docusaurus/theme-common';
import GitHubDark from '../../img/common/github/github-dark.svg';
import GitHubLight from '../../img/common/github/github-light.svg';

export const GitHubLogo = () => {
    if (useColorMode().colorMode === 'dark') {
        return (
            <GitHubDark width="80px" alt="GitHub logo" />
        )
    } else {
        return (
            <GitHubLight width="80px" alt="GitHub logo" />
        )
    }
}

export default GitHubLogo;
