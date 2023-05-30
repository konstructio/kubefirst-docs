#!/bin/zsh

#
# beta version, need more testing
#
# Script to semi-automate changes duplication from the v.next only (docs folder)
# docs to other versioned docs (versioned_docs/version-X.X.X folders).
#
# Dependency:
#  - gum https://github.com/charmbracelet/gum/
#
# Usage:
# 1. git add the files you want to commit
# 2. run `zsh tools/duplicate.zsh` in your terminal`
# 3. from the menu, unselect the file(s) you don't want to duplicate (they are all selected by default)
# 4. from the next menu, select the targeted versioned doc(s) where to duplicate the selected file(s)
# 5. Commit your changes, and voilà
#
# Known issues:
#  - selection of one file or doc version doesn't seem to work, just press ENTER (see https://github.com/charmbracelet/gum/issues/361)
#  - you cannot escape the menu selection, it does not exit the script
#

#
# Configurations
#
YELLOW="\033[1;93m"
RED="\033[0;31m"
NOCOLOR="\033[0m"

#
# Check if the tools used are installed
#
if [[ -n $(which gum >/dev/null) ]] ;
then
    echo "gum is used to give a better experience. Would you like to ${YELLOW}install it using Homebrew${NOCOLOR}? [Y/n] "
    read -r ANSWER

    if [[ ! $ANSWER || "$ANSWER" == "Y" || "$ANSWER" == "y" ]] ;
    then
        tput sc && brew install gum && tput rc && tput ed
    else
        echo "This script ${YELLOW}cannot work${NOCOLOR} without this utility. Find alternative ways to install it at https://github.com/charmbracelet/gum/."
        exit
    fi
fi

#
# Welcome the user
#
gum style --foreground 212 --border-foreground 212 --border double --align center --width 100 --margin "1 2" --padding "2 4" 'THE DUPLICATOR' '' 'With great power comes great responsibility, use carefully!'

#
# Get staged file(s)
#
local files=("${(@f)$(git diff --name-only --cached | grep '^docs/')}")
if [[ -z "$files" ]] ;
then
  echo "${RED}No files staged: please staged the modified files you would like to duplicate, and run this script again."
  exit
fi

#
# Get file(s) to copy
#
local command='git diff --name-only --cached | grep '^docs/' | gum choose --no-limit --unselected-prefix "[ ] " --cursor-prefix "[ ] " --selected-prefix "[✓] "'

for file in $files;
do
  command="$command --selected \"$file\""
done

gum format -- "Unselect files you don't want to updates:"
local selectedFiles=("${(@f)$(eval $command)}")

#
# Get versioned doc(s) target
#
versions=$(ls -d versioned_docs/*)
versionsNames=$(echo $versions | sed 's/versioned_docs\/version-//g')

gum format -- "Select the version(s) you want to update also:"
local selectedVersions=("${(@f)$(echo $versionsNames | gum choose --no-limit --unselected-prefix "[ ] " --cursor-prefix "[ ] " --selected-prefix "[✓] ")}")

#
# Copy & stage the files to all the selected docs version
#
for file in $selectedFiles;
do
    for version in $selectedVersions;
    do
        local newfile=${file//docs/versioned_docs\/version-$version}
        cp $file $newfile
        git add $newfile
    done
done

#
# Show result
#
gum format -- "Copy is done!"
git status
