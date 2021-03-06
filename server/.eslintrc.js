"use strict";

module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  env: {
    node: true,
    es6: true
  },
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    strict: "error"
  },
  overrides: [
    {
      files: ["*-test.js"],
      env: {
        mocha: true
      }
    }
],
"parserOptions": {
    "ecmaVersion": 2017
},

"env": {
    "es6": true
},
"parser": "esprima",
"rules": {
    "semi": "error"
}
};