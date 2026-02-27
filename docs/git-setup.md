# Git Setup Commands

Use this to initialize a clean collaboration flow with `main`, `dev-a`, and `dev-b`.

## 1) One-time local setup

```bash
git status
./scripts/setup-git-branches.sh
```

## 2) Verify branches

```bash
git branch
```

Expected branches:
- `main`
- `dev-a`
- `dev-b`

## 3) Optional: connect a remote (GitHub example)

Create an empty repo in GitHub first, then:

```bash
git remote add origin <YOUR_GIT_URL>
git push -u origin main
git push -u origin dev-a
git push -u origin dev-b
```

## 4) Daily usage

Developer A:

```bash
git checkout dev-a
git pull --ff-only
```

Developer B:

```bash
git checkout dev-b
git pull --ff-only
```

When syncing stable updates to both dev branches:

```bash
git checkout main
# merge approved changes into main first

git checkout dev-a
git merge main

git checkout dev-b
git merge main
```
