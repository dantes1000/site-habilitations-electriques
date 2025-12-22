import type { Formation } from '../types/formation';

export const formationsInterventionsBT: Formation[] = [
  // ========================================
  // INTERVENTIONS BASSE TENSION
  // ========================================
  {
    code: 'BS',
    slug: 'bs',
    title: 'Habilitation BS - Intervention Élémentaire',
    category: 'interventions-bt',
    color: 'orange',
    
    shortDesc: 'Interventions simples : remplacement de fusibles, prises, lampes',
    longDesc: [
      "L'habilitation BS permet d'effectuer des interventions élémentaires de remplacement et de raccordement sur des installations basse tension. Cette formation s'adresse aux professionnels non électriciens qui doivent réaliser des opérations simples en toute sécurité.",
      "Vous apprendrez à remplacer à l'identique des éléments comme les fusibles, interrupteurs, prises de courant et ampoules, tout en respectant strictement les consignes de sécurité de la norme NF C18-510.",
      "Cette habilitation est particulièrement adaptée aux agents de maintenance, au personnel d'exploitation et aux techniciens de proximité qui doivent assurer le bon fonctionnement quotidien des équipements électriques sans faire appel systématiquement à un électricien."
    ],
    
    duration: {
      initial: '2 jours (14h)',
      recyclage: '1,5 jours (10,5h)'
    },
    
    pricing: {
      intra: '950€ HT/groupe (1-12 pers)',
      inter: '320€ HT/personne',
      recyclageIntra: '750€ HT/groupe',
      recyclageInter: '260€ HT/personne'
    },
    
    prerequisites: [
      'Savoir lire et écrire le français',
      'Connaissances de base en électricité domestique souhaitables',
      'Aptitude médicale au travail sur installations électriques'
    ],
    
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation BS remis par l'employeur",
    
    objectives: [
      'Réaliser en sécurité des interventions élémentaires de remplacement et raccordement',
      'Identifier les risques électriques spécifiques aux interventions BS',
      'Appliquer la procédure de mise en sécurité avant intervention',
      'Utiliser les équipements de protection individuelle adaptés',
      'Vérifier l\'absence de tension avec les outils appropriés',
      'Effectuer des raccordements simples dans les règles de l\'art',
      'Rendre compte de son intervention et signaler les anomalies'
    ],
    
    program: [
      {
        title: 'Tronc commun - Bases électriques',
        items: [
          'Notions de tension, intensité et résistance électrique',
          'Effets du courant sur le corps humain et seuils dangereux',
          'Domaine basse tension et ses limites (50V à 1000V)',
          'Zones d\'environnement et distances de sécurité',
          'Symboles et significations de l\'habilitation électrique',
          'Équipements de protection : gants isolants, écran facial, VAT',
          'Conduite à tenir en urgence : incendie, électrisation'
        ]
      },
      {
        title: 'Module BS - Intervention élémentaire',
        items: [
          'Définition précise des interventions élémentaires autorisées',
          'Limites strictes de l\'habilitation BS : ce qui est permis et interdit',
          'Procédure de consignation en 4 étapes pour mise en sécurité',
          'Vérification d\'absence de tension (VAT) : méthode et outils',
          'Remplacement de fusibles, porte-fusibles, ampoules et accessoires',
          'Remplacement de prises de courant, interrupteurs, détecteurs',
          'Raccordement d\'éléments sur circuit en attente (boîte de dérivation)',
          'Remise sous tension et vérification du bon fonctionnement',
          'Rédaction du compte-rendu d\'intervention'
        ]
      },
      {
        title: 'Travaux pratiques',
        items: [
          'Exercice : identification des équipements remplaçables en BS',
          'Mise en pratique : remplacement d\'un interrupteur avec VAT',
          'Simulation : remplacement de fusible et remise en service',
          'Entraînement : raccordement sur circuit en attente',
          'Utilisation réelle d\'un VAT (vérificateur d\'absence de tension)'
        ]
      },
      {
        title: 'Évaluation',
        items: [
          'QCM théorique : connaissances électriques et réglementaires',
          'Épreuve pratique : remplacement complet avec mise en sécurité',
          'Validation par le formateur pour remise du certificat'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Formation destinée aux professionnels non électriciens amenés à effectuer des interventions simples sur des installations électriques.',
      metiers: [
        'Agents de maintenance polyvalents dans l\'industrie et le tertiaire',
        'Techniciens de proximité en gestion immobilière',
        'Personnel d\'exploitation de sites industriels',
        'Agents techniques des collectivités territoriales',
        'Gardiens d\'immeubles et concierges',
        'Techniciens de maintenance informatique et télécom',
        'Personnel hôtelier de maintenance',
        'Responsables techniques de salles de spectacle',
        'Agents d\'entretien de sites commerciaux',
        'Techniciens SAV intervenant chez les particuliers'
      ]
    },
    
    methodologie: [
      'Formation en salle avec matériel pédagogique électrique',
      'Manipulation réelle d\'équipements : VAT, gants isolants, fusibles',
      'Exercices pratiques sur tableau électrique pédagogique',
      'Mises en situation progressives avec complexité croissante',
      'Retours d\'expérience et analyse d\'accidents réels',
      'Documentation technique : schémas, symboles électriques',
      'Livret du stagiaire remis avec procédures détaillées'
    ],
    
    stats: {
      satisfaction: 97.8,
      reussite: 99.5
    },
    
    faq: [
      {
        question: 'Puis-je réparer un appareil électrique défectueux avec l\'habilitation BS ?',
        answer: 'Non, l\'habilitation BS autorise uniquement le remplacement à l\'identique. Toute réparation ou modification doit être effectuée par un électricien qualifié habilité BR ou B2.'
      },
      {
        question: 'Puis-je créer un nouveau circuit électrique en BS ?',
        answer: 'Non, la création de circuits est interdite en BS. Vous pouvez seulement raccorder des éléments sur des circuits déjà existants et en attente de raccordement.'
      },
      {
        question: 'Dois-je obligatoirement utiliser un VAT ?',
        answer: 'Oui, la vérification d\'absence de tension est obligatoire avant toute intervention BS. C\'est une étape de sécurité fondamentale qui ne doit jamais être omise.'
      },
      {
        question: 'Quelle est la différence entre BS et BR ?',
        answer: 'BS permet uniquement des interventions élémentaires de remplacement, tandis que BR autorise des interventions générales incluant dépannage, mesure et travaux plus complexes. BR nécessite des connaissances électriques approfondies.'
      },
      {
        question: 'Puis-je intervenir sur un tableau électrique principal ?',
        answer: 'Vous pouvez remplacer des fusibles dans le tableau mais ne pouvez pas effectuer de travaux de câblage ou de modification. Les interventions complexes dans les tableaux sont réservées aux BR et B2.'
      }
    ],
    
    metaDescription: 'Formation habilitation électrique BS - Intervention élémentaire. Remplacement fusibles, prises, lampes en BT. Certifié Qualiopi. Auvergne-Rhône-Alpes, Occitanie.'
  },
  
  {
    code: 'BE Manœuvre',
    slug: 'be-manoeuvre',
    title: 'Habilitation BE Manœuvre',
    category: 'interventions-bt',
    color: 'orange',
    
    shortDesc: 'Manœuvres d\'exploitation sur installations basse tension',
    longDesc: [
      "L'habilitation BE Manœuvre vous autorise à effectuer des opérations de commande sur les installations électriques : mise sous ou hors tension, réarmement de protections, commutations. Ces manœuvres d'exploitation sont essentielles au bon fonctionnement des installations industrielles et tertiaires.",
      "Cette formation s'adresse aux personnels d'exploitation qui doivent assurer la continuité de service en effectuant des manœuvres sur les équipements électriques sans réaliser de travaux. Vous apprendrez à identifier les organes de commande et à exécuter les manœuvres en toute sécurité.",
      "Conforme à la norme NF C18-510, cette habilitation couvre les manœuvres sur disjoncteurs, sectionneurs, contacteurs et tout appareil de commande basse tension dans le respect strict des consignes d'exploitation."
    ],
    
    duration: {
      initial: '1,5 jours (10,5h)',
      recyclage: '1 jour (7h)'
    },
    
    pricing: {
      intra: '850€ HT/groupe (1-12 pers)',
      inter: '290€ HT/personne',
      recyclageIntra: '650€ HT/groupe',
      recyclageInter: '230€ HT/personne'
    },
    
    prerequisites: [
      'Savoir lire et écrire le français',
      'Connaissances de base du fonctionnement des installations électriques',
      'Aptitude médicale aux travaux électriques'
    ],
    
    recyclageFrequency: 'Tous les 3 ans',
    certification: "Titre d'habilitation BE Manœuvre remis par l'employeur",
    
    objectives: [
      'Identifier les différents organes de commande d\'une installation électrique',
      'Effectuer des manœuvres d\'exploitation en toute sécurité',
      'Respecter les consignes et procédures d\'exploitation établies',
      'Reconnaître les situations anormales nécessitant l\'intervention d\'un spécialiste',
      'Communiquer efficacement avec le personnel électricien',
      'Rendre compte précisément des manœuvres effectuées',
      'Appliquer les mesures d\'urgence en cas d\'incident'
    ],
    
    program: [
      {
        title: 'Fondamentaux électriques',
        items: [
          'Rappels des grandeurs électriques essentielles',
          'Risques électriques spécifiques aux manœuvres',
          'Architecture d\'une installation électrique industrielle',
          'Schémas électriques : lecture et compréhension',
          'Équipements de protection et leur rôle'
        ]
      },
      {
        title: 'Les organes de commande',
        items: [
          'Disjoncteurs : fonctionnement, types et manipulation',
          'Sectionneurs : rôle, identification et utilisation',
          'Contacteurs et relais : principe de fonctionnement',
          'Interrupteurs et commutateurs industriels',
          'Dispositifs de protection : différentiel, thermique, magnétique',
          'Voyants de signalisation et indicateurs de position'
        ]
      },
      {
        title: 'Module BE Manœuvre',
        items: [
          'Définition précise des manœuvres autorisées',
          'Limites de l\'habilitation : ce qu\'on peut et ne peut pas faire',
          'Procédures de manœuvre : mise sous tension, hors tension',
          'Réarmement de protections après déclenchement',
          'Vérification de l\'état de l\'installation avant manœuvre',
          'Manœuvres d\'urgence et procédures de secours',
          'Communication et coordination avec l\'équipe',
          'Documentation : registre de manœuvres, fiches d\'intervention'
        ]
      },
      {
        title: 'Pratique des manœuvres',
        items: [
          'Manipulation de disjoncteurs BT sur tableau pédagogique',
          'Exercice de réarmement après déclenchement',
          'Simulation de mise hors tension pour maintenance',
          'Procédure de remise en service après intervention',
          'Identification d\'anomalies et décision d\'intervention spécialisée'
        ]
      },
      {
        title: 'Évaluation',
        items: [
          'Test théorique sur les manœuvres et consignes',
          'Évaluation pratique : enchaînement de manœuvres',
          'Mise en situation d\'urgence et réaction appropriée'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Formation pour le personnel d\'exploitation amené à effectuer des manœuvres sur les installations électriques.',
      metiers: [
        'Agents d\'exploitation d\'installations industrielles',
        'Techniciens de maintenance non électriciens',
        'Opérateurs de production en industrie',
        'Responsables d\'exploitation de sites tertiaires',
        'Personnel de surveillance d\'installations techniques',
        'Agents de maîtrise en charge de l\'exploitation',
        'Techniciens CVC (chauffage, ventilation, climatisation)',
        'Agents d\'exploitation de réseaux (eau, gaz)',
        'Personnel de conduite d\'installations automatisées',
        'Responsables techniques de bâtiments et sites'
      ]
    },
    
    methodologie: [
      'Formation théorique avec présentation des équipements',
      'Manipulation sur armoires et tableaux électriques pédagogiques',
      'Exercices pratiques de manœuvres guidées puis autonomes',
      'Simulation de situations d\'exploitation réelles',
      'Études de cas : analyse d\'incidents liés à des manœuvres',
      'Documentation : procédures types de manœuvres',
      'Support pédagogique complet remis à chaque participant'
    ],
    
    faq: [
      {
        question: 'Puis-je ouvrir une armoire électrique pour effectuer une manœuvre ?',
        answer: 'Oui, si votre habilitation et vos consignes d\'exploitation le prévoient. Vous devez cependant vous limiter strictement aux organes de commande accessibles et ne toucher à aucun élément sous tension.'
      },
      {
        question: 'Que faire si un disjoncteur se déclenche plusieurs fois de suite ?',
        answer: 'Ne réarmez pas un disjoncteur qui déclenche de façon répétée. Cela indique un défaut qui nécessite l\'intervention d\'un électricien qualifié. Signalez immédiatement l\'anomalie.'
      },
      {
        question: 'Puis-je effectuer des manœuvres sans consignes écrites ?',
        answer: 'Non, toute manœuvre doit être effectuée selon des consignes d\'exploitation claires et documentées. En l\'absence de procédure établie, contactez le responsable d\'exploitation.'
      },
      {
        question: 'L\'habilitation BE Manœuvre me permet-elle de remplacer un fusible ?',
        answer: 'Non, le remplacement de fusibles relève de l\'habilitation BS (intervention élémentaire). BE Manœuvre couvre uniquement les manœuvres sur organes de commande comme les disjoncteurs.'
      },
      {
        question: 'Puis-je former d\'autres personnes aux manœuvres après ma formation ?',
        answer: 'Non, seul un formateur habilité peut dispenser la formation. Vous pouvez cependant transmettre les consignes d\'exploitation spécifiques à votre site sous supervision de votre hiérarchie.'
      }
    ],
    
    metaDescription: 'Formation habilitation BE Manœuvre - Manœuvres d\'exploitation BT. Disjoncteurs, sectionneurs, remise en service. Certifié Qualiopi. Formation Ardèche Savoie.'
  }
];
