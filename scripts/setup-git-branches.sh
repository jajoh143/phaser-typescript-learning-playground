#!/usr/bin/env bash
set -euo pipefail

# Creates the baseline branch layout for this learning repo.
# Safe to re-run: existing branches are left unchanged.

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository."
  exit 1
fi

current_branch="$(git branch --show-current)"

if ! git show-ref --verify --quiet refs/heads/main; then
  echo "Creating main branch..."
  git checkout -b main
fi

for branch in dev-a dev-b; do
  if git show-ref --verify --quiet "refs/heads/${branch}"; then
    echo "Branch ${branch} already exists; skipping."
  else
    echo "Creating branch ${branch} from main..."
    git branch "${branch}" main
  fi
done

git checkout "${current_branch}"

echo "Done. Current branch restored to ${current_branch}."
echo "Available branches:"
git branch --list
