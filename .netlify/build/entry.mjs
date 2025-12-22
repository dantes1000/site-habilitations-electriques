import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Ctf2NMif.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/autres-formations.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/formations/_slug_.astro.mjs');
const _page3 = () => import('./pages/formations.astro.mjs');
const _page4 = () => import('./pages/mentions-legales.astro.mjs');
const _page5 = () => import('./pages/qui-sommes-nous.astro.mjs');
const _page6 = () => import('./pages/quiz.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/autres-formations.astro", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/formations/[slug].astro", _page2],
    ["src/pages/formations.astro", _page3],
    ["src/pages/mentions-legales.astro", _page4],
    ["src/pages/qui-sommes-nous.astro", _page5],
    ["src/pages/quiz.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3b2d78d3-4010-4e9f-afe6-6d42d48b07c9"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
