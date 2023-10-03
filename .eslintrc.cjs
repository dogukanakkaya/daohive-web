module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["error", 2],
    "quotes": ["error", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-multiple-empty-lines": [
      "error",
      { "max": 1, "maxEOF": 0, "maxBOF": 0 }
    ],
    "padded-blocks": ["error", "never"],
    "require-await": "error",
    "object-curly-spacing": ["error", "always"],
    "@typescript-eslint/no-explicit-any": "warn",
  },
}
