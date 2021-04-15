module.exports = {
  extends: [
    "../rules/common",
    "../rules/promise",
    "../rules/babel",
    "../rules/import",
    "../rules/prettier",
  ].map(
    require.resolve,
  ),
};
