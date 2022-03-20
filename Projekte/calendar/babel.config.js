/* 
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
 */

// Verwendung eines Alternativen Babel Presets von Babel selber mit Einstellungen,
// die besser zum Projekt passen (Unterstützung bestimmter JS-Features)
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: "core-js@3",
      },
    ],
  ],
};