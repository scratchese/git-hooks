<h1 align="center">
⚓ git-hooks
</h1>
<p align="center">
Minimalism's pre-commit, pre-push hooks.
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/git-hooks/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
   <a href="https://circleci.com/gh/amazingandyyy/git-hooks">
      <img src="https://circleci.com/gh/amazingandyyy/git-hooks.svg?style=svg" />
   </a>
      <a href="https://www.npmjs.com/package/@amazingandyyy/git-hooks">
      <img src="https://badge.fury.io/js/%40amazingandyyy%2Fgit-hooks.svg" />
   </a>
</p>

> pre-commit, pre-push hooks made easy.

> ZERO dependencies

## Installation

```shell
$ npm i --save-dev @amazingandyyy/git-hooks
# or
$ yarn add --dev @amazingandyyy/git-hooks
```

## Config

package.json

```json
{
   "scripts": {
      "test": "jest",
      "precommit": "npm run test",
      "prepush": "npm run test"
   }
}
```

## Uninstallation

```shell
$ npm uninstall @amazingandyyy/git-hooks
# or
$ yarn remove @amazingandyyy/git-hooks
```

## License

MIT
