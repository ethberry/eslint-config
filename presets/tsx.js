module.exports = {
  extends: [
    "./ts",
    "../rules/import-ts",
    "../rules/react",
    "../rules/prettier",
    "../rules/prettier-react",
    "../rules/prettier-ts",
    "../rules/override",
  ].map(require.resolve),
  rules: {
    "react/prop-types": "off",
  },
};
