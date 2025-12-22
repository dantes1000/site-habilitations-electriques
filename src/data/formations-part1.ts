import type { Formation } from '../types/formation';

export const formationsElectriques: Formation[] = [
  // ========================================
  // PERSONNEL NON-ÉLECTRICIEN
  // ========================================
  {
    code: 'B0-H0V',
    slug: 'b0-h0v',
    title: 'Habilitation B0-H0V',
    category: 'non-electricien',
    color: 'blue',
    
    shortDesc: 'Opérations non électriques en environnement BT et HT',
    longDesc: [
      "La formation B0-H0V s'adresse aux professionnels qui doivent intervenir dans des zones présentant des risques électriques sans pour autant effectuer de travaux électriques. Cette habilitation est essentielle pour garantir votre sécurité lors d'interventions à proximité d'installations électriques.",
      "Conforme à la norme NF C18-510, cette formation vous permettra d'identifier les dangers électriques, de comprendre les zones à risque et d'adopter les comportements appropriés pour travailler en toute sécurité.",
      "Que vous soyez amené à accéder à des locaux techniques, à surveiller des chantiers ou à intervenir près de lignes électriques aériennes ou enterrées, l'habilitation B0-H0V est obligatoire."
    ],
    
    duration: {
      initial: '1 à 2 jours (7h à 14h)',
      recyclage: '1 jour (7h)'
    },
    
    pricing: {
      intra: '850€ HT/groupe (1-12 pers)',
      inter: '280€ HT/personne',
      recyclageIntra: '650€ HT/groupe',
      recyclageInter: '220€ HT/personne'
    },
    
    prerequisites: [
      'Savoir lire et écrire le français',
      'Aucune connaissance électrique requise',
      'Aptitude médicale au travail en environnement électrique'
    ],
    
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation remis par l'employeur après validation",
    
    objectives: [
      'Identifier et analyser les risques électriques dans votre environnement de travail',
      'Comprendre les principes de l\'habilitation et connaître vos limites d\'intervention',
      'Appliquer les consignes de sécurité et les procédures de prévention',
      'Délimiter et sécuriser votre zone de travail (balisage)',
      'Utiliser correctement les équipements de protection individuelle et collective',
      'Réagir de manière appropriée en cas d\'accident ou d\'incident électrique',
      'Communiquer efficacement avec les responsables électriques et le chargé de travaux'
    ],
    
    program: [
      {
        title: 'Tronc commun - Notions fondamentales',
        items: [
          'Grandeurs électriques : tension, intensité, puissance, courant alternatif et continu',
          'Effets du courant électrique sur le corps humain : électrisation, électrocution, brûlures',
          'Domaines de tension (TBT, BT, HTA, HTB) et leur identification',
          'Zones d\'environnement électrique et leurs limites de sécurité',
          'Principes et symboles de l\'habilitation électrique',
          'Équipements de protection collective (EPC) : identification et utilisation',
          'Matériel et outillage : risques et manipulation sécurisée',
          'Conduite à tenir en cas d\'incident, d\'incendie ou d\'accident électrique'
        ]
      },
      {
        title: 'Module B0-H0V spécifique',
        items: [
          'Rôle et fonction des différents acteurs (chargé de travaux, chargé d\'exploitation)',
          'Documents de travail : autorisation de travail, attestation de consignation',
          'Limites de l\'habilitation B0-H0V : autorisations et interdictions strictes',
          'Organisation et délimitation de la zone de travail',
          'Techniques de balisage et signalisation efficaces',
          'Surveillance et contrôle du chantier en environnement électrique',
          'Communication avec le personnel habilité et reporting des opérations'
        ]
      },
      {
        title: 'Évaluation des compétences',
        items: [
          'Test théorique : QCM sur les connaissances électriques et réglementaires',
          'Mise en situation pratique : balisage de zone, identification des risques',
          'Validation par un formateur expert pour délivrance du titre d\'habilitation'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Cette formation s\'adresse à tout professionnel non électricien intervenant dans des environnements où des risques électriques sont présents.',
      metiers: [
        'Plombiers et chauffagistes intervenant à proximité d\'installations électriques',
        'Peintres travaillant près de câbles ou d\'équipements sous tension',
        'Menuisiers installant des éléments en bois à proximité d\'installations électriques',
        'Maçons et ouvriers du bâtiment lors de constructions ou rénovations',
        'Agents d\'entretien et de nettoyage de locaux techniques',
        'Monteurs d\'échafaudages à proximité de lignes électriques',
        'Paysagistes travaillant près de câbles aériens ou enterrés',
        'Conducteurs d\'engins de chantier (pelleteuses, grues, bulldozers)',
        'Techniciens réseaux télécom installant des équipements près d\'installations électriques',
        'Personnel de maintenance et de gardiennage accédant aux locaux électriques'
      ]
    },
    
    methodologie: [
      'Formation en salle équipée de supports visuels et pédagogiques',
      'Alternance entre théorie et exercices pratiques sur plateformes d\'apprentissage',
      'Études de cas réels issus de situations professionnelles concrètes',
      'Démonstrations de matériel électrique et d\'équipements de protection',
      'Mises en situation avec balisage et identification des zones à risque',
      'Remise d\'un livret pédagogique complet à chaque participant',
      'Évaluation continue des acquis avec feedback personnalisé'
    ],
    
    stats: {
      satisfaction: 98.5,
      reussite: 99.9,
      formes: 1275
    },
    
    faq: [
      {
        question: 'Quelle est la durée de validité de l\'habilitation B0-H0V ?',
        answer: 'L\'habilitation B0-H0V est valable 3 ans. Un recyclage est obligatoire avant expiration pour maintenir votre habilitation active.'
      },
      {
        question: 'Puis-je travailler seul avec une habilitation B0-H0V ?',
        answer: 'Oui, l\'habilitation B0-H0V vous permet de travailler seul dans une zone délimitée et balisée, après avoir reçu les instructions du chargé de travaux.'
      },
      {
        question: 'Quelle est la différence entre B0 et H0V ?',
        answer: 'B0 concerne les travaux en basse tension, tandis que H0V concerne les travaux au voisinage de lignes haute tension. La formation couvre généralement les deux niveaux.'
      },
      {
        question: 'L\'habilitation est-elle délivrée par le formateur ?',
        answer: 'Non, le formateur délivre une attestation de formation. C\'est votre employeur qui vous délivre le titre d\'habilitation après avoir vérifié votre aptitude médicale.'
      },
      {
        question: 'Que se passe-t-il si mon habilitation expire ?',
        answer: 'Si votre habilitation expire, vous ne pouvez plus intervenir en zone électrique. Un recyclage doit être effectué dans les plus brefs délais pour renouveler votre habilitation.'
      }
    ],
    
    metaDescription: 'Formation habilitation électrique B0-H0V pour personnel non électricien. Travaux d\'ordre non électrique en BT et HT. Certifié Qualiopi, conforme NF C18-510. Auvergne-Rhône-Alpes et Occitanie.'
  },
  
  {
    code: 'B0-H0V CC',
    slug: 'b0-h0v-cc',
    title: 'Habilitation B0-H0V Courant Continu',
    category: 'non-electricien',
    color: 'blue',
    
    shortDesc: 'Opérations non électriques en environnement courant continu',
    longDesc: [
      "La formation B0-H0V Courant Continu est spécifiquement conçue pour les professionnels intervenant sur des installations en courant continu, notamment dans le secteur automobile, ferroviaire et des énergies renouvelables.",
      "Avec l'essor des véhicules électriques, des installations photovoltaïques et des systèmes de stockage d'énergie, cette formation devient indispensable pour tous les métiers amenés à travailler à proximité de ces équipements.",
      "Conforme à la norme NF C18-510, elle aborde les spécificités du courant continu et les risques particuliers associés, notamment l'absence de passage naturel par zéro du courant qui rend l'arc électrique plus dangereux."
    ],
    
    duration: {
      initial: '1 à 2 jours (7h à 14h)',
      recyclage: '1 jour (7h)'
    },
    
    pricing: {
      intra: '900€ HT/groupe (1-12 pers)',
      inter: '300€ HT/personne',
      recyclageIntra: '700€ HT/groupe',
      recyclageInter: '240€ HT/personne'
    },
    
    prerequisites: [
      'Savoir lire et écrire le français',
      'Aucune connaissance électrique requise',
      'Aptitude médicale au travail en environnement électrique'
    ],
    
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation CC remis par l'employeur après validation",
    
    objectives: [
      'Comprendre les spécificités et dangers du courant continu',
      'Identifier les risques liés aux installations photovoltaïques et batteries',
      'Reconnaître les équipements et installations en courant continu',
      'Travailler en sécurité sur et à proximité de véhicules électriques',
      'Appliquer les mesures de prévention adaptées au courant continu',
      'Utiliser les équipements de protection spécifiques au CC',
      'Réagir correctement en cas d\'incident sur installation CC'
    ],
    
    program: [
      {
        title: 'Fondamentaux du courant continu',
        items: [
          'Différences entre courant continu et courant alternatif',
          'Caractéristiques du courant continu : absence de passage par zéro',
          'Dangers spécifiques : arc électrique prolongé, effet polarisant',
          'Sources de courant continu : batteries, panneaux photovoltaïques, chargeurs',
          'Tensions rencontrées en CC : de 12V à 1500V selon les installations'
        ]
      },
      {
        title: 'Installations photovoltaïques',
        items: [
          'Fonctionnement et architecture d\'une installation solaire',
          'Identification des zones de danger : modules, onduleurs, batteries',
          'Risques spécifiques : impossibilité de mise hors tension des panneaux en journée',
          'Procédures de sécurisation pour intervention',
          'Consignes de travail de jour et de nuit'
        ]
      },
      {
        title: 'Véhicules électriques et hybrides',
        items: [
          'Architecture électrique des véhicules électriques',
          'Identification des composants haute tension : batteries, câbles orange',
          'Procédures de mise en sécurité avant intervention',
          'Travaux autorisés et interdits selon l\'habilitation',
          'Risques liés aux batteries lithium-ion'
        ]
      },
      {
        title: 'Module B0-H0V CC spécifique',
        items: [
          'Limites de l\'habilitation en courant continu',
          'Distances de sécurité adaptées au CC',
          'Équipements de protection spécifiques',
          'Balisage et délimitation des zones CC',
          'Communication et coordination avec les électriciens',
          'Conduite à tenir en cas d\'accident sur installation CC'
        ]
      },
      {
        title: 'Évaluation pratique',
        items: [
          'Test théorique sur les spécificités du courant continu',
          'Mise en situation : identification des risques sur installation PV',
          'Exercice pratique : balisage de zone sur véhicule électrique'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Formation destinée aux professionnels intervenant sur ou à proximité d\'installations en courant continu.',
      metiers: [
        'Mécaniciens et carrossiers travaillant sur véhicules électriques et hybrides',
        'Techniciens de maintenance automobile spécialisés en véhicules électriques',
        'Couvreurs et charpentiers installant des panneaux photovoltaïques',
        'Agents d\'entretien de toitures équipées de panneaux solaires',
        'Électriciens du bâtiment intervenant sur installations photovoltaïques',
        'Techniciens de maintenance d\'installations solaires',
        'Personnel de dépannage et remorquage de véhicules électriques',
        'Agents de maintenance ferroviaire (trains, tramways électriques)',
        'Techniciens travaillant sur systèmes de stockage d\'énergie (batteries)',
        'Personnel d\'exploitation de centrales photovoltaïques'
      ]
    },
    
    methodologie: [
      'Formation théorique avec supports visuels spécifiques au courant continu',
      'Démonstrations sur maquettes pédagogiques (panneaux PV, batteries)',
      'Exercices pratiques d\'identification sur installations réelles',
      'Vidéos et études de cas d\'accidents réels pour sensibilisation',
      'Manipulation d\'équipements de protection spécifiques CC',
      'Mise en situation sur véhicule électrique (selon disponibilité)',
      'Livret pédagogique spécialisé courant continu remis à chaque stagiaire'
    ],
    
    faq: [
      {
        question: 'Pourquoi une formation spécifique au courant continu ?',
        answer: 'Le courant continu présente des risques spécifiques : arc électrique plus dangereux, effet polarisant, impossibilité de coupure naturelle. Une formation dédiée est nécessaire pour comprendre ces dangers.'
      },
      {
        question: 'Puis-je intervenir sur des panneaux photovoltaïques avec cette habilitation ?',
        answer: 'Avec l\'habilitation B0-H0V CC, vous pouvez travailler à proximité des panneaux mais ne pouvez pas intervenir directement sur la partie électrique. Seul un électricien habilité peut le faire.'
      },
      {
        question: 'Cette formation est-elle obligatoire pour travailler sur véhicules électriques ?',
        answer: 'Oui, tout professionnel amené à intervenir sur ou à proximité de véhicules électriques doit être habilité B0-H0V CC, même pour des opérations non électriques (carrosserie, mécanique).'
      },
      {
        question: 'Quelle tension maximale peut-on rencontrer en CC ?',
        answer: 'Les tensions en courant continu varient de 12V (batteries automobiles) à plus de 1500V (certaines installations photovoltaïques et ferroviaires). La formation couvre tous ces niveaux.'
      }
    ],
    
    metaDescription: 'Formation B0-H0V courant continu pour véhicules électriques et panneaux photovoltaïques. Personnel non électricien. Certifié Qualiopi, conforme NF C18-510. Ardèche, Savoie.'
  }
];
