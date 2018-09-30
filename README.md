[![Build Status](https://travis-ci.org/asadhshujau/npm-package-practice.svg?branch=master)](https://travis-ci.org/asadhshujau/npm-package-practice)
[![Coverage Status](https://coveralls.io/repos/github/asadhshujau/npm-package-practice/badge.svg?branch=master)](https://coveralls.io/github/asadhshujau/npm-package-practice?branch=master)
# npm-package-practice
practicing to make an npm package

## Installation
```sh
npm install @asadhshujau/npm-package-practice --save
yarn add @asadhshujau/npm-package-practice
bower install @asadhshujau/npm-package-practice --save
```
## Usage
### Javascript
```javascript
var pluralise = require('mypluralize');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'mypluralize';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('mypluralize');
});
```
## Test
```sh
npm run test
```
