/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_r2uXbYCR.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkIP1fqv.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer__AOGtCNb.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Habilitelec Formations", "description": "Contactez Habilitelec Formations pour un devis personnalis\xE9. T\xE9l\xE9phone : 06 35 25 24 65 - Email : habilitelec@gmail.com - R\xE9ponse sous 48h." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="section-navy text-white py-20"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6">
Contactez-nous
</h1> <p class="text-xl text-blue-100 mb-4">
Demandez votre devis personnalisé gratuit
</p> <div class="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-6 py-3 rounded-full"> <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> <span class="text-sm font-semibold text-white">Réponse sous 48h ouvrées</span> </div> </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"> <!-- Formulaire de contact --> <div class="card-pro p-8"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Demande de devis</h2> <form action="#" method="POST" class="space-y-6"> <!-- Nom et Prénom --> <div> <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
Nom et Prénom <span class="text-red-600">*</span> </label> <input type="text" id="name" name="name" required placeholder="Jean Dupont" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> </div> <!-- Email --> <div> <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
Email <span class="text-red-600">*</span> </label> <input type="email" id="email" name="email" required placeholder="jean.dupont@entreprise.fr" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> </div> <!-- Téléphone --> <div> <label for="phone" class="block text-sm font-semibold text-gray-900 mb-2">
Téléphone <span class="text-red-600">*</span> </label> <input type="tel" id="phone" name="phone" required placeholder="06 12 34 56 78" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> </div> <!-- Entreprise --> <div> <label for="company" class="block text-sm font-semibold text-gray-900 mb-2">
Entreprise <span class="text-red-600">*</span> </label> <input type="text" id="company" name="company" required placeholder="Nom de votre entreprise" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> </div> <!-- Formation souhaitée --> <div> <label for="formation" class="block text-sm font-semibold text-gray-900 mb-2">
Formation souhaitée
</label> <select id="formation" name="formation" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> <option value="">Sélectionnez une formation</option> <optgroup label="Personnel Non-Électricien"> <option value="B0-H0V">B0-H0V</option> <option value="B0-H0V CC">B0-H0V CC</option> </optgroup> <optgroup label="Interventions BT"> <option value="BS">BS</option> <option value="BE Manœuvre">BE Manœuvre</option> </optgroup> <optgroup label="Électricien BT"> <option value="B1-B2-BR-BC">B1-B2-BR-BC</option> <option value="B2V">B2V</option> <option value="BC">BC</option> <option value="BR">BR</option> <option value="BP">BP Photovoltaïque</option> </optgroup> <optgroup label="Haute Tension"> <option value="BF-HF">BF-HF</option> <option value="BE-HE">BE-HE</option> <option value="HE Manœuvre">HE Manœuvre</option> </optgroup> <option value="Autre">Autre formation</option> </select> </div> <!-- Nombre de participants --> <div> <label for="participants" class="block text-sm font-semibold text-gray-900 mb-2">
Nombre de participants
</label> <input type="number" id="participants" name="participants" min="1" placeholder="Ex: 8" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"> </div> <!-- Message --> <div> <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
Votre message
</label> <textarea id="message" name="message" rows="5" placeholder="Décrivez votre besoin, vos disponibilités, ou toute autre information utile..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none"></textarea> </div> <!-- Bouton d'envoi --> <button type="submit" class="btn-primary w-full"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Envoyer ma demande
</button> <p class="text-sm text-gray-500 text-center">
En soumettant ce formulaire, vous acceptez d'être contacté par Habilitelec Formations.
</p> </form> </div> <!-- Coordonnées --> <div class="space-y-6"> <!-- Nos coordonnées --> <div class="card-pro p-8"> <h2 class="text-3xl font-bold text-gray-900 mb-6">Nos coordonnées</h2> <!-- Téléphone --> <div class="flex items-start gap-4 mb-6"> <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h3 class="text-lg font-bold text-gray-900 mb-1">Téléphone</h3> <a href="tel:0635252465" class="text-blue-800 font-semibold text-lg hover:underline">
06 35 25 24 65
</a> <p class="text-sm text-gray-600 mt-1">
Réponse rapide du lundi au vendredi
</p> </div> </div> <!-- Email --> <div class="flex items-start gap-4 mb-6"> <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <div> <h3 class="text-lg font-bold text-gray-900 mb-1">Email</h3> <a href="mailto:habilitelec@gmail.com" class="text-blue-800 font-semibold hover:underline">
habilitelec@gmail.com
</a> <p class="text-sm text-gray-600 mt-1">
Réponse sous 24h ouvrées
</p> </div> </div> <!-- Localisation --> <div class="flex items-start gap-4"> <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0"> <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h3 class="text-lg font-bold text-gray-900 mb-1">Zones d'intervention</h3> <p class="text-gray-700 font-semibold">
Auvergne-Rhône-Alpes<br>
Occitanie
</p> <p class="text-sm text-gray-600 mt-1">
Autres régions : nous consulter
</p> </div> </div> </div> <!-- Modalités de formation --> <div class="card-pro p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"> <h3 class="text-2xl font-bold text-gray-900 mb-4">Modalités de formation</h3> <ul class="space-y-3"> <li class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700"><strong>Intra-entreprise</strong> : formations dans vos locaux</span> </li> <li class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700"><strong>Inter-entreprises</strong> : centres partenaires</span> </li> <li class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700"><strong>Prise en charge OPCO</strong> possible</span> </li> <li class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700"><strong>Recyclages</strong> disponibles</span> </li> <li class="flex items-start gap-3"> <svg class="w-5 h-5 text-blue-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-gray-700"><strong>Devis gratuit</strong> sous 48h</span> </li> </ul> </div> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/contact.astro", void 0);

const $$file = "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
