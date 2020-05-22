module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "no-unused-vars": "off",
    "camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        args: "after-used",
        vars: "all",
      },
    ],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        prefixWithI: "always",
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDeclarations: true,
      },
    ],
  },
};
