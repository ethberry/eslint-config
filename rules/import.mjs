import importPlugin from "eslint-plugin-import";

export default [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      'import/order': [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "object",
          ],
          "pathGroups": [
            {
              "pattern": "@{ethberry,framework}/**",
              "group": "external",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          'newlines-between': 'always',
        },
      ],
    }
  }
]
