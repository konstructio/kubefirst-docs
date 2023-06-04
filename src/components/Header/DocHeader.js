import React from "react";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';

export default function DocHeader({ imgURL }) {


    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div>
                <Tabs groupId="git_provider" queryString>
                    <TabItem value="github" label="GitHub" attributes={{className: styles.github}} />
                    <TabItem value="gitlab" label="GitLab" attributes={{className: styles.gitlab}} />
                </Tabs>
            </div>
            <div>
                <img src={imgURL} height="50" width="120" />
            </div>
        </div>
    );
}
