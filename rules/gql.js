module.exports = {
  overrides: [
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/schema-recommended",
      rules: {
        "prettier/prettier": "error",
      },
      parserOptions: {
        schema: "./schema.gql",
      },
    },
  ],
};
