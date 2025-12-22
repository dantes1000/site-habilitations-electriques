import { c as createComponent, d as createAstro, b as addAttribute, f as renderHead, g as renderSlot, e as renderScript, a as renderTemplate } from './astro/server_r2uXbYCR.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';
/* empty css                                     */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="fr" data-astro-cid-gxcatbgd> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body data-astro-cid-gxcatbgd> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/layouts/Layout.astro", void 0);

export { $$Layout as $ };
