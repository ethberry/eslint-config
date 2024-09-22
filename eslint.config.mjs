import typescriptRules from "./presets/tsx.mjs";

export default [
  {
    ignores: ["eslint.config.mjs"],
    languageOptions: {
      parserOptions: {
        project: [
          "./tsconfig.eslint.json",
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  ...typescriptRules,
];
