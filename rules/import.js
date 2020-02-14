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
        count: 2,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.js",
          "**/test/**/*.jsx",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/enzyme.config.js",
          "**/webpack.config.js"
        ],
      },
    ],
    "import/namespace": [2, {allowComputed: true}],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
