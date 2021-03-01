module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  extends: ["plugin:import/errors", "plugin:import/warnings"],
  plugins: ["import"],
  rules: {
    "import/newline-after-import": [
      "error",
      {
        count: 1, // 2 does not play nice with prettier
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.{js,jsx}",
          "**/*.test.{js,jsx}",
          "**/*.spec.{js,jsx}",
          "**/webpack.config.js",
          "**/webpack.development.js",
          "**/webpack.production.js",
          "**/enzyme.config.js",
        ],
      },
    ],
    "import/namespace": [
      "error",
      {
        allowComputed: true,
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
