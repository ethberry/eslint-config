module.exports = {
  plugins: ["@20minutes/graphql"],
  rules: {
    "@20minutes/graphql/template-strings": [
      "error",
      {
        env: "apollo",
      },
    ],
  },
};
