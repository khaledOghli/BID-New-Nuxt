# Get started quickly

> Update Time: 2024-05-18

## preliminary work

::: tip Note
If you have already installed or are proficient, you can skip this step.
:::

::: details Essential Tools

Must install: [Install nodejs](https://nodejs.org/en)

Recommended: [Install vscode](https://code.visualstudio.com/)

Recommended: [Install git](https://git-scm.com/)

Recommended: [Install pnpm](https://pnpm.io/)

:::

:::: details pnpm

::: code-group

```sh [pnpm]
#Install pnpm
npm install -g pnpm@9.0.5
#Check version number
pnpm -v
```

:::
::::

:::: details Create Directory

Create a new directory in your favorite location,
Then pull code from the Devops remote repository

```sh
# Disk can be customized, press Enter to enter
f:
```

::: warning Note
So my directory path is `F:\vitepress`

Let's close cmd for now, we'll introduce a shortcut method later
:::
::::

## Installation

### Install Dependencies

::: code-group

```sh [pnpm]
pnpm i
```

::: warning Note
Be sure to install the dependencies in the root directory of the project

:::

::: details Received a warning about missing peer dependencies
If you use PNPM, you will notice that `@docsearch/js` is missing a peer warning. This does not prevent VitePress from working. If you want to suppress this warning, add the following to your `package.json`

Note: The latest version will not prompt!

```
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

::: tip Note
VitePress is a package that only supports ESM. Do not use `require()` to import it, and make sure your latest `package.json` file contains `"type": "module"`, or change the extension of the relevant file, such as `vitepress/config.js` to `.mjs` / `.mts`. For more details, please refer to [Vite's troubleshooting guide](https://cn.vitejs.dev/guide/troubleshooting#this-package-is-esm-only). In addition, in an asynchronous CJS context, you can use `await import('vitepress')` instead.
:::

### Initialization Wizard

::: code-group

```sh [pmpm]
pnpm vitepress init
```

```sh [yarn]
yarn vitepress init
```

```sh [npm]
npx vitepress init
```

```sh [bun]
bunx vitepress init
```

:::

::: details The file location is in `./docs`
The folder name refers to the following, you can also change it yourself

If you press Enter directly, it is placed in the root directory `./`, then your [script command](#script-command) also needs to be modified
:::

```sh{4}
T   Welcome to VitePress!
|
o  Where should VitePress initialize the config?
|  ./docs
|
o  Site title:
|  My Awesome Project
|
o  Site description:
|  A VitePress Site
|
o  Theme:
|  Default Theme
|
o  Use TypeScript for config and theme files?
|  Yes
|
o  Add VitePress npm scripts to package.json?
|  Yes
|
—  Done! Now run npm run docs:dev and start writing.
```

::: tip Vue as a peer dependency
If you plan to customize with Vue components or APIs, you should also explicitly [install vue](./components.md#installation) as a peer dependency

We don't need it for now, we'll talk about it in detail later
:::

### Script Commands

::: warning Note
If you chose `./` instead of `./doc` during initialization, you need to modify it here

Otherwise, no need to change
:::

```json
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
```

### git Ignore Items

Add `.gitignore` file, mainly used for uploading to gitee/github, ignore these files and do not upload

```sh
echo node_modules >> .gitignore

echo cache >> .gitignore

echo dist >> .gitignore
```

## Start

Start the local development environment to develop your website

::: tip How to Exit
ctrl+c to exit development mode
:::

::: code-group

```sh [pmpm]
pnpm run docs:dev
```

```sh [yarn]
yarn docs:dev
```

```sh [npm]
npm run docs:dev
```

```sh [bun]
bun run docs:dev
```

:::

A local `5173` port link has been generated, you can preview the website

At this point, VitePress has set up a basic website

`http://localhost:5173/`

::: tip Note
Next, we can close cmd, we'll use vscode for the whole process
:::

:::: details Extension: Modify Startup Port

You need to modify the port in the [script command](#script-command)

::: warning Note
If not necessary, no need to modify
:::

This is how to start with `8080` port

```json{2}
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080" // [!code focus]
  }
```

::::

:::: details Extension: Other Startup Commands

You can also directly call the command

::: code-group

```sh [pmpm]
pnpm exec vitepress dev docs
```

```sh [npm]
npx vitepress dev docs
```

```sh [bun]
bunx vitepress dev docs
```

:::
::::
