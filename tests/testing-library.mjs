import testingLibraryPlugin from "eslint-plugin-testing-library";

export default [
  {
    files: ["**/*.spec.tsx", "**/*.spec.jsx"],
    ...testingLibraryPlugin.configs["flat/dom"],
    ...testingLibraryPlugin.configs['flat/react'],
    rules: {
      ...testingLibraryPlugin.configs["flat/dom"].rules,
      ...testingLibraryPlugin.configs['flat/react'].rules,
      "testing-library/await-async-queries": "error",
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-debugging-utils": "warn",
      "testing-library/no-dom-import": "off",
    },
  },
];
