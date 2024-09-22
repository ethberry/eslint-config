import pluginPromise from "eslint-plugin-promise";

export default [
  pluginPromise.configs["flat/recommended"],
  {
    rules: {
      "promise/always-return": "off",
    },
  },
];
