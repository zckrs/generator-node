'use strict';
var generators = require('yeoman-generator');
var extend = require('deep-extend');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('es2015', {
      required: false,
      defaults: false,
      desc: 'Allow ES2015 syntax'
    });
  },

  writing: function () {
    var eslintrc = {
      extends: 'eslint:recommended',
      rules: {
        indent: [2, 2],
        strict: [2, 'global'],
        quotes: [2, 'single'],
        'consistent-return': 0,
        'one-var': [2, 'never'],
        'no-use-before-define': [2, 'nofunc'],
        'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
        'space-after-keywords': [2, 'always'],
        'array-bracket-spacing': [2, 'never'],
        'space-in-parens': [2, 'never'],
        'quote-props': [2, 'as-needed'],
        'no-multiple-empty-lines': [2, {max: 2}],
        'brace-style': [2, '1tbs'],
        // Rules relative to Yeoman JSCS configuration
        curly: [2, 'all'],
        'key-spacing': [2, { beforeColon: false, afterColon: true }],
        'space-infix-ops': 2,
        'no-eval': 2,
        'no-with': 2,
        'eol-last': 2,
        // Best Practices
        'dot-notation': [2, { allowKeywords: true }],
        eqeqeq: 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-empty-label': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-label-var': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-sequences': 2,
        'no-unused-expressions': 2,
        yoda: 2,
        // Variables
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        // Stylistic Issues
        camelcase: 2,
        'comma-spacing': 2,
        'new-cap': 2,
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-extra-parens': 2,
        'semi-spacing': [2, {before: false, after: true}],
        semi: 2,
        'space-return-throw-case': 2
      },
      env: {
        node: true,
        mocha: true
      }
    };

    if (this.options.es2015) {
      extend(eslintrc, {
        ecmaFeatures: {
          modules: true
        },
        env: {
          es6: true
        }
      });
    }

    this.fs.writeJSON(this.destinationPath('.eslintrc'), eslintrc);
  }
});
