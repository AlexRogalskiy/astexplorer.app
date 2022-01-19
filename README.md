# ASTExplorer.app

> <https://astexplorer.net> with ES Modules support and Hot Reloading

[![Build Status](http://img.shields.io/travis/JamieMason/ASTExplorer.app/master.svg?style=flat-square)](https://travis-ci.org/JamieMason/ASTExplorer.app)
[![Maintainability](https://api.codeclimate.com/v1/badges/d1475b03168b4d3598cf/maintainability)](https://codeclimate.com/github/JamieMason/ASTExplorer.app/maintainability)

## Status

I've not had much time to work on this in the last few years, some usability improvements 
are needed and it would be good to have the app automatically update. The tooling for 
bundling and hot reloading are all JavaScript based so that functionality is only available
for languages they support.

Please open issues for anything else you notice.

## Table of Contents

- [📣 Summary](#-summary)
- [📸 Screenshot](#-screenshot)
- [🌩 Installation](#-installation)
- [🕹 Usage](#-usage)
- [🙋🏿‍♂️ Getting Help](#♂️-getting-help)
- [👀 Other Projects](#-other-projects)
- [🤓 Author](#-author)

## 📣 Summary

Everything you love about https://astexplorer.net plus:<br><br>✅ Edit
Transforms in your IDE. <br>✅ Organise them into Modules. <br>✅ Hot Reloading.
<br>✅ Work Offline.

## 📸 Screenshot

<center><img src="./static/screenshot.png?raw=true"></center>

## 🌩 Installation

### Mac

📦
[ASTExplorer-darwin-x64-0.16.11.zip](https://github.com/JamieMason/astexplorer.app/releases/download/0.16.11/ASTExplorer-darwin-x64-0.16.11.zip)

### Build From Source

```
git clone https://github.com/JamieMason/astexplorer.app.git astexplorer-app
cd astexplorer-app
yarn install
yarn start
```

## 🕹 Usage

1. Mouse over the **Transform** Menu at the top of AST Explorer.
1. Select [Babel Plugin], [ESLint Rule], [Codemod] etc.
1. Find and open your Transform Script on your machine.

You can now edit your Transform Script in your IDE, such as [VS Code] and
changes will be reloaded automatically in AST Explorer. Organise your transform
using [JavaScript Modules] and they will be bundled together automatically.

[babel plugin]: https://babeljs.io/docs/en/plugins#plugin-development
[codemod]: https://github.com/facebook/jscodeshift
[eslint rule]: https://eslint.org/docs/developer-guide/working-with-rules
[javascript modules]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[vs code]: https://code.visualstudio.com

## 🙋🏿‍♂️ Getting Help

Get help with issues by creating a [Bug Report] or discuss ideas by opening a
[Feature Request].

[bug report]:
  https://github.com/JamieMason/ASTExplorer.app/issues/new?template=bug_report.md
[feature request]:
  https://github.com/JamieMason/ASTExplorer.app/issues/new?template=feature_request.md

## 👀 Other Projects

If you find my Open Source projects useful, please share them ❤️

- [**eslint-formatter-git-log**](https://github.com/JamieMason/eslint-formatter-git-log)<br>ESLint
  Formatter featuring Git Author, Date, and Hash
- [**eslint-plugin-move-files**](https://github.com/JamieMason/eslint-plugin-move-files)<br>Move
  and rename files while keeping imports up to date
- [**eslint-plugin-prefer-arrow-functions**](https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions)<br>Convert
  functions to arrow functions
- [**ImageOptim-CLI**](https://github.com/JamieMason/ImageOptim-CLI)<br>Automates
  ImageOptim, ImageAlpha, and JPEGmini for Mac to make batch optimisation of
  images part of your automated build process.
- [**Jasmine-Matchers**](https://github.com/JamieMason/Jasmine-Matchers)<br>Write
  Beautiful Specs with Custom Matchers
- [**karma-benchmark**](https://github.com/JamieMason/karma-benchmark)<br>Run
  Benchmark.js over multiple Browsers, with CI compatible output
- [**self-help**](https://github.com/JamieMason/self-help#readme)<br>Interactive
  Q&A Guides for Web and the Command Line
- [**syncpack**](https://github.com/JamieMason/syncpack#readme)<br>Manage
  multiple package.json files, such as in Lerna Monorepos and Yarn Workspaces

## 🤓 Author

<img src="https://www.gravatar.com/avatar/acdf106ce071806278438d8c354adec8?s=100" align="left">

I'm [Jamie Mason] from [Leeds] in England, I began Web Design and Development in
1999 and have been Contracting and offering Consultancy as Fold Left Ltd
since 2012. Who I've worked with includes [Sky Sports], [Sky Bet], [Sky Poker],
The [Premier League], [William Hill], [Shell], [Betfair], and Football Clubs
including [Leeds United], [Spurs], [West Ham], [Arsenal], and more.

<div align="center">

[![Follow JamieMason on GitHub][github badge]][github]      [![Follow fold_left on Twitter][twitter badge]][twitter]

</div>

<!-- images -->

[github badge]:
  https://img.shields.io/github/followers/JamieMason.svg?style=social&label=Follow
[twitter badge]:
  https://img.shields.io/twitter/follow/fold_left.svg?style=social&label=Follow

<!-- links -->

[arsenal]: https://www.arsenal.com
[betfair]: https://www.betfair.com
[github]: https://github.com/JamieMason
[jamie mason]: https://www.linkedin.com/in/jamiemasonleeds
[leeds united]: https://www.leedsunited.com/
[leeds]: https://www.instagram.com/visitleeds
[premier league]: https://www.premierleague.com
[shell]: https://www.shell.com
[sky bet]: https://www.skybet.com
[sky poker]: https://www.skypoker.com
[sky sports]: https://www.skysports.com
[spurs]: https://www.tottenhamhotspur.com
[twitter]: https://twitter.com/fold_left
[west ham]: https://www.whufc.com
[william hill]: https://www.williamhill.com
