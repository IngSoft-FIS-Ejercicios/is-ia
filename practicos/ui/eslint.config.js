import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "coverage/**", "node_modules/**"],
  },
  {
    files: ["src/**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Finding: "readonly",
        renderFindings: "readonly",
        renderFindingCount: "readonly",
        renderFindingDetail: "readonly",
      },
    },
  },
  tseslint.configs.recommended,
  {
    rules: {
      complexity: ["warn", { max: 10 }],
      "max-depth": ["warn", 3],
      "max-lines-per-function": [
        "warn",
        { max: 50, skipBlankLines: true, skipComments: true },
      ],
      "max-params": ["error", 3],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-param-reassign": "error",
      "no-shadow": "error",
      "prefer-template": "error",
      "no-alert": "error",
    },
  },
]);
