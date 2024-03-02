module.exports = {
  plugins: ["testing-library"],
  rules: {
    "testing-library/await-async-queries": "error",
    "testing-library/no-await-sync-queries": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
  },
  overrides: [
    {
      // prettier-ignore
      files: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|tests).[jt]s?(x)",
      ],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
