import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate } from './astro/server_r2uXbYCR.mjs';
import 'piccolore';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between py-4"> <!-- Logo --> <a href="/" class="flex items-center gap-3 group"> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center group-hover:shadow-lg transition-all"> <svg class="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div> <div class="text-xl font-bold text-gray-900">Habilitelec Formations</div> <div class="text-xs text-gray-500">Certifié Qualiopi</div> </div> </a> <!-- Navigation desktop --> <nav class="hidden lg:flex items-center gap-1"> <a href="/" class="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all">
Accueil
</a> <a href="/qui-sommes-nous" class="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all">
Qui sommes-nous
</a> <a href="/formations" class="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all">
Formations
</a> <a href="/autres-formations" class="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all">
Notre réseau de formateurs
</a> <a href="/contact" class="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-all">
Contact
</a> <a href="/contact" class="btn-primary ml-2">
Demander un devis
</a> </nav> <!-- Bouton menu mobile --> <button class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition" id="mobile-menu-button"> <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Menu mobile --> <div class="lg:hidden hidden border-t border-gray-200 bg-white" id="mobile-menu"> <nav class="container mx-auto px-4 py-4 flex flex-col gap-2"> <a href="/" class="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
Accueil
</a> <a href="/qui-sommes-nous" class="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
Qui sommes-nous
</a> <a href="/formations" class="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
Formations
</a> <a href="/contact" class="px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
Contact
</a> <a href="/contact" class="btn-primary mt-2">
Demander un devis
</a> </nav> </div> </header> ${renderScript($$result, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <div class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left"> <!-- Colonne 1 : À propos --> <div> <h3 class="text-xl font-bold mb-4">Habilitelec Formations</h3> <p class="text-gray-400 mb-4">
Formateur indépendant spécialisé en habilitations électriques. 
          Interventions en Auvergne-Rhône-Alpes et Occitanie.
</p> <p class="text-gray-400">
Certifié et expérimenté pour des formations de qualité.
</p> </div> <!-- Colonne 2 : Liens rapides --> <div> <h3 class="text-xl font-bold mb-4">Liens rapides</h3> <ul class="space-y-2"> <li> <a href="/" class="text-gray-400 hover:text-white transition inline-block">
Accueil
</a> </li> <li> <a href="/formations" class="text-gray-400 hover:text-white transition inline-block">
Nos formations
</a> </li> <li> <a href="/autres-formations" class="text-gray-400 hover:text-white transition inline-block">
Autres formations
</a> </li> <li> <a href="/contact" class="text-gray-400 hover:text-white transition inline-block">
Contact
</a> </li> <li> <a href="/mentions-legales" class="text-gray-400 hover:text-white transition inline-block">
Mentions légales
</a> </li> </ul> </div> <!-- Colonne 3 : Contact --> <div> <h3 class="text-xl font-bold mb-4">Contact</h3> <ul class="space-y-3 text-gray-400 md:text-left"> <li class="flex justify-center md:justify-start items-center gap-2"> <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:0635252465" class="hover:text-white transition">
06 35 25 24 65
</a> </li> <li class="flex justify-center md:justify-start items-center gap-2"> <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:habilitelec@gmail.com" class="hover:text-white transition">
habilitelec@gmail.com
</a> </li> <li class="flex justify-center md:justify-start items-start gap-2"> <svg class="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="text-center md:text-left">
Auvergne-Rhône-Alpes<br>
Occitanie
</span> </li> </ul> </div> </div> <!-- Séparateur et copyright --> <div class="border-t border-gray-800 mt-8 pt-8"> <!-- Copyright centré --> <p class="text-center text-gray-400 mb-4">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Habilitelec Formations. Tous droits réservés.
</p> <!-- Partenariat centré (ajouté) --> <p class="text-center text-gray-500 text-sm font-medium">
PARTENARIAT
</p> </div> </div> </footer>`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a };
