#!/bin/zsh

#
# Duplicator
#
# Script to semi-automate changes duplication from the v.next only (docs folder)
# docs to other versioned docs (versioned_docs/version-X.X.X folders).
#
# Dependency:
#  - gum https://github.com/charmbracelet/gum/
#
# Usage:
# 1. git add the files you want to commit
# 2. run `zsh tools/duplicator.zsh` in your terminal`
# 3. from the menu, unselect the file(s) you don't want to duplicate (they are all selected by default)
# 4. from the next menu, select the targeted versioned doc(s) where to duplicate the selected file(s)
# 5. Commit your changes, and voilà
#
# Known issues:
#  - selection when there is only one file or one doc version doesn't seem to work properly with the space bar + checkbox, but the result is the same, just press ENTER (see https://github.com/charmbracelet/gum/issues/361)
#  - copy the file, and not just the changed content, so if the target version have difference, it will overwrite them.
#  - you need to stage the files first, probably will add an option to stage changes files in the future.
#  - renamed files works only for R100 status as it's copying the original versioned file, and not the newly renamed modified docs one.
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
# Clear last terminal line
#
function clearLastLine {
    tput cuu 1 >&2
    tput el >&2
}

#
# Welcome the user
#
gum style --foreground 212 --border-foreground 212 --border double --align center --width 100 --margin "1 2" --padding "2 4" 'THE DUPLICATOR' '' 'With great power comes great responsibility, use carefully!'

#
# Get staged file(s)
#
local files=("${(@f)$(git diff --name-only --cached | grep '^docs/')}")
#local files=("${(@f)$(git diff --name-status --cached | sed 's/[M|D]\t\(.*\)/\1/' | sed 's/R[0-9]*\t\(.*\)\t.*/\1/' | grep '^docs/')}")
if [[ -z "$files" ]] ;
then
  echo "${RED}No files staged: please staged the modified files you would like to duplicate, and run this script again."
  exit
fi

#
# Get file(s) to copy
#
local command='git diff --name-only --cached | grep '^docs/' | gum choose --no-limit --unselected-prefix "[ ] " --cursor-prefix "[ ] " --selected-prefix "[✓] "'
#local command="git diff --name-status --cached | sed 's/[M|D]\t\(.*\)/\1/' | sed 's/R[0-9]*\t\(.*\)\t.*/\1/' | grep '^docs/' | gum choose --no-limit --unselected-prefix \"[ ] \" --cursor-prefix \"[ ] \" --selected-prefix \"[✓] \""

for file in $files;
do
  command="$command --selected \"$file\""
done

gum format -- "Unselect files you don't want to updates:"
local selectedFiles=("${(@f)$(eval $command || echo "ESC")}")
clearLastLine

# Check if user escaped
if [[ "$selectedFiles" == "ESC" ]]
then
    exit
fi

#
# Get versioned doc(s) target
#
local versions=$(ls -r -d versioned_docs/*)
local versionsNames=$(echo $versions | sed 's/versioned_docs\/version-//g')

# Select last one by default (should refactor this better)
local defaultVersion=$(ls -r -d versioned_docs/* | head -n 1 | sed 's/versioned_docs\/version-//g')

gum format -- "Select the version(s) you want to update also:"
local selectedVersions=("${(@f)$(echo $versionsNames | gum choose --no-limit --unselected-prefix "[ ] " --cursor-prefix "[ ] " --selected-prefix "[✓] " --selected="$defaultVersion" || echo "ESC")}")
clearLastLine

# Check if user escaped
if [[ "$selectedVersions" == "ESC" ]]
then
    exit
fi

#
# Copy & stage the files to all the selected docs version
#
if [[ ! -z $selectedVersions ]] ; then
    for file in $selectedFiles;
    do
        for version in $selectedVersions;
        do
            local versioned_file=${file//docs/versioned_docs\/version-$version}

            # Get the file git status to go the proper action
            local file_status=$(git status | grep "$file" | grep -E "modified|renamed|deleted" | sed 's/\t\(.*\):.*/\1/')
            echo "$file $file_status"
            if [[ "$file_status" == "modified" ]]
            then
                cp "$file" "$versioned_file"
                git add "$versioned_file"
            elif [[ "$file_status" == "renamed" ]]
            then
                #Need to rename the versioned file (work only if R100)
                local renamed_files=$(git status | grep "$file" | sed 's/\trenamed:    \(.*\) -> \(.*\)/\1;\2/')

                file=$(echo "$renamed_files" | cut -d ";" -f 1)
                file=${file//docs/versioned_docs\/version-$version}

                versioned_file=$(echo "$renamed_files" | cut -d ";" -f 2)
                versioned_file=${versioned_file//docs/versioned_docs\/version-$version}

                git mv "$file" "$versioned_file"
            elif [[ "$file_status" == "deleted" ]]
            then
                git rm "$versioned_file"
            fi
        done
    done

    # Show result
    gum format -- "Duplication is done!"
    echo
    git status
else
    gum format -- "No versions selected!"
fi
