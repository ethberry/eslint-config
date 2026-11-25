import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    // both suffixes are in use: a package decides between *.spec.* and *.test.*
    files: ["**/*.{spec,test}.{ts,tsx,js,jsx}"],
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
