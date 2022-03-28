/* eslint-env node */
/* eslint func-names: 0 */
/* eslint global-require: 0 */

const { configure } = require('quasar/wrappers');

module.exports = configure(() => ({
  eslint: {
    warnings: true,
    errors: true,
  },
  css: [
    'app.css',
  ],
  extras: [
    'roboto-font',
    'material-icons',
  ],
  build: {
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
      node: 'node16',
    },
    vueRouterMode: 'hash',
    vitePlugins: [
      ['unocss/vite', {}],
      ['unplugin-auto-import/vite', {
        imports: [
          'vue',
          'vue-router',
        ],
        dts: 'src/auto-imports.d.ts',
      }]
    ],
  },
  ssr: {
    pwa: false,
    prodPort: 3000,
    middlewares: [
      'render',
    ],
  },
  pwa: {
    workboxMode: 'generateSW',
    injectPwaMetaTags: true,
    swFilename: 'sw.js',
    manifestFilename: 'manifest.json',
    useCredentialsForManifestTag: false,
  },
  capacitor: {
    hideSplashscreen: true,
  },
  electron: {
    inspectPort: 5858,
    bundler: 'packager',
    builder: {
      appId: 'template-quasar',
    },
  },
  bex: {
    contentScripts: [
      'my-content-script',
    ],
  },
}));
