module.exports = {
  extends: ["plugin:import/typescript"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.js",
          "**/test/**/*.ts",
          "**/*.test.js",
          "**/*.test.jsx",
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.spec.ts",
          "**/*.spec.tsx",
          "**/enzyme.config.js",
          "**/enzyme.config.ts",
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      ts: {
        alwaysTryTypes: true,
      },
    },
    "import/ignore": [
      "ormconfig.ts", // this exception is for typeorm config
    ],
  },
};
