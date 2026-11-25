import importPlugin from "eslint-plugin-import";

export default [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    // ESM TypeScript imports end in `.js` and packages may have only `exports`: the node resolver cannot follow
    // either. A repository with several tsconfigs sets `typescript.project` in its own config.
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
          ],
          pathGroups: [
            {
              pattern: "@{ethberry,framework}/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
        },
      ],
    },
  },
];
