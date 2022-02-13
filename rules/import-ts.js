module.exports = {
  extends: ["plugin:import/typescript"],
  rules: {
    "import/default": "off",
    "import/named": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/tests/**/*.{ts,tsx,js,jsx}",
          "**/*.tests.{ts,tsx,js,jsx}",
          "**/*.spec.{ts,tsx,js,jsx}",
          "**/*.stories.{ts,tsx,js,jsx}",
          "**/webpack.config.{js,ts}",
          "**/webpack.development.{js,ts}",
          "**/webpack.production.{js,ts}",
          "**/enzyme.config.{ts,js}",
          "**/hardhat.config.{js,ts}",
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    },
  },
};
