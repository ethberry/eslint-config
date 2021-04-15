module.exports = {
  extends: [
    "../rules/common",
    "../rules/promise",
    "../rules/typescript",
    "../rules/import",
    "../rules/import-ts",
    "../rules/prettier",
  ].map(require.resolve),
  rules: {
    "no-useless-constructor": "off",
  },
};
