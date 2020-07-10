[![CircleCI](https://circleci.com/gh/apology-packs/cookies-js.svg?style=svg)](https://circleci.com/gh/Apology/cookies-js)
[![Coverage Status](https://coveralls.io/repos/github/apology-packs/cookies-js/badge.svg)](https://coveralls.io/github/apology-packs/cookies-js)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
[![npm version](https://badge.fury.io/js/%apology%2Fcookies.svg)](https://badge.fury.io/js/%40apology%2Fcookies)

# @apology/cookies

Giving easy access to browser cookies.
[Visit on NPM](https://www.npmjs.com/package/@apology/cookies)

setCookie(name, string) - Allows you to pass a name and a string value to store a cookie on the user's browser. It maps the name to the string.

readCookie(name) - returns the value of your of your cookie.

deleteCookie(name) - removes the cookie from the browser history.


### Installation
|Package Manager|Command|
|-|-|
|Yarn| `yarn add @apology/cookies` |
|NPM| `npm install --save @apology/cookies` |


### usage

2) Import these methods in es6 like so:
`import { setCookie, readCookie, deleteCookie } from '@apology/cookies'`
