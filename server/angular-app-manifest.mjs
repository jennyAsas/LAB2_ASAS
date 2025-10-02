
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jennyasas.github.io/LAB2_ASAS/LAB2_ASAS',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/LAB2_ASAS/LAB2_ASAS/form",
    "route": "/LAB2_ASAS/LAB2_ASAS"
  },
  {
    "renderMode": 2,
    "route": "/LAB2_ASAS/LAB2_ASAS/form"
  },
  {
    "renderMode": 2,
    "route": "/LAB2_ASAS/LAB2_ASAS/list"
  },
  {
    "renderMode": 2,
    "route": "/LAB2_ASAS/LAB2_ASAS/summary"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 593, hash: 'f89cc5e53249cd927a6645694c06ba8d3d0ac99c249645289080eae390d5a384', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 995, hash: '5659729c7b47b626336450d5195898b921bfadecf007c6ae46c4b4accedb378b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'summary/index.html': {size: 3256, hash: '9e625786a12ca8fe6db7978a1f0f74743abaace450080c558cdb67b7fd9688bc', text: () => import('./assets-chunks/summary_index_html.mjs').then(m => m.default)},
    'form/index.html': {size: 4027, hash: 'bccb6187b75f6a82b0ff1e914783d622aad478e20d6362da0a7b460eee3d1f2e', text: () => import('./assets-chunks/form_index_html.mjs').then(m => m.default)},
    'list/index.html': {size: 3268, hash: '84b85edc256d26e3561a10ad9580f82ac85ce978ee8c0e023a2dabba85e14808', text: () => import('./assets-chunks/list_index_html.mjs').then(m => m.default)},
    'styles-X2HHKRJU.css': {size: 607, hash: 'H85GU7lm4Zw', text: () => import('./assets-chunks/styles-X2HHKRJU_css.mjs').then(m => m.default)}
  },
};
