import nodePlugin from "eslint-plugin-n";

export default [
  // base
  {
    files: ["**/*.{js,mjs,ts,mts}"],
    ...nodePlugin.configs["flat/recommended-module"],
  },

  // overrides
  {
    files: ["**/*.{js,mjs,ts,mts}"],
    rules: {
      "n/exports-style": ["error", "exports"],
    },
  },
  {
    rules: {
      // https://github.com/eslint-community/eslint-plugin-n/issues/314
      "n/no-missing-import": "off",
    },
  },
];
