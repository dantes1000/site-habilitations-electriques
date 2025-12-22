/* empty css                                             */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_r2uXbYCR.mjs';
import 'piccolore';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_CkIP1fqv.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer__AOGtCNb.mjs';
export { renderers } from '../renderers.mjs';

const $$Formations = createComponent(($$result, $$props, $$slots) => {
  const formations = [
    {
      category: "Personnel Non-\xC9lectricien",
      color: "blue",
      items: [
        {
          code: "B0-H0V",
          title: "Habilitation B0-H0V",
          description: "Ex\xE9cuter en s\xE9curit\xE9 des op\xE9rations d'ordre non \xE9lectrique dans un environnement \xE0 risque \xE9lectrique.",
          duration: "1 \xE0 2 jours (7h \xE0 14h)",
          public: "Personnel non-\xE9lectricien : agents de nettoyage, gardiens, peintres, personnel de manutention, etc.",
          objectives: [
            "Identifier les risques \xE9lectriques",
            "Conna\xEEtre les prescriptions de s\xE9curit\xE9 de la NF C18-510",
            "Ex\xE9cuter en s\xE9curit\xE9 des travaux d'ordre non-\xE9lectrique",
            "Utiliser les \xE9quipements de protection individuelle"
          ]
        },
        {
          code: "B0-H0V CC",
          title: "Habilitation B0-H0V Courant Continu",
          description: "Formation sp\xE9cifique pour les travaux en environnement courant continu (v\xE9hicules \xE9lectriques, installations photovolta\xEFques).",
          duration: "1 \xE0 2 jours (7h \xE0 14h)",
          public: "Personnel intervenant sur des installations en courant continu",
          objectives: [
            "Comprendre les sp\xE9cificit\xE9s du courant continu",
            "Identifier les risques li\xE9s aux installations photovolta\xEFques",
            "Travailler en s\xE9curit\xE9 sur v\xE9hicules \xE9lectriques"
          ]
        }
      ]
    },
    {
      category: "Interventions Basse Tension",
      color: "orange",
      items: [
        {
          code: "BS",
          title: "Habilitation BS",
          description: "Intervention \xE9l\xE9mentaire : remplacement \xE0 l'identique de fusibles, interrupteurs, prises de courant, lampes.",
          duration: "2 jours (14h)",
          public: "Personnel non-\xE9lectricien amen\xE9 \xE0 effectuer des interventions \xE9l\xE9mentaires",
          objectives: [
            "Remplacer des fusibles, lampes, accessoires BT",
            "Identifier les risques \xE9lectriques",
            "Mettre en \u0153uvre les mesures de pr\xE9vention",
            "Rendre compte de son activit\xE9"
          ]
        },
        {
          code: "BE Man\u0153uvre",
          title: "Habilitation BE Man\u0153uvre",
          description: "R\xE9aliser des man\u0153uvres d'exploitation sur des installations basse tension.",
          duration: "1,5 jours (10,5h)",
          public: "Personnel d'exploitation charg\xE9 d'effectuer des man\u0153uvres",
          objectives: [
            "Effectuer des man\u0153uvres en s\xE9curit\xE9",
            "Identifier l'environnement de travail",
            "Respecter les prescriptions de s\xE9curit\xE9",
            "Rendre compte de l'op\xE9ration r\xE9alis\xE9e"
          ]
        }
      ]
    },
    {
      category: "\xC9lectricien Basse Tension",
      color: "orange-dark",
      items: [
        {
          code: "B1-B2-BR-BC",
          title: "Habilitation B1-B2-BR-BC",
          description: "Formation compl\xE8te pour \xE9lectriciens : travaux, intervention, consignation en basse tension.",
          duration: "3 jours (21h)",
          public: "\xC9lectriciens qualifi\xE9s",
          objectives: [
            "Ex\xE9cuter des travaux hors tension (B1)",
            "Diriger des travaux (B2)",
            "Intervenir en d\xE9pannage (BR)",
            "Consigner une installation (BC)"
          ]
        },
        {
          code: "B2V",
          title: "Habilitation B2V",
          description: "Charg\xE9 de travaux au voisinage de pi\xE8ces nues sous tension.",
          duration: "2 jours (14h)",
          public: "Charg\xE9s de travaux amen\xE9s \xE0 diriger des travaux au voisinage",
          objectives: [
            "Organiser des travaux au voisinage",
            "Identifier la zone de voisinage",
            "Mettre en place les mesures de protection",
            "Surveiller les travaux"
          ]
        },
        {
          code: "BC",
          title: "Habilitation BC",
          description: "Charg\xE9 de consignation en basse tension.",
          duration: "2 jours (14h)",
          public: "Personnel \xE9lectricien charg\xE9 de consigner",
          objectives: [
            "R\xE9aliser une consignation \xE9lectrique",
            "Identifier les \xE9quipements de s\xE9paration",
            "Effectuer la mise en s\xE9curit\xE9",
            "R\xE9diger les documents de consignation"
          ]
        },
        {
          code: "BR",
          title: "Habilitation BR",
          description: "Charg\xE9 d'intervention g\xE9n\xE9rale : d\xE9pannage, connexion, essais en basse tension.",
          duration: "2 \xE0 3 jours (14h \xE0 21h)",
          public: "\xC9lectriciens charg\xE9s d'interventions de d\xE9pannage",
          objectives: [
            "R\xE9aliser des d\xE9pannages en s\xE9curit\xE9",
            "Effectuer des connexions/d\xE9connexions",
            "Proc\xE9der \xE0 des essais et mesurages",
            "Respecter les proc\xE9dures d'intervention"
          ]
        },
        {
          code: "BP",
          title: "Habilitation BP Photovolta\xEFque",
          description: "Op\xE9rations sur installations photovolta\xEFques.",
          duration: "2 jours (14h)",
          public: "Personnel intervenant sur installations photovolta\xEFques",
          objectives: [
            "Identifier les risques sp\xE9cifiques PV",
            "Intervenir en s\xE9curit\xE9 sur installations PV",
            "Appliquer les proc\xE9dures de mise en s\xE9curit\xE9",
            "Respecter les zones de travail"
          ]
        }
      ]
    },
    {
      category: "Haute Tension",
      color: "yellow",
      items: [
        {
          code: "BF-HF",
          title: "Habilitation BF-HF (Ex\xE9cutant/Chef)",
          description: "Travaux sous tension en haute tension HTA.",
          duration: "3 jours (21h)",
          public: "\xC9lectriciens habilit\xE9s \xE0 travailler sous tension HTA",
          objectives: [
            "Ex\xE9cuter des travaux sous tension HTA",
            "Diriger une \xE9quipe (Chef)",
            "Utiliser les outils isolants",
            "Respecter les distances de s\xE9curit\xE9"
          ]
        },
        {
          code: "BE-HE",
          title: "Habilitation BE-HE (Mesure/Essai)",
          description: "Op\xE9rations de mesurage et d'essais en haute tension.",
          duration: "2 jours (14h)",
          public: "Personnel charg\xE9 d'op\xE9rations de mesure ou d'essai en HT",
          objectives: [
            "Effectuer des mesurages en HT",
            "R\xE9aliser des essais en s\xE9curit\xE9",
            "Identifier les zones de travail",
            "Utiliser les \xE9quipements de mesure"
          ]
        },
        {
          code: "HE Man\u0153uvre",
          title: "Habilitation HE Man\u0153uvre",
          description: "Man\u0153uvres en haute tension.",
          duration: "2 jours (14h)",
          public: "Personnel charg\xE9 de man\u0153uvres en haute tension",
          objectives: [
            "Effectuer des man\u0153uvres d'exploitation HT",
            "Identifier les risques HT",
            "Respecter les consignes d'exploitation",
            "Rendre compte des op\xE9rations"
          ]
        }
      ]
    }
  ];
  const badgeColors = {
    blue: "badge-info",
    orange: "badge-bt",
    "orange-dark": "badge-bt",
    yellow: "badge-ht"
  };
  const iconGradients = {
    blue: "from-blue-500 to-blue-700",
    orange: "from-orange-500 to-orange-700",
    "orange-dark": "from-orange-500 to-red-600",
    yellow: "from-yellow-400 to-yellow-600"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catalogue de Formations - Habilitelec Formations", "description": "Toutes nos formations aux habilitations \xE9lectriques conformes NF C18-510. Personnel non-\xE9lectricien, interventions BT, \xE9lectricien BT, haute tension." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="section-navy text-white py-20"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6">
Catalogue de Formations
</h1> <p class="text-xl text-blue-100 mb-8">
Toutes nos habilitations électriques détaillées
</p> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block"> <p class="text-lg">
Habilitelec Formations vous propose l'ensemble des formations d'habilitation électrique conformes à la norme <strong>NF C18-510</strong>.
</p> <p class="text-blue-100 mt-4">
Formations initiales et recyclages disponibles en <strong>intra-entreprise</strong> (vos locaux) ou <strong>inter-entreprises</strong> (centres partenaires).
</p> </div> </div> </div> </section>  <section class="py-20 bg-gray-50"> <div class="container mx-auto px-4"> ${formations.map((category) => renderTemplate`<div class="mb-20 max-w-6xl mx-auto"> <!-- En-tête catégorie --> <div class="flex items-center gap-3 mb-10"> <div${addAttribute(`w-12 h-12 bg-gradient-to-br ${iconGradients[category.color]} rounded-xl flex items-center justify-center`, "class")}> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h2 class="text-3xl md:text-4xl font-bold text-gray-900">${category.category}</h2> </div> <!-- Formations de la catégorie --> <div class="space-y-8"> ${category.items.map((formation) => renderTemplate`<div${addAttribute(formation.code.toLowerCase().replace(/\s+/g, "-"), "id")} class="card-pro p-8 scroll-mt-24"> <!-- En-tête formation --> <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-6"> <div class="mb-4 md:mb-0"> <span${addAttribute(`${badgeColors[category.color]} mb-3`, "class")}>${formation.code}</span> <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mt-3"> ${formation.title} </h3> </div> <div class="flex flex-col items-start md:items-end gap-2"> <div class="text-lg font-semibold text-blue-900">
📅 ${formation.duration} </div> </div> </div> <!-- Description --> <p class="text-lg text-gray-700 mb-6 leading-relaxed"> ${formation.description} </p> <!-- Public --> <div class="mb-6"> <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-2"> <svg class="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg>
Public concerné
</h4> <p class="text-gray-600">${formation.public}</p> </div> <!-- Objectifs --> <div class="mb-6"> <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2"> <svg class="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Objectifs pédagogiques
</h4> <ul class="space-y-2"> ${formation.objectives.map((objective) => renderTemplate`<li class="flex items-start gap-2 text-gray-700"> <span class="text-blue-800 mt-1">•</span> <span>${objective}</span> </li>`)} </ul> </div> <!-- CTA --> <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200"> <a href="/contact" class="btn-primary flex-1 justify-center"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Demander un devis
</a> <a href="tel:0635252465" class="btn-secondary flex-1 justify-center"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
06 35 25 24 65
</a> </div> </div>`)} </div> </div>`)} </div> </section>  <section class="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white"> <div class="container mx-auto px-4 text-center"> <div class="max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl font-bold mb-6">
Une question sur nos formations ?
</h2> <p class="text-xl md:text-2xl mb-10 text-orange-100">
Contactez-nous pour un devis personnalisé<br> <strong>Réponse sous 48h</strong> </p> <a href="/contact" class="inline-flex items-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Nous contacter
</a> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/formations.astro", void 0);

const $$file = "C:/Users/j-opi/OneDrive/Documents/OneDrive Perso/OneDrive/Collab_GS.JMO/Projets/site-habilitations-electriques/src/pages/formations.astro";
const $$url = "/formations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Formations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
