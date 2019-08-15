<h1 align="center">
🏃 git-hooks
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
   "git-hooks": {
      "precommit": "npm run test",
      "prepush": "npm run test"
   }
}
```

## License

MIT
