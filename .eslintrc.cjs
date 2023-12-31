// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      env: {
        "jest/globals": true,
      },
      files: ["*.{spec,test}.{js,cjs}"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["jest", "prettier"],
  rules: {
    "import/extensions": ["error", "ignorePackages"],
    "import/no-commonjs": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "prettier/prettier": "error",
  },
};
