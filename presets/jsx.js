module.exports = {
  extends: ["./js", "../rules/react", "../rules/prettier-react"].map(require.resolve),
};
