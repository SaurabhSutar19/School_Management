
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/School_Management/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/School_Management"
  }
],
  assets: {
    'index.csr.html': {size: 531, hash: 'da17117ccde6d27052672ea430fe4d2b36e6e83514e880e93b67028634b83881', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: 'fa3a5326bbc90aaf22b5469c4902f4fcf76395eacac6ce175dae4acad0313c23', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3119, hash: 'd39ca72d00757dc621378a6a1038ef4450ecf5a524ee9df77de6530ca101e305', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
