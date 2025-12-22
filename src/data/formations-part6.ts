import type { Formation } from '../types/formation';

// PART 6 - RECYCLAGES ÉLECTRIQUES
// 6 formations recyclage obligatoires tous les 3 ans

export const formationsPart6: Formation[] = [
  // ============================================
  // RECYCLAGE B0-H0V
  // ============================================
  {
    code: 'B0-H0V-R',
    slug: 'b0-h0v-recyclage',
    title: 'Recyclage Habilitation B0-H0V',
    category: 'non-electricien',
    color: 'blue',
    
    shortDesc: 'Formation de recyclage triennale obligatoire pour maintenir les compétences en habilitation électrique B0-H0V pour travaux non électriques.',
    
    longDesc: [
      'Le recyclage de l\'habilitation B0-H0V est une obligation réglementaire tous les 3 ans pour le personnel non électricien intervenant dans des environnements électriques.',
      'Cette formation permet de réviser les connaissances théoriques, de mettre à jour les pratiques selon les évolutions réglementaires, et de maintenir le niveau de vigilance face aux risques électriques.',
      'Elle intègre un retour d\'expérience sur les situations rencontrées et une mise à jour sur les nouvelles prescriptions de sécurité.'
    ],
    
    duration: {
      initial: '1 jour (7h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '650 € HT / groupe',
      inter: '180 € HT / personne',
      recyclageIntra: '650 € HT / groupe',
      recyclageInter: '180 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale B0-H0V',
      'Disposer d\'un titre d\'habilitation en cours de validité ou expiré depuis moins de 6 mois',
      'Savoir lire et écrire en français'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Actualiser les connaissances sur les risques électriques et les moyens de prévention',
      'Réviser les prescriptions de sécurité de la norme NF C18-510',
      'Analyser les retours d\'expérience et situations à risque rencontrées',
      'Mettre à jour les compétences pratiques (balisage, EPI, procédures)',
      'Intégrer les évolutions réglementaires récentes',
      'Valider le maintien des compétences par évaluation pratique et théorique'
    ],
    
    program: [
      {
        title: 'Rappel des fondamentaux',
        items: [
          'Révision des grandeurs électriques et dangers du courant',
          'Domaines de tension et limites des zones',
          'Rôle et responsabilités du personnel B0-H0V',
          'Limites d\'intervention (autorisations et interdictions)'
        ]
      },
      {
        title: 'Retour d\'expérience et analyse',
        items: [
          'Situations à risque rencontrées depuis la dernière formation',
          'Analyse d\'accidents ou incidents récents',
          'Bonnes pratiques identifiées sur le terrain',
          'Points de vigilance spécifiques au secteur d\'activité'
        ]
      },
      {
        title: 'Mise à jour réglementaire',
        items: [
          'Évolutions de la norme NF C18-510',
          'Nouvelles prescriptions de sécurité applicables',
          'Modifications des procédures internes',
          'Retour sur les non-conformités constatées'
        ]
      },
      {
        title: 'Exercices pratiques de révision',
        items: [
          'Reconnaissance des équipements et installations',
          'Mise en place du balisage et signalisation',
          'Utilisation des EPI et EPC',
          'Conduite à tenir en cas d\'incident ou accident'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Personnel non électricien déjà habilité B0-H0V devant renouveler son titre d\'habilitation.',
      metiers: [
        'Plombiers chauffagistes (maintien habilitation)',
        'Peintres en bâtiment (renouvellement)',
        'Menuisiers et charpentiers (recyclage)',
        'Maçons et ouvriers BTP (mise à jour)',
        'Agents d\'entretien (révision compétences)',
        'Monteurs d\'échafaudages (actualisation)',
        'Paysagistes (renouvellement 3 ans)',
        'Conducteurs d\'engins (recyclage obligatoire)',
        'Techniciens télécoms (maintien habilitation)',
        'Personnel génie civil (mise à jour compétences)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (50%) et pratique (50%)',
      'Retour d\'expérience interactif basé sur situations réelles',
      'Exercices de révision sur installations électriques',
      'Études de cas d\'accidents ou presqu\'accidents',
      'QCM de validation des connaissances actualisées',
      'Évaluation pratique individuelle en situation',
      'Livret de recyclage remis au stagiaire'
    ],
    
    stats: {
      satisfaction: 98,
      reussite: 99,
      formes: 156
    },
    
    faq: [
      {
        question: 'Quand dois-je faire mon recyclage B0-H0V ?',
        answer: 'Le recyclage doit être effectué tous les 3 ans maximum à partir de la date de votre formation initiale. Au-delà de 6 mois après expiration, une formation initiale complète est nécessaire.'
      },
      {
        question: 'La durée du recyclage est-elle plus courte que la formation initiale ?',
        answer: 'Oui, le recyclage dure 1 jour (7h) contre 1,5 jour pour la formation initiale, car il s\'agit d\'une révision et mise à jour des compétences déjà acquises.'
      },
      {
        question: 'Que se passe-t-il si je rate l\'évaluation de recyclage ?',
        answer: 'En cas d\'échec, un complément de formation pourra être proposé. Si l\'échec persiste, une formation initiale complète sera nécessaire pour renouveler l\'habilitation.'
      },
      {
        question: 'Le tarif du recyclage est-il différent de la formation initiale ?',
        answer: 'Le tarif du recyclage est identique ou légèrement inférieur à la formation initiale, la durée étant réduite mais le contenu restant dense et personnalisé.'
      }
    ],
    
    metaDescription: 'Formation recyclage B0-H0V obligatoire tous les 3 ans. Révision des compétences, mise à jour réglementaire. Tarif 180€ HT. Durée 1 jour. Conforme NF C18-510.'
  },

  // ============================================
  // RECYCLAGE BS-BE MANŒUVRE
  // ============================================
  {
    code: 'BS-BE-R',
    slug: 'bs-be-manoeuvre-recyclage',
    title: 'Recyclage Habilitation BS-BE Manœuvre',
    category: 'interventions-bt',
    color: 'orange',
    
    shortDesc: 'Formation de recyclage triennale pour maintenir les compétences en interventions élémentaires BS et manœuvres d\'exploitation BE Manœuvre.',
    
    longDesc: [
      'Le recyclage BS-BE Manœuvre permet au personnel habilité de maintenir et actualiser ses compétences en interventions électriques élémentaires et manœuvres d\'exploitation.',
      'Cette formation obligatoire tous les 3 ans révise les procédures de remplacement (fusibles, prises, lampes), les opérations de manœuvre (disjoncteurs, sectionneurs), et intègre les retours d\'expérience terrain.',
      'Elle inclut une mise à jour sur les évolutions réglementaires et les bonnes pratiques identifiées depuis la dernière formation.'
    ],
    
    duration: {
      initial: '2 jours (14h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '950 € HT / groupe',
      inter: '280 € HT / personne',
      recyclageIntra: '950 € HT / groupe',
      recyclageInter: '280 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale BS et/ou BE Manœuvre',
      'Disposer d\'un titre d\'habilitation BS/BE en cours ou expiré < 6 mois',
      'Expérience pratique des interventions BS ou manœuvres BE',
      'Savoir lire et écrire en français'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Réviser les limites et responsabilités des habilitations BS et BE Manœuvre',
      'Actualiser les procédures d\'intervention élémentaire et de manœuvre',
      'Analyser les incidents et situations à risque rencontrés',
      'Mettre à jour les compétences pratiques sur installations réelles',
      'Intégrer les évolutions de la norme NF C18-510',
      'Valider le maintien de l\'aptitude par évaluations théorique et pratique'
    ],
    
    program: [
      {
        title: 'Rappels théoriques essentiels',
        items: [
          'Révision risques électriques et prévention',
          'Limites d\'intervention BS (remplacement fusibles, prises, lampes)',
          'Limites de manœuvre BE (disjoncteurs, sectionneurs, contacteurs)',
          'Documents et autorisations de travail',
          'EPI et EPC spécifiques aux interventions'
        ]
      },
      {
        title: 'Retour d\'expérience terrain',
        items: [
          'Situations dangereuses rencontrées depuis dernière formation',
          'Analyse d\'incidents ou accidents récents du secteur',
          'Difficultés pratiques identifiées (accès, équipements...)',
          'Bonnes pratiques et améliorations apportées',
          'Points de vigilance spécifiques à l\'activité'
        ]
      },
      {
        title: 'Mise à jour procédures BS',
        items: [
          'Vérification absence de tension (VAT)',
          'Remplacement de fusibles en sécurité',
          'Remplacement de prises et interrupteurs',
          'Remplacement de lampes et luminaires',
          'Consignation en une étape si nécessaire'
        ]
      },
      {
        title: 'Mise à jour procédures BE Manœuvre',
        items: [
          'Manœuvre de disjoncteurs et sectionneurs',
          'Manœuvre de contacteurs et interrupteurs',
          'Vérification état des équipements avant manœuvre',
          'Compte-rendu et traçabilité des manœuvres',
          'Situations d\'urgence et réarmement'
        ]
      },
      {
        title: 'Exercices pratiques de révision',
        items: [
          'Remplacement fusibles sur armoire réelle',
          'Manœuvres d\'exploitation sur installations',
          'VAT et mise en sécurité',
          'Gestion situation anormale ou incident',
          'Utilisation des EPI (gants isolants, écran facial)'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Personnel habilité BS et/ou BE Manœuvre devant renouveler son titre tous les 3 ans.',
      metiers: [
        'Agents de maintenance (recyclage BS)',
        'Électriciens débutants (renouvellement)',
        'Gardiens d\'immeubles (maintien habilitation)',
        'Agents d\'exploitation (recyclage BE)',
        'Techniciens facility management (mise à jour)',
        'Responsables techniques (renouvellement BE)',
        'Personnel hôtelier (recyclage BS)',
        'Agents de production (maintien compétences)',
        'Techniciens SAV (actualisation BS)',
        'Agents services généraux (renouvellement)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (40%) et pratique (60%)',
      'Retours d\'expérience collectifs et interactifs',
      'Exercices pratiques sur armoires et installations réelles',
      'Simulations de situations d\'incident',
      'QCM de validation des connaissances',
      'Évaluation pratique individuelle',
      'Livret recyclage BS-BE remis'
    ],
    
    stats: {
      satisfaction: 97,
      reussite: 98,
      formes: 234
    },
    
    faq: [
      {
        question: 'Dois-je recycler BS et BE ensemble ?',
        answer: 'Si vous êtes habilité BS et BE Manœuvre, le recyclage peut couvrir les deux habilitations en une seule session de 2 jours. Sinon, vous pouvez recycler uniquement celle que vous utilisez.'
      },
      {
        question: 'Puis-je passer du BS au BR lors du recyclage ?',
        answer: 'Non, le recyclage maintient le niveau d\'habilitation existant. Pour passer au BR, il faut suivre une formation initiale BR complète (3 jours) car les compétences requises sont supérieures.'
      },
      {
        question: 'Le recyclage inclut-il les évolutions du Linky et compteurs communicants ?',
        answer: 'Oui, le recyclage intègre les spécificités des nouveaux équipements (compteurs Linky, disjoncteurs électroniques) et les procédures adaptées.'
      },
      {
        question: 'Que faire si je n\'ai pas pratiqué depuis la formation initiale ?',
        answer: 'Si vous n\'avez pas pratiqué, signalez-le au formateur. Un temps supplémentaire de pratique pourra être proposé, ou une formation initiale complète si l\'inactivité dépasse 3 ans.'
      }
    ],
    
    metaDescription: 'Recyclage BS-BE Manœuvre obligatoire tous les 3 ans. Interventions élémentaires et manœuvres. Tarif 280€ HT. Durée 2 jours. Conforme NF C18-510.'
  },

  // ============================================
  // RECYCLAGE B1-B2-BR-BC
  // ============================================
  {
    code: 'B1B2BRBC-R',
    slug: 'b1-b2-br-bc-recyclage',
    title: 'Recyclage Habilitation B1-B2-BR-BC',
    category: 'electricien-bt',
    color: 'orange-dark',
    
    shortDesc: 'Formation de recyclage triennale pour électriciens habilités B1, B2, BR ou BC - Travaux, dépannage et consignation Basse Tension.',
    
    longDesc: [
      'Le recyclage B1-B2-BR-BC s\'adresse aux électriciens confirmés devant renouveler leur habilitation pour continuer à réaliser des travaux électriques, dépannages et consignations en Basse Tension.',
      'Cette formation obligatoire tous les 3 ans permet de réviser les procédures de travaux hors tension, les opérations de consignation, les interventions de dépannage et de mesure, tout en intégrant les retours d\'expérience et évolutions normatives.',
      'Elle valide le maintien des compétences techniques et le respect rigoureux des prescriptions de sécurité pour les opérations électriques complexes.'
    ],
    
    duration: {
      initial: '3 jours (21h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '1 350 € HT / groupe',
      inter: '450 € HT / personne',
      recyclageIntra: '1 350 € HT / groupe',
      recyclageInter: '450 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale B1-B2-BR-BC',
      'Disposer d\'un titre d\'habilitation électricien BT en cours ou expiré < 6 mois',
      'Justifier d\'une pratique régulière des travaux électriques',
      'Savoir lire et écrire en français'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Réviser les procédures de travaux hors tension et consignation',
      'Actualiser les compétences en dépannage et interventions BR',
      'Analyser les incidents électriques et retours d\'expérience',
      'Mettre à jour les pratiques selon évolutions NF C18-510',
      'Valider les compétences de chargé de travaux (B2) et chargé de consignation (BC)',
      'Maintenir l\'aptitude par évaluations théoriques et pratiques avancées'
    ],
    
    program: [
      {
        title: 'Rappels théoriques électriciens',
        items: [
          'Révision dangers électriques et prévention pour électriciens',
          'Rôles et responsabilités B1, B2, BR, BC',
          'Limites d\'intervention de chaque indice d\'habilitation',
          'Documents de travail (autorisation, attestation de consignation)',
          'Coordination chantier et communication avec les acteurs'
        ]
      },
      {
        title: 'Retour d\'expérience électriciens',
        items: [
          'Analyse d\'accidents électriques récents du secteur',
          'Incidents et presqu\'accidents rencontrés en intervention',
          'Difficultés de consignation et points de vigilance',
          'Non-conformités identifiées lors des travaux',
          'Bonnes pratiques et améliorations adoptées'
        ]
      },
      {
        title: 'Révision procédures B1-B2 (Travaux)',
        items: [
          'Préparation et organisation du chantier électrique',
          'Vérification consignation et autorisation de travail',
          'Réalisation travaux hors tension en sécurité',
          'Coordination équipe (rôle B2 chargé de travaux)',
          'Remise sous tension et levée de consignation'
        ]
      },
      {
        title: 'Révision procédures BR (Dépannage)',
        items: [
          'Analyse de la panne et diagnostic électrique',
          'Consignation partielle ou mesures de protection',
          'Intervention de dépannage sous tension si nécessaire',
          'Remplacement d\'éléments défectueux en sécurité',
          'Vérifications et remise en service',
          'Compte-rendu d\'intervention et traçabilité'
        ]
      },
      {
        title: 'Révision procédures BC (Consignation)',
        items: [
          'Identification de l\'ouvrage à consigner',
          'Séparation, condamnation, vérification absence tension',
          'Mise à la terre et en court-circuit (MALT/CCT)',
          'Délivrance attestation de consignation',
          'Surveillance de la consignation et levée',
          'Situations particulières et consignations multiples'
        ]
      },
      {
        title: 'Exercices pratiques avancés',
        items: [
          'Consignation complète d\'une armoire électrique',
          'Travaux hors tension sur installation réelle',
          'Dépannage simulé avec diagnostic et intervention',
          'Mesures électriques et vérifications',
          'Gestion situation d\'urgence (réarmement, incident)'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Électriciens qualifiés déjà habilités B1, B2, BR et/ou BC devant renouveler leurs titres.',
      metiers: [
        'Électriciens de maintenance (recyclage BR)',
        'Techniciens électriciens (renouvellement B1-B2)',
        'Chargés de travaux électriques (maintien B2)',
        'Responsables électriques (recyclage BC)',
        'Électriciens industriels (mise à jour BR-BC)',
        'Monteurs électriciens (renouvellement B1-B2)',
        'Chefs d\'équipe électricité (maintien B2-BC)',
        'Dépanneurs SAV électrique (recyclage BR)',
        'Agents bureau d\'études électriques (actualisation)',
        'Contrôleurs installations (renouvellement BC)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (35%) et pratique (65%)',
      'Retours d\'expérience électriciens avancés',
      'Exercices de consignation sur armoires réelles',
      'Simulations de dépannage et diagnostic',
      'Travaux pratiques sur installations BT',
      'QCM technique approfondi',
      'Évaluation pratique individuelle exigeante',
      'Livret recyclage électricien remis'
    ],
    
    stats: {
      satisfaction: 98,
      reussite: 97,
      formes: 187
    },
    
    faq: [
      {
        question: 'Dois-je recycler toutes mes habilitations (B1, B2, BR, BC) ?',
        answer: 'Le recyclage couvre l\'ensemble des habilitations que vous détenez. Si vous êtes B2-BR-BC, le recyclage maintient ces 3 indices en une seule session de 3 jours.'
      },
      {
        question: 'Puis-je ajouter le BC lors du recyclage si je suis B2-BR ?',
        answer: 'Non, l\'ajout d\'une nouvelle habilitation (BC) nécessite une formation initiale spécifique. Le recyclage maintient uniquement les habilitations déjà détenues.'
      },
      {
        question: 'Quelle est la différence entre B1 et B2 dans le recyclage ?',
        answer: 'Le recyclage B2 inclut les responsabilités de chef de chantier (coordination équipe, organisation travaux) en plus des compétences B1 (exécutant). Tout est couvert dans la même session.'
      },
      {
        question: 'Le recyclage couvre-t-il les installations photovoltaïques ?',
        answer: 'Non, le photovoltaïque nécessite l\'habilitation BP spécifique. Si vous intervenez sur du PV, vous devez suivre le recyclage BP en complément.'
      }
    ],
    
    metaDescription: 'Recyclage B1-B2-BR-BC électriciens. Travaux, dépannage, consignation BT. Tarif 450€ HT. Durée 3 jours. Obligation triennale. Conforme NF C18-510.'
  },

  // ============================================
  // RECYCLAGE BP PHOTOVOLTAÏQUE
  // ============================================
  {
    code: 'BP-R',
    slug: 'bp-photovoltaique-recyclage',
    title: 'Recyclage Habilitation BP Photovoltaïque',
    category: 'interventions-bt',
    color: 'green',
    
    shortDesc: 'Formation de recyclage triennale spécialisée installations photovoltaïques - Opérations sur générateurs PV en courant continu.',
    
    longDesc: [
      'Le recyclage BP Photovoltaïque permet de maintenir les compétences spécifiques aux interventions sur installations solaires photovoltaïques, particulièrement les opérations en courant continu côté production.',
      'Cette formation obligatoire tous les 3 ans révise les spécificités du courant continu, les risques liés aux générateurs PV (tension permanente, arc électrique), et les procédures de sécurité adaptées.',
      'Elle intègre les évolutions technologiques du secteur (nouveaux onduleurs, optimiseurs, batteries) et les retours d\'expérience des professionnels du photovoltaïque.'
    ],
    
    duration: {
      initial: '2 jours (14h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '1 100 € HT / groupe',
      inter: '380 € HT / personne',
      recyclageIntra: '1 100 € HT / groupe',
      recyclageInter: '380 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale BP Photovoltaïque',
      'Disposer d\'un titre d\'habilitation BP en cours ou expiré < 6 mois',
      'Expérience pratique des installations photovoltaïques',
      'Savoir lire et écrire en français'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Réviser les spécificités du courant continu et dangers des générateurs PV',
      'Actualiser les procédures d\'intervention sur installations photovoltaïques',
      'Analyser les incidents spécifiques au secteur PV',
      'Mettre à jour les compétences sur nouvelles technologies (micro-onduleurs, batteries)',
      'Intégrer les évolutions normatives et réglementaires du photovoltaïque',
      'Valider le maintien de l\'aptitude par évaluations théorique et pratique sur PV'
    ],
    
    program: [
      {
        title: 'Rappels spécifiques photovoltaïque',
        items: [
          'Révision dangers du courant continu (arc électrique, tension permanente)',
          'Constitution d\'une installation PV (panneaux, strings, onduleurs)',
          'Limites d\'intervention habilitation BP',
          'Différences AC/DC et zones de risque',
          'Protection des biens et des personnes en PV'
        ]
      },
      {
        title: 'Retour d\'expérience secteur PV',
        items: [
          'Accidents et incidents photovoltaïques récents',
          'Problématiques rencontrées (ombrage, encrassement, défauts)',
          'Difficultés d\'intervention en toiture',
          'Évolution des pannes et diagnostics',
          'Bonnes pratiques professionnelles identifiées'
        ]
      },
      {
        title: 'Évolutions technologiques PV',
        items: [
          'Nouveaux types d\'onduleurs (hybrides, micro-onduleurs)',
          'Optimiseurs de puissance et électronique de string',
          'Systèmes de stockage par batteries (AC/DC coupled)',
          'Monitoring et supervision à distance',
          'Équipements de sécurité DC (interrupteurs, parafoudres)'
        ]
      },
      {
        title: 'Procédures d\'intervention actualisées',
        items: [
          'Consignation d\'une installation PV (côté DC et AC)',
          'Mise hors tension des strings et vérification',
          'Intervention sur onduleurs en sécurité',
          'Remplacement de panneaux ou câbles DC',
          'Mesures électriques spécifiques PV (tension open circuit, courant string)',
          'Remise en service et vérifications'
        ]
      },
      {
        title: 'Exercices pratiques photovoltaïque',
        items: [
          'Consignation installation PV résidentielle complète',
          'Diagnostic de panne sur installation réelle',
          'Mesures sur strings et onduleurs',
          'Remplacement composant défectueux',
          'Gestion situation anormale (défaut isolement, arc)',
          'Utilisation EPI spécifiques PV'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Professionnels du photovoltaïque habilités BP devant renouveler leur titre tous les 3 ans.',
      metiers: [
        'Installateurs photovoltaïques (recyclage BP)',
        'Techniciens SAV solaire (renouvellement)',
        'Électriciens PV (maintien habilitation)',
        'Couvreurs-solaires (mise à jour BP)',
        'Bureaux d\'études PV (recyclage)',
        'Mainteneurs centrales solaires (renouvellement)',
        'Responsables techniques PV (actualisation)',
        'Agents exploitation toitures PV (maintien)',
        'Contrôleurs installations solaires (recyclage)',
        'Chargés d\'affaires photovoltaïque (mise à jour)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (40%) et pratique (60%)',
      'Focus spécifique courant continu et PV',
      'Retours d\'expérience secteur photovoltaïque',
      'Exercices sur installations PV réelles ou simulées',
      'Manipulation onduleurs et équipements DC',
      'QCM spécifique photovoltaïque',
      'Évaluation pratique sur installation PV',
      'Livret recyclage BP remis'
    ],
    
    stats: {
      satisfaction: 98,
      reussite: 97,
      formes: 143
    },
    
    faq: [
      {
        question: 'Le recyclage BP couvre-t-il les installations avec batteries ?',
        answer: 'Oui, le recyclage BP 2024 intègre les systèmes de stockage par batteries et les spécificités des installations hybrides (PV + batteries).'
      },
      {
        question: 'Dois-je avoir le BR en plus du BP pour le recyclage ?',
        answer: 'Non, le BP se recycle indépendamment. Cependant, si vous intervenez aussi côté AC (armoire, réseau), le BR est fortement recommandé et se recycle séparément.'
      },
      {
        question: 'Le recyclage aborde-t-il les micro-onduleurs et optimiseurs ?',
        answer: 'Oui, le programme est actualisé avec les nouvelles technologies : micro-onduleurs Enphase/APsystems, optimiseurs SolarEdge, onduleurs hybrides Fronius/Huawei...'
      },
      {
        question: 'Puis-je recycler mon BP si je n\'ai pas travaillé sur du PV depuis 2 ans ?',
        answer: 'Oui, mais signalez-le au formateur. Un temps de pratique supplémentaire pourra être nécessaire pour valider les compétences pratiques.'
      }
    ],
    
    metaDescription: 'Recyclage BP Photovoltaïque tous les 3 ans. Installations solaires, courant continu, nouvelles technologies. Tarif 380€ HT. Durée 2 jours. NF C18-510.'
  },

  // ============================================
  // RECYCLAGE BC SEUL (si demandé séparément)
  // ============================================
  {
    code: 'BC-R',
    slug: 'bc-recyclage',
    title: 'Recyclage Habilitation BC (Chargé de Consignation)',
    category: 'electricien-bt',
    color: 'orange-dark',
    
    shortDesc: 'Formation de recyclage spécifique pour les Chargés de Consignation BC - Révision des procédures de consignation Basse Tension.',
    
    longDesc: [
      'Le recyclage BC s\'adresse spécifiquement aux Chargés de Consignation devant renouveler leur habilitation pour continuer à réaliser des consignations d\'installations électriques en Basse Tension.',
      'Cette formation obligatoire tous les 3 ans permet de réviser en profondeur les 4 étapes de la consignation, les cas particuliers (consignations multiples, partielles), et d\'analyser les retours d\'expérience sur les défaillances de consignation.',
      'Elle valide le maintien des compétences critiques de sécurité pour cette fonction à haute responsabilité.'
    ],
    
    duration: {
      initial: '2 jours (14h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '1 000 € HT / groupe',
      inter: '350 € HT / personne',
      recyclageIntra: '1 000 € HT / groupe',
      recyclageInter: '350 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale BC (Chargé de Consignation)',
      'Disposer d\'un titre d\'habilitation BC en cours ou expiré < 6 mois',
      'Expérience régulière de consignations électriques',
      'Savoir lire et écrire en français',
      'Connaître les schémas électriques de son entreprise'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Réviser les 4 étapes de la consignation et leur importance vitale',
      'Actualiser les procédures de séparation, condamnation, VAT, MALT',
      'Analyser les incidents liés à des défaillances de consignation',
      'Mettre à jour les compétences sur consignations complexes',
      'Intégrer les évolutions normatives de la consignation',
      'Valider le maintien de l\'aptitude BC par évaluation pratique exigeante'
    ],
    
    program: [
      {
        title: 'Rappels théoriques consignation',
        items: [
          'Rôle et responsabilités critiques du Chargé de Consignation',
          'Les 4 étapes de la consignation (ordre impératif)',
          'Documents de consignation (attestation, autorisation)',
          'Communication avec chargé de travaux et exécutants',
          'Limites et interdictions du BC'
        ]
      },
      {
        title: 'Retour d\'expérience consignations',
        items: [
          'Analyse d\'accidents dus à défaillance de consignation',
          'Incidents et presqu\'accidents rencontrés',
          'Erreurs de séparation ou condamnation identifiées',
          'Difficultés de repérage et schémas non conformes',
          'Bonnes pratiques et sécurisations adoptées'
        ]
      },
      {
        title: 'Révision étape 1 : Séparation',
        items: [
          'Identification complète de l\'ouvrage à consigner',
          'Repérage sur schémas et vérification terrain',
          'Séparation de toutes les sources d\'alimentation',
          'Cas particuliers : groupes électrogènes, onduleurs, batteries',
          'Traçabilité de la séparation'
        ]
      },
      {
        title: 'Révision étape 2 : Condamnation',
        items: [
          'Condamnation mécanique efficace (cadenas, chaînes)',
          'Signalisation des organes de séparation',
          'Gestion des clés et accès',
          'Condamnation multiple (plusieurs BC)',
          'Levée de condamnation et traçabilité'
        ]
      },
      {
        title: 'Révision étapes 3 & 4 : VAT et MALT',
        items: [
          'Vérification Absence de Tension (VAT) complète',
          'Utilisation correcte des VAT (testeurs, détecteurs)',
          'Mise à la Terre et en Court-Circuit (MALT/CCT)',
          'Emplacement et dimensionnement des MALT',
          'Vérifications après MALT'
        ]
      },
      {
        title: 'Cas particuliers et situations complexes',
        items: [
          'Consignations partielles (partie installation)',
          'Consignations multiples (plusieurs BC simultanés)',
          'Consignation en deux étapes',
          'Consignation avec présence de tension résiduelle',
          'Levée de consignation et remise sous tension',
          'Gestion des situations d\'urgence'
        ]
      },
      {
        title: 'Exercices pratiques de consignation',
        items: [
          'Consignation complète d\'armoire électrique réelle',
          'Identification des sources et séparation',
          'Condamnation mécanique et signalisation',
          'VAT complète avec testeurs',
          'Pose et vérification MALT',
          'Délivrance attestation de consignation',
          'Levée de consignation et remise en service'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Chargés de Consignation BC déjà habilités devant renouveler leur titre tous les 3 ans.',
      metiers: [
        'Chargés de consignation (recyclage BC)',
        'Responsables électriques (renouvellement BC)',
        'Chefs d\'équipe électricité (maintien BC)',
        'Responsables maintenance (mise à jour BC)',
        'Ingénieurs électriciens (recyclage BC)',
        'Contremaîtres électricité (renouvellement)',
        'Responsables travaux (actualisation BC)',
        'Coordonnateurs sécurité (maintien BC)',
        'Agents méthodes électriques (recyclage)',
        'Responsables exploitation (renouvellement BC)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (35%) et pratique (65%)',
      'Focus exclusif sur la consignation',
      'Retours d\'expérience accidents de consignation',
      'Exercices pratiques répétés de consignation complète',
      'Simulations de cas complexes',
      'QCM approfondi sur procédures BC',
      'Évaluation pratique exigeante (consignation complète)',
      'Livret recyclage BC remis'
    ],
    
    stats: {
      satisfaction: 98,
      reussite: 96,
      formes: 89
    },
    
    faq: [
      {
        question: 'Puis-je recycler seulement le BC si je suis B2-BC ?',
        answer: 'Le recyclage B2-BC couvre automatiquement les deux habilitations. Il n\'est pas nécessaire de faire un recyclage BC séparé sauf si vous ne détenez que le BC seul.'
      },
      {
        question: 'Quelle est la différence entre BC et BR pour la consignation ?',
        answer: 'Le BC réalise la consignation complète pour permettre des travaux hors tension. Le BR peut réaliser une consignation en une étape uniquement pour ses propres interventions de dépannage.'
      },
      {
        question: 'Combien de consignations dois-je avoir réalisé pour recycler le BC ?',
        answer: 'Il n\'y a pas de nombre minimum imposé, mais vous devez avoir une pratique régulière. Si vous n\'avez pas consigné depuis plus d\'un an, signalez-le au formateur.'
      },
      {
        question: 'Le recyclage BC couvre-t-il la Haute Tension ?',
        answer: 'Non, le BC recyclé ici concerne uniquement la Basse Tension. Pour la consignation HT, il faut l\'habilitation HC et son recyclage spécifique.'
      }
    ],
    
    metaDescription: 'Recyclage BC Chargé de Consignation électrique. Procédures consignation BT complètes. Tarif 350€ HT. Durée 2 jours. Obligation 3 ans. NF C18-510.'
  },

  // ============================================
  // RECYCLAGE B0-H0 (sans V, pour lignes HT aériennes)
  // ============================================
  {
    code: 'B0-H0-R',
    slug: 'b0-h0-recyclage',
    title: 'Recyclage Habilitation B0-H0 (Lignes HT aériennes)',
    category: 'non-electricien',
    color: 'blue',
    
    shortDesc: 'Formation de recyclage B0-H0 pour personnel non-électricien travaillant à proximité de lignes Haute Tension aériennes (sans voisinage renforcé).',
    
    longDesc: [
      'Le recyclage B0-H0 s\'adresse au personnel non électricien intervenant à proximité de lignes électriques Haute Tension aériennes, notamment avec des engins de grande hauteur (grues, nacelles, pelleteuses).',
      'Cette formation obligatoire tous les 3 ans révise les distances de sécurité HT, les risques d\'arc électrique par rapprochement, et les procédures spécifiques aux travaux extérieurs près de lignes aériennes.',
      'Elle intègre les retours d\'expérience du secteur BTP et des travaux publics sur les accidents liés au voisinage des lignes HT.'
    ],
    
    duration: {
      initial: '1,5 jour (10,5h)',
      recyclage: 'Tous les 3 ans'
    },
    
    pricing: {
      intra: '700 € HT / groupe',
      inter: '190 € HT / personne',
      recyclageIntra: '700 € HT / groupe',
      recyclageInter: '190 € HT / personne'
    },
    
    prerequisites: [
      'Avoir suivi la formation initiale B0-H0 (lignes aériennes HT)',
      'Disposer d\'un titre d\'habilitation B0-H0 en cours ou expiré < 6 mois',
      'Travailler avec engins ou à proximité de lignes HT aériennes',
      'Savoir lire et écrire en français'
    ],
    
    recyclageFrequency: 'Tous les 3 ans (obligation réglementaire)',
    certification: 'Attestation de formation + Avis après formation pour l\'employeur',
    
    objectives: [
      'Réviser les dangers spécifiques des lignes Haute Tension aériennes',
      'Actualiser les distances de sécurité et zones de voisinage HT',
      'Analyser les accidents liés aux engins et lignes aériennes',
      'Mettre à jour les procédures de travail à proximité de lignes HT',
      'Intégrer les évolutions réglementaires sur travaux près réseaux aériens',
      'Valider le maintien de l\'aptitude par évaluations pratique et théorique'
    ],
    
    program: [
      {
        title: 'Rappels dangers Haute Tension aérienne',
        items: [
          'Révision risques électriques spécifiques HT (arc, foudroiement)',
          'Dangers des lignes aériennes (contact direct, amorçage)',
          'Domaine de tension Haute Tension (HTA/HTB)',
          'Rôle du B0-H0 en présence de lignes aériennes',
          'Limites d\'intervention (surveillance, balisage)'
        ]
      },
      {
        title: 'Distances de sécurité HT (DMA/DLVS)',
        items: [
          'Distance Minimale d\'Approche (DMA) selon tension ligne',
          'Distance Limite de Voisinage Simple (DLVS) HT',
          'Tableaux distances réglementaires 20kV/63kV/90kV/225kV',
          'Gestion du survol et du surplomb',
          'Majorations distances pour engins et charges'
        ]
      },
      {
        title: 'Retour d\'expérience accidents HT',
        items: [
          'Analyse accidents engins/grues et lignes aériennes',
          'Électrisations et électrocutions par amorçage',
          'Incidents presqu\'accidents secteur BTP/TP',
          'Défaillances humaines et organisationnelles',
          'Bonnes pratiques et prévention adoptées'
        ]
      },
      {
        title: 'Procédures travaux près lignes HT',
        items: [
          'Préparation chantier : repérage lignes aériennes',
          'Demande de consignation ou accompagnement gestionnaire réseau',
          'Mise en place du balisage et signalisation',
          'Surveillance permanente lors des manœuvres d\'engins',
          'Communication équipe et alertes en cas de rapprochement',
          'Conduite à tenir en cas d\'incident (engin contact ligne)'
        ]
      },
      {
        title: 'Cas particuliers et situations complexes',
        items: [
          'Travaux avec grues à proximité de lignes HT',
          'Utilisation de nacelles et plateformes élévatrices',
          'Terrassements et pelleteuses près pylônes',
          'Élagage d\'arbres sous ou près de lignes',
          'Déroulage de câbles ou conduite de grandes longueurs',
          'Conditions météo défavorables (vent, pluie)'
        ]
      },
      {
        title: 'Exercices pratiques et mises en situation',
        items: [
          'Repérage et identification lignes HT sur plan/terrain',
          'Calcul distances de sécurité selon hauteur engin',
          'Mise en place balisage zone de travail',
          'Simulation manœuvre engin avec surveillance',
          'Gestion situation d\'urgence (engin en contact)',
          'Communication d\'alerte et évacuation'
        ]
      }
    ],
    
    publicConcerne: {
      description: 'Personnel non électricien travaillant avec engins ou structures près lignes HT aériennes.',
      metiers: [
        'Conducteurs d\'engins BTP (recyclage B0-H0)',
        'Grutiers (renouvellement lignes HT)',
        'Chefs de chantier TP (maintien habilitation)',
        'Élagueurs (mise à jour B0-H0)',
        'Monteurs échafaudages (recyclage HT)',
        'Opérateurs nacelles (renouvellement)',
        'Conducteurs poids lourds (actualisation)',
        'Responsables chantier extérieur (recyclage)',
        'Agents VRD (maintien B0-H0)',
        'Coordonnateurs SPS (renouvellement HT)'
      ]
    },
    
    methodologie: [
      'Alternance théorie (50%) et pratique (50%)',
      'Focus spécifique lignes aériennes Haute Tension',
      'Retours d\'expérience accidents engins/lignes',
      'Exercices de repérage et calcul distances',
      'Simulations de manœuvres près lignes',
      'Vidéos d\'accidents et analyses',
      'QCM distances et procédures HT',
      'Évaluation pratique sur chantier simulé',
      'Livret recyclage B0-H0 remis'
    ],
    
    stats: {
      satisfaction: 97,
      reussite: 98,
      formes: 67
    },
    
    faq: [
      {
        question: 'Quelle est la différence entre B0-H0 et B0-H0V ?',
        answer: 'B0-H0 concerne les travaux à proximité de lignes HT aériennes extérieures. B0-H0V (avec V) ajoute le voisinage renforcé pour travaux dans locaux électriques ou très près d\'installations.'
      },
      {
        question: 'Dois-je avoir B0-H0 si je conduis une grue ?',
        answer: 'Oui, si vous travaillez à proximité de lignes HT aériennes (< 50m généralement), l\'habilitation B0-H0 est obligatoire pour les grutiers et conducteurs d\'engins.'
      },
      {
        question: 'Le recyclage couvre-t-il les lignes enterrées ?',
        answer: 'Non, les lignes enterrées relèvent de l\'AIPR (Autorisation d\'Intervention Proximité Réseaux), formation distincte obligatoire pour travaux près réseaux enterrés.'
      },
      {
        question: 'Que faire si ma grue touche une ligne HT pendant les travaux ?',
        answer: 'NE PAS DESCENDRE de la cabine, rester immobile, alerter immédiatement, faire éloigner tout le monde (20m minimum), attendre le gestionnaire réseau. Procédure détaillée en formation.'
      }
    ],
    
    metaDescription: 'Recyclage B0-H0 lignes Haute Tension aériennes. Engins BTP, grues, nacelles. Distances sécurité HT. Tarif 190€ HT. Durée 1,5 jour. NF C18-510.'
  }
];
