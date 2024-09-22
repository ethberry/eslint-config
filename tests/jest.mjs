import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.spec.ts", "**/*.spec.js"],
    ...jestPlugin.configs["flat/recommended"],
    rules: {
      ...jestPlugin.configs["flat/recommended"].rules,
      "jest/no-focused-tests": "error",
      "jest/valid-expect": "error",
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
