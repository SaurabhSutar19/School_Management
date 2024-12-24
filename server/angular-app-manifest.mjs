
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://SaurabhSutar19.github.io/School_Management/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://SaurabhSutar19.github.io/School_Management"
  }
],
  assets: {
    'index.csr.html': {size: 563, hash: '0c87e886f16bbfa3fb4cffe1a08ccd820f646a03137f817b177e2a173d7044c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'cfbf567b1f0112b63bac1130fd6713f7d7581a99007df55e6156c4021bb625ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3151, hash: '1d0d54316344bec37115298adbbe8b6123ecbfeeee3969511122868d068cc584', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
