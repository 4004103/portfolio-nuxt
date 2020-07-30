module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "always",
      "exports": "always",
    }],
    "semi": ["error", "always"],
    "comma-spacing": ["off", { "before": false, "after": true }],
    "array-bracket-spacing": ["off", "never"],
    "vue/no-v-html": "off",
    "camelcase": "off",
    "no-console": "off"
  },
  globals: {
    cy: 'readonly'
  }
}
