# Contributing to Konpal

Thanks for contributing! Follow the steps below in order before to start contributing.

## 1. Fork & Clone

**Prerequisites:** Node.js `20+`, `pnpm`, and an SSH key configured on GitHub.

1. **Fork** the repository into your GitHub account.
2. **Clone** your fork via SSH and add `upstream`:

```bash
git clone git@github.com:<your-username>/konpal.git
cd konpal
git remote add upstream git@github.com:8sami/konpal.git
```

## 2. Local Setup

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

## 3. Claim or Create an Issue First

Do not submit pull requests without an assigned issue—**unassigned PRs will be closed without review**.

- **Existing issue:** Comment on the issue and wait to be assigned before opening a PR.
- **New bug or feature:** Open a new issue first with a clear description of what is being fixed, added, or removed, and wait for assignment before opening a PR.

## 4. Branch Naming Convention

Sync `main` with `upstream` and create a branch using `issue/<short-description-of-issue>` (lowercase letters, numbers, and hyphens only):

```bash
git checkout main
git pull upstream main
git checkout -b issue/fix-nav-overflow
```

## 5. Commit & PR Title Format

Follow [Conventional Commits](https://www.conventionalcommits.org/) (`<type>: <description>`) since PRs are squash-merged:

- `feat:` add magnetic button component
- `fix:` flip chevron icon in RTL mode
- `docs:` update local setup steps
- `refactor:` simplify typography scale
- `chore:` update pnpm lockfile

## 6. Open a Pull Request

1. Run checks locally before pushing:
   ```bash
   pnpm lint && pnpm typecheck && pnpm build
   ```
2. Push your branch to your fork (`git push -u origin issue/<short-description-of-issue>`).
3. Open a pull request against `upstream/main`.
4. **Always** link the assigned issue in the PR description (e.g., `Closes #42`) and attach screenshots for UI changes.
