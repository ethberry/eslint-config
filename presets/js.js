module.exports = {
  extends: ["../rules/common", "../rules/babel", "../rules/import", "../rules/prettier"].map(
    require.resolve,
  ),
};
