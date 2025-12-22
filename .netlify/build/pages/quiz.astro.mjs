/* empty css                                             */
import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_r2uXbYCR.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkIP1fqv.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer__AOGtCNb.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$QuizHabilitation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50" data-astro-cid-qaoj7bmj> <div class="container mx-auto px-4" data-astro-cid-qaoj7bmj> <div id="quiz-container" class="quiz-container" data-astro-cid-qaoj7bmj> <div class="quiz-header" data-astro-cid-qaoj7bmj> <div class="quiz-progress" data-astro-cid-qaoj7bmj> <div class="progress-bar" data-astro-cid-qaoj7bmj> <div class="progress-fill" data-astro-cid-qaoj7bmj></div> </div> <div class="progress-steps" data-astro-cid-qaoj7bmj> <span class="step active" data-astro-cid-qaoj7bmj>1</span> <span class="step" data-astro-cid-qaoj7bmj>2</span> <span class="step" data-astro-cid-qaoj7bmj>3</span> </div> </div> <h2 class="text-3xl md:text-4xl font-bold text-white mb-2" data-astro-cid-qaoj7bmj>
⚡ Quelle habilitation électrique vous faut-il ?
</h2> <p class="text-white/90" data-astro-cid-qaoj7bmj>Répondez à 3 questions pour obtenir une recommandation personnalisée</p> </div> <div id="quiz-content" class="quiz-content" data-astro-cid-qaoj7bmj> <form id="quiz-form" data-astro-cid-qaoj7bmj> <!-- Questions injectées par JavaScript --> </form> <div class="quiz-navigation" data-astro-cid-qaoj7bmj> <button type="button" id="prev-btn" class="quiz-btn quiz-btn-secondary" disabled data-astro-cid-qaoj7bmj>
← Précédent
</button> <button type="button" id="next-btn" class="quiz-btn quiz-btn-primary" disabled data-astro-cid-qaoj7bmj>
Suivant →
</button> </div> </div> <div id="quiz-result" class="quiz-result hidden" data-astro-cid-qaoj7bmj> <div class="result-card" data-astro-cid-qaoj7bmj> <div class="result-icon" data-astro-cid-qaoj7bmj>🎯</div> <h3 class="result-title" data-astro-cid-qaoj7bmj>Formation recommandée</h3> <div class="result-code" id="result-code" data-astro-cid-qaoj7bmj>B1-B2-BR-BC</div> <p class="result-desc" id="result-desc" data-astro-cid-qaoj7bmj>
Formation complète pour électriciens
</p> <div class="result-actions" data-astro-cid-qaoj7bmj> <a href="/formations" class="result-btn result-btn-secondary" data-astro-cid-qaoj7bmj>
📚 Voir le détail
</a> <a href="/contact" class="result-btn result-btn-primary" data-astro-cid-qaoj7bmj>
📋 Demander un devis
</a> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/QuizHabilitation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/components/QuizHabilitation.astro", void 0);

const $$Quiz = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Quiz - Quelle habilitation \xE9lectrique pour vos \xE9quipes ? | Habilitelec Formations", "description": "Identifiez rapidement les formations d'habilitation \xE9lectrique adapt\xE9es \xE0 votre activit\xE9 et aux missions de vos collaborateurs. R\xE9sultat imm\xE9diat en 2 minutes." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="section-navy text-white py-20"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"> <svg class="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path> </svg> <span class="text-sm font-semibold">Outil d'aide à la décision</span> </div> <h1 class="text-4xl md:text-6xl font-bold mb-6">
Quelle Habilitation Électrique<br>pour Vos Équipes ?
</h1> <div class="max-w-3xl mx-auto"> <p class="text-xl text-blue-100 mb-8 leading-relaxed">
Ce questionnaire vous aide à <strong class="text-white">identifier rapidement les formations adaptées</strong>
à votre activité et aux missions de vos collaborateurs.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4"> <div class="text-3xl font-bold text-white mb-1">2 min</div> <div class="text-sm text-blue-200">Durée estimée</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4"> <div class="text-3xl font-bold text-white mb-1">5 questions</div> <div class="text-sm text-blue-200">Simples et claires</div> </div> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4"> <div class="text-3xl font-bold text-white mb-1">Immédiat</div> <div class="text-sm text-blue-200">Résultat instantané</div> </div> </div> <div class="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-left"> <div class="flex items-start gap-3"> <svg class="w-6 h-6 text-orange-300 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg> <div> <h3 class="font-bold text-white mb-2">⚡ Pourquoi ce quiz est essentiel ?</h3> <p class="text-blue-100 text-sm leading-relaxed">
Les <strong>habilitations électriques sont obligatoires</strong> pour tous les travailleurs exposés au risque électrique. 
                  Choisir la mauvaise formation peut exposer votre entreprise à des <strong>sanctions</strong> et vos équipes à des <strong>dangers</strong>. 
                  Ce quiz vous oriente vers les formations <strong>réglementaires</strong> adaptées à vos besoins.
</p> </div> </div> </div> </div> </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "QuizHabilitation", $$QuizHabilitation, {})} </div> </section>  <section class="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white"> <div class="container mx-auto px-4 text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold mb-6">
Des Questions sur Vos Besoins ?
</h2> <p class="text-xl md:text-2xl mb-10 text-orange-100">
Notre équipe vous conseille pour choisir les formations adaptées<br> <strong>Réponse sous 48h</strong> </p> <a href="/contact" class="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Nous contacter
</a> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/quiz.astro", void 0);

const $$file = "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/quiz.astro";
const $$url = "/quiz";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quiz,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
