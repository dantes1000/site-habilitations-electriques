import type { Formation } from '../types/formation';

// FORMATIONS ÉLECTRICIEN BASSE TENSION (Version condensée - à enrichir si besoin)
export const formationsElectricienBT: Formation[] = [
  {
    code: 'B1-B2-BR-BC',
    slug: 'b1-b2-br-bc',
    title: 'Habilitation B1-B2-BR-BC - Électricien Complet',
    category: 'electricien-bt',
    color: 'orange-dark',
    shortDesc: 'Formation complète électricien : travaux, dépannage, consignation',
    longDesc: [
      "Formation complète destinée aux électriciens professionnels couvrant l'ensemble des niveaux d'habilitation en basse tension.",
      "B1 (exécutant), B2 (chargé de travaux), BR (intervention générale) et BC (chargé de consignation).",
      "Indispensable pour intervenir en toute autonomie sur les installations électriques BT."
    ],
    duration: { initial: '3 jours (21h)', recyclage: '1,5 jours (10,5h)' },
    pricing: {
      intra: '1200€ HT/groupe',
      inter: '450€ HT/personne',
      recyclageIntra: '900€ HT/groupe',
      recyclageInter: '360€ HT/personne'
    },
    prerequisites: ['Formation électricien ou CAP/BEP électrotechnique', 'Expérience en installations électriques BT'],
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titres d'habilitation B1, B2, BR, BC",
    objectives: [
      'Exécuter des travaux hors tension en sécurité (B1)',
      'Diriger et organiser des travaux électriques (B2)',
      'Effectuer des interventions de dépannage et connexion (BR)',
      'Réaliser des consignations électriques (BC)',
      'Maîtriser les procédures de mise en sécurité',
      'Appliquer la norme NF C18-510 dans toutes les opérations'
    ],
    program: [
      { title: 'Tronc commun électricien', items: ['Dangers électriques', 'Domaines de tension', 'Équipements de protection'] },
      { title: 'Module B1-B2 Travaux', items: ['Exécution travaux', 'Direction chantier', 'Organisation travaux'] },
      { title: 'Module BR Intervention', items: ['Dépannage', 'Connexion', 'Mesures et essais'] },
      { title: 'Module BC Consignation', items: ['Procédure consignation', 'Documents', 'Mise en sécurité'] }
    ],
    publicConcerne: {
      description: 'Électriciens qualifiés',
      metiers: ['Électriciens d\'installation', 'Électriciens de maintenance', 'Chefs d\'équipe électricité']
    },
    methodologie: ['Alternance théorie/pratique', 'Travaux sur installations réelles', 'Études de cas'],
    stats: { satisfaction: 98, reussite: 99.2 },
    faq: [
      { question: 'Puis-je obtenir les 4 niveaux ?', answer: 'Oui, la formation couvre les 4 niveaux. L\'employeur délivre selon vos compétences.' }
    ],
    metaDescription: 'Formation B1-B2-BR-BC électricien BT. Travaux, dépannage, consignation. Certifié Qualiopi.'
  },
  
  // Ajout rapide des autres formations BT
  {
    code: 'BR',
    slug: 'br',
    title: 'Habilitation BR - Intervention Générale',
    category: 'electricien-bt',
    color: 'orange-dark',
    shortDesc: 'Dépannage, connexion et mesures en basse tension',
    longDesc: ["Formation BR pour interventions de dépannage et maintenance sur installations BT."],
    duration: { initial: '2-3 jours (14-21h)', recyclage: '1,5 jours (10,5h)' },
    pricing: { intra: '1000€ HT/groupe', inter: '380€ HT/personne' },
    prerequisites: ['Connaissances électricité BT'],
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation BR",
    objectives: ['Réaliser dépannages', 'Effectuer connexions', 'Procéder aux mesures'],
    program: [{ title: 'Module BR', items: ['Dépannage', 'Connexion', 'Essais'] }],
    publicConcerne: { description: 'Électriciens maintenance', metiers: ['Dépanneurs', 'Mainteneurs'] },
    methodologie: ['Pratique intensive'],
    faq: [],
    metaDescription: 'Formation BR dépannage électrique BT.'
  },
  
  {
    code: 'BP',
    slug: 'bp-photovoltaique',
    title: 'Habilitation BP - Photovoltaïque',
    category: 'electricien-bt',
    color: 'orange-dark',
    shortDesc: 'Opérations sur installations photovoltaïques',
    longDesc: ["Formation spécialisée pour interventions sur installations solaires photovoltaïques."],
    duration: { initial: '2 jours (14h)', recyclage: '1 jour (7h)' },
    pricing: { intra: '1050€ HT/groupe', inter: '380€ HT/personne' },
    prerequisites: ['Habilitation électrique de base'],
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation BP",
    objectives: ['Identifier risques PV', 'Intervenir sur installations solaires'],
    program: [{ title: 'Module BP', items: ['Spécificités PV', 'Intervention sécurisée'] }],
    publicConcerne: { description: 'Installateurs solaires', metiers: ['Électriciens PV', 'Installateurs'] },
    methodologie: ['Pratique sur panneaux'],
    faq: [],
    metaDescription: 'Formation BP photovoltaïque installations solaires.'
  }
];
