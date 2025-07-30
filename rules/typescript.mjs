import tsEslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default [
  // base
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ...tsEslint.configs.disableTypeChecked,
  },

  // overrides
  {
    files: ["**/*.{ts,tsx,mtsx}"],
    rules: {
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_|NodeJS|ProcessEnv",
          argsIgnorePattern: "^_",
          args: "after-used",
          vars: "all",
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["I"],
          filter: {
            match: false,
            regex: "^(ProcessEnv|Window)$",
          },
        },
      ],
    },
  },

  // stylistic
  {
    plugins: {
      "@stylistic": stylistic,
    },
  },
]
