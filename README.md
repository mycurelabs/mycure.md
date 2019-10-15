[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmycurelabs%2Fweb-main%2Fbadge%3Fref%3Dmaster%26token%3D002637dbbbff3a6cc042c93e2c663b5571d2b243&style=for-the-badge)](https://actions-badge.atrox.dev/mycurelabs/web-main/goto?ref=master&token=002637dbbbff3a6cc042c93e2c663b5571d2b243)

### Install dependencies

```bash
yarn
```

### Run development

The `.env.development` file is required to start the development. Refer to `.env.example`.

Run

```bash
yarn serve
```

### Build production

The `.env.production` file is required to start the development. Refer to `.env.example`.

Run

```bash
yarn build
```

### Deploy

Run

```bash
yarn deploy
```

### Create branch

```bash
git branch <branch name>
```

Branch name must have a prefix like one of the following `refactor/`, `fix/`, or `feat/`.

`refactor/` - used if the changes to be made falls under the category of "refactoring", changing of texts, changing images, etc.

*Example:* `refactor/update-texts`, `refactor/update-images`, etc.

`fix/` - used if the changes to be made are "fixes". Use this if fixing some bugs.

*Example:* `fix/missing-image`, `fix/qa-july-2019`, etc.

`feat/` - for new features.

*Example:* `feat/new-page`, `feat/new-panel-home`.

**Usage**

```bash
git branch `refactor/update-home`
```

### Checkout to the new branch

To check if the new branch has been created successfully, use the command: 

```bash
git branch
```

This will list all the available branches.

- master
- refactor/update-home

To checkout to the new branch you created use the command:

```bash
git checkout <branch name>
```

**Usage**

```bash
git checkout refactore/update-home
```

Start working on your new branch!

### Commit message standards

The team agreed to follow a standard for committing changes.

Commit messages should have the prefix `type(scope): <commit message>` where type is one of `refactor`, `fix`, `feat`, etc. And scope is the scope of the changes. E.g., `refactor(home): <commit message>`.

*Examples:* 

- `refactor(home): update first panel title`
- `fix(about-use): fix missing image`
- `feat(home): add new panel`

### Push to your branch

When you're ready to push the changes, do:

```bash
git push origin <branch>
```

Where branch is your branch name.

*Example:* `git push origin refactor/update-home`


### Deploy
Every changes merged to `master` will be deployed to Firebase.
