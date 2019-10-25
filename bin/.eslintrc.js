module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "document": false,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "rules": {
      "indent": [
          "error",
          2,
      ],
      "semi": [
          "error",
          "always",
      ],
      "no-trailing-spaces": 0,
      "keyword-spacing": 0,
      "no-unused-vars": 1,
      "no-multiple-empty-lines": 0,
      "space-before-function-paren": 0,
      "eol-last": 0,
    }
};
