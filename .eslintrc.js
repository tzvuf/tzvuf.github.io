module.exports = {
  "root": true,
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint"
  },
  "globals": {
    "axios": true
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "worker": true,
    "mocha": true,
    "phantomjs": true,
    "serviceworker": true
  },
  "plugins": [
    "vue",
    "html"
  ],
  extends: [
    // 'eslint:recommended',
    'plugin:vue/recommended'
  ],
  "rules": {
    "vue/max-attributes-per-line": 0,
    "vue/attributes-order": 0,
    "vue/html-self-closing": 0,
    "vue/attributes-order": 0,
    "no-debugger": 0,
    "indent": ["warn", 2],
    "no-console": ["off"],
    "quotes": ["warn", "single"],
    "semi": ["error", "always"]
  }
};