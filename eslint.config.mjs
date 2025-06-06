import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import spellcheck from "eslint-plugin-spellcheck";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      spellcheck,
    },
    rules: {
      'spellcheck/spell-checker': [
        'warn',
        {
          comments: true,
          strings: true,
          identifiers: false,
          skipWords: ['eslint', 'config', 'js', 'html'],
        },
      ],
    },
    ...js.configs.recommended,
  },
]);
