import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_r2uXbYCR.mjs';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/","cacheDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/node_modules/.astro/","outDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/dist/","srcDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/","publicDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/public/","buildClientDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/dist/","buildServerDir":"file:///C:/Users/j-opi/OneDrive/Documents/OneDrive%20Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"autres-formations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/autres-formations","isIndex":false,"type":"page","pattern":"^\\/autres-formations\\/?$","segments":[[{"content":"autres-formations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/autres-formations.astro","pathname":"/autres-formations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"formations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/formations","isIndex":false,"type":"page","pattern":"^\\/formations\\/?$","segments":[[{"content":"formations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formations.astro","pathname":"/formations","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"mentions-legales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"qui-sommes-nous/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/qui-sommes-nous","isIndex":false,"type":"page","pattern":"^\\/qui-sommes-nous\\/?$","segments":[[{"content":"qui-sommes-nous","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/qui-sommes-nous.astro","pathname":"/qui-sommes-nous","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"quiz/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/quiz","isIndex":false,"type":"page","pattern":"^\\/quiz\\/?$","segments":[[{"content":"quiz","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quiz.astro","pathname":"/quiz","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/autres-formations.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/formations.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/qui-sommes-nous.astro",{"propagation":"none","containsHead":true}],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/quiz.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/autres-formations@_@astro":"pages/autres-formations.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/formations/[slug]@_@astro":"pages/formations/_slug_.astro.mjs","\u0000@astro-page:src/pages/formations@_@astro":"pages/formations.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/qui-sommes-nous@_@astro":"pages/qui-sommes-nous.astro.mjs","\u0000@astro-page:src/pages/quiz@_@astro":"pages/quiz.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ctf2NMif.mjs","C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CKItkfM0.js","C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.H8pfHv26.js","C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.d6V8J2CV.js","C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/QuizHabilitation.astro?astro&type=script&index=0&lang.ts":"_astro/QuizHabilitation.astro_astro_type_script_index_0_lang.B_5FaHNH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"section-suivante\");if(!e){console.warn(\"Élément #section-suivante non trouvé\");return}setTimeout(()=>{e.classList.add(\"animate-invite\"),setTimeout(()=>{e.classList.remove(\"animate-invite\")},9e3)},3e3)});"],["C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-button\"),t=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>{t?.classList.toggle(\"hidden\")});"]],"assets":["/_astro/autres-formations.DwQNW6Fw.css","/_astro/autres-formations.BiCTByON.css","/_astro/index.B2C88ihf.css","/_astro/quiz.e_bVd778.css","/aipr.png","/caces.png","/Camille.JPG","/Camille.png","/echafaudages.png","/favicon.svg","/image (1).png","/image.png","/qualiopi.png","/qualiopi_bdp.png","/qualiopi_bdp_sans_fond.png","/SST.png","/_astro/Layout.astro_astro_type_script_index_0_lang.H8pfHv26.js","/_astro/QuizHabilitation.astro_astro_type_script_index_0_lang.B_5FaHNH.js","/autres-formations/index.html","/contact/index.html","/formations/index.html","/mentions-legales/index.html","/qui-sommes-nous/index.html","/quiz/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"VWIEyUJ6qbc7YrVnn7T2U6DNCGS4wKfWIKim+0eZ0hY=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
