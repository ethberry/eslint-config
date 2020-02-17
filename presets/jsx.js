module.exports = {
  extends: ["./js", "../rules/react", "../rules/prettier","../rules/prettier-react", "../rules/override"].map(require.resolve),
};
