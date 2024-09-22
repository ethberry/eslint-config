import nodePlugin from "eslint-plugin-n";

export default [
  nodePlugin.configs["flat/recommended-module"],
  {
    rules: {
      "n/exports-style": ["error", "exports"],
      // https://github.com/eslint-community/eslint-plugin-n/issues/314
      "n/no-missing-import": "off",
    },
  },
];
