import globals from "globals";
import mochaPlugin from "eslint-plugin-mocha";

export default [
  {
    files: ["**/*.spec.ts", "**/*.spec.js"],
    ...mochaPlugin.configs.flat.recommended,
    rules: {
      ...mochaPlugin.configs.flat.recommended.rules,
      "mocha/no-exports": "off",
      "mocha/no-hooks-for-single-case": "off",
      "mocha/no-skipped-tests": "off",
      "mocha/no-setup-in-describe": "off",
      "mocha/no-exclusive-tests": "error",
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
