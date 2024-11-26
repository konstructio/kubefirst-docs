import fs from 'fs/promises';
import path from 'path';

const rootPath = path.join(import.meta.dirname, '..');

async function removeFromVersionsJSON(version) {
    const versionsFile = path.join(rootPath, 'versions.json');

    console.log(`Removing version ${version} from ${versionsFile}`);

    const versions = JSON.parse(await fs.readFile(versionsFile, 'utf-8'));

    if (!versions.includes(version)) {
        throw new Error('Unknown version');
    }

    const newVersions = versions.filter((v) => v !== version);

    await fs.writeFile(versionsFile, `${JSON.stringify(newVersions, null, 2)}\n`, 'utf-8');
}

async function removeVersionedDocs(version) {
    const directory = path.join(rootPath, 'versioned_docs', `version-${version}`);

    console.log(`Deleting ${directory}`);

    await fs.rm(directory, {
        recursive: true,
        force: true,
    });
}

async function removeVersionedSidebar(version) {
    const file = path.join(rootPath, 'versioned_sidebars', `version-${version}-sidebars.json`);

    console.log(`Deleting ${file}`);

    await fs.rm(file);
}

async function main() {
    const [, , version] = process.argv;

    if (!version) {
        throw new Error('Version not set');
    }

    await removeFromVersionsJSON(version);
    await removeVersionedDocs(version);
    await removeVersionedSidebar(version);

    console.log(`Version ${version} is removed`)
}

main().catch(err => {
    console.log(err.stack);
    process.exit(1);
});
