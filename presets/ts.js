module.exports = {
  extends: [
    "../rules/common",
    "../rules/typescript",
    "../rules/import",
    "../rules/import-ts",
    "../rules/prettier",
    "../rules/prettier-ts",
  ].map(require.resolve),
  rules: {
    "no-useless-constructor": "off",
  },
};
