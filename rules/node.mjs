import nodePlugin from "eslint-plugin-n";

export default [
  // base
  {
    files: ["**/*.{mjs,ts,mts}"],
    ...nodePlugin.configs["flat/recommended-module"],
  },
  {
    files: ["**/*.{js,cjs}"],
    ...nodePlugin.configs["flat/recommended-script"],
  },

  // overrides
  {
    files: ["**/*.{mjs,ts,mts}"],
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
