module.exports = {
  extends: ["plugin:import/typescript"],
  rules: {
    "import/default": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.{ts,tsx,js,jsx}",
          "**/*.test.{ts,tsx,js,jsx}",
          "**/*.spec.{ts,tsx,js,jsx}",
          "**/*.stories.{ts,tsx,js,jsx}",
          "**/webpack.config.{js,ts}",
          "**/webpack.development.{js,ts}",
          "**/webpack.production.{js,ts}",
          "**/enzyme.config.{ts,js}",
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      ts: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
