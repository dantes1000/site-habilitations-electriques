import type { Formation } from '../types/formation';

// ============================================
// FORMATIONS ÉLECTRICIEN BT - PHOTOVOLTAÏQUE
// ============================================

export const formationBPEnrichi: Formation = {
  code: 'BP',
  slug: 'bp-photovoltaique',
  title: 'Habilitation BP - Photovoltaïque',
  category: 'electricien-bt',
  color: 'orange-dark',
  shortDesc: 'Intervenir en sécurité sur installations photovoltaïques en toiture ou au sol en maîtrisant les risques spécifiques du courant continu.',
  longDesc: [
    "La formation BP Photovoltaïque prépare les électriciens à intervenir en toute sécurité sur les installations de production d'énergie solaire. Les installations photovoltaïques présentent des particularités qui les distinguent nettement des installations électriques classiques : production permanente de courant continu tant qu'il y a de la lumière, impossibilité de mise hors tension complète de jour, risques d'arc électrique prolongé.",
    "Cette formation couvre l'ensemble de la chaîne photovoltaïque : des panneaux en toiture ou au sol jusqu'aux onduleurs et au raccordement au réseau. Les stagiaires apprennent à identifier les risques spécifiques (courant continu, tension cumulée, impossibilité de coupure), à mettre en œuvre les procédures de sécurité adaptées et à utiliser les équipements de protection renforcés.",
    "Au-delà des aspects électriques, cette formation intègre les risques liés au travail en hauteur sur toiture et les contraintes environnementales (chaleur, reflets). Elle alterne apports théoriques, études de cas d'incidents réels et travaux pratiques sur installations photovoltaïques réelles ou maquettes pédagogiques."
  ],
  duration: {
    initial: '2 jours (14 heures)',
    recyclage: '1,5 jours (10,5 heures)'
  },
  pricing: {
    intra: '1 050€ HT',
    inter: '350€ HT',
    recyclageIntra: '850€ HT',
    recyclageInter: '280€ HT'
  },
  prerequisites: [
    'Être électricien qualifié avec expérience en basse tension',
    'Posséder une habilitation électrique en cours de validité (BR ou B2)',
    'Avoir des connaissances en électricité courant continu',
    'Aptitude médicale au travail en hauteur (si intervention toiture)'
  ],
  recyclageFrequency: 'Tous les 3 ans conformément à la norme NF C18-510',
  certification: 'Avis d\'habilitation BP (Photovoltaïque) délivré par l\'employeur sur la base de notre attestation de formation',
  
  objectives: [
    'Identifier les risques électriques spécifiques aux installations photovoltaïques',
    'Comprendre le fonctionnement d\'une installation PV (panneaux, onduleur, raccordement)',
    'Appliquer les procédures de mise en sécurité adaptées au photovoltaïque',
    'Intervenir en sécurité sur installations PV en toiture ou au sol',
    'Utiliser les équipements de protection individuelle renforcés',
    'Identifier les situations dangereuses et réagir de manière appropriée',
    'Réaliser des opérations de maintenance préventive et corrective sur installations PV'
  ],
  
  program: [
    {
      title: 'Tronc commun (rappels)',
      items: [
        'Rappels sur les risques électriques et leurs effets',
        'Cadre réglementaire et norme NF C18-510',
        'Les acteurs de la prévention du risque électrique',
        'Équipements de protection individuelle et collective',
        'Conduite à tenir en cas d\'accident électrique'
      ]
    },
    {
      title: 'Spécificités du photovoltaïque',
      items: [
        'Principe de fonctionnement d\'une cellule et d\'un panneau photovoltaïque',
        'Production permanente de courant continu en présence de lumière',
        'Impossibilité de mise hors tension complète des panneaux de jour',
        'Tensions cumulées : effet série des modules PV',
        'Risque d\'arc électrique prolongé en courant continu',
        'Comportement particulier des installations PV en cas de défaut'
      ]
    },
    {
      title: 'Architecture des installations PV',
      items: [
        'Chaîne photovoltaïque : panneaux, strings, boîtes de jonction',
        'Câblage DC : sections, protections, cheminements',
        'Onduleurs : types, fonctionnement, couplage réseau',
        'Protections électriques : fusibles DC, parafoudres, sectionneurs',
        'Mise à la terre des installations PV',
        'Systèmes de monitoring et supervision'
      ]
    },
    {
      title: 'Risques et mesures de prévention',
      items: [
        'Risques électriques : choc, arc, court-circuit en DC',
        'Risques liés au travail en hauteur sur toiture',
        'Risques environnementaux : chaleur, éblouissement, intempéries',
        'Procédures de mise en sécurité : occultation, sectionnement, VAT',
        'Choix et utilisation des EPI adaptés (gants DC, écrans)',
        'Délimitation des zones de travail et balisage'
      ]
    },
    {
      title: 'Interventions sur installations PV',
      items: [
        'Préparation de l\'intervention : analyse des risques, choix des EPI',
        'Mise en sécurité selon le type d\'intervention (jour/nuit)',
        'Opérations de maintenance préventive (nettoyage, serrage)',
        'Remplacement de modules, fusibles, connecteurs défaillants',
        'Interventions sur onduleurs et boîtes de jonction',
        'Mesurages spécifiques : tension DC, courant de string, isolement',
        'Remise en service et vérifications',
        'Rédaction du compte-rendu d\'intervention'
      ]
    },
    {
      title: 'Cas particuliers',
      items: [
        'Installations en toiture : contraintes d\'accès, équipements antichute',
        'Installations au sol : fermes solaires, centrales PV',
        'Systèmes avec stockage (batteries lithium-ion)',
        'Installations en autoconsommation vs revente totale',
        'Interventions de nuit : procédures simplifiées',
        'Gestion des situations d\'urgence et incidents'
      ]
    },
    {
      title: 'Travaux pratiques et évaluation',
      items: [
        'Reconnaissance d\'installation PV complète (chaîne, onduleur)',
        'Mise en sécurité d\'une installation PV de jour',
        'Mesurages sur panneaux et strings (tension, courant)',
        'Remplacement de modules et fusibles DC',
        'Utilisation d\'EPI renforcés (gants DC classe 1)',
        'Évaluation théorique (QCM)',
        'Évaluation pratique (intervention complète sur installation PV)'
      ]
    }
  ],
  
  publicConcerne: {
    description: 'Électriciens qualifiés amenés à intervenir sur installations photovoltaïques en toiture ou au sol pour maintenance, dépannage ou raccordement.',
    metiers: [
      'Installateurs photovoltaïques',
      'Électriciens spécialisés énergies renouvelables',
      'Techniciens de maintenance installations PV',
      'Couvreurs-zingueurs intervenant sur PV',
      'Agents de maintenance toitures solaires',
      'Électriciens SAV photovoltaïque',
      'Techniciens d\'exploitation centrales solaires',
      'Responsables techniques bâtiments avec PV',
      'Agents de maintenance fermes solaires',
      'Techniciens bureau d\'études (essais PV)'
    ]
  },
  
  methodologie: [
    'Formation théorique avec supports vidéo d\'installations réelles',
    'Présentation de matériels PV : panneaux, onduleurs, connecteurs',
    'Démonstrations sur maquette pédagogique photovoltaïque',
    'Travaux pratiques sur installation PV réelle ou simulateur',
    'Manipulation d\'équipements de mesure spécifiques (multimètre DC, pince)',
    'Exercices de mise en sécurité et occultation de panneaux',
    'Études de cas d\'accidents sur installations photovoltaïques',
    'Livret stagiaire avec schémas et procédures spécifiques PV',
    'Évaluations théorique et pratique individuelles'
  ],
  
  stats: {
    satisfaction: 97.8,
    reussite: 98.9,
    formes: 340
  },
  
  faq: [
    {
      question: 'Pourquoi ne peut-on pas mettre hors tension des panneaux photovoltaïques de jour ?',
      answer: 'Les panneaux photovoltaïques produisent du courant dès qu\'ils sont exposés à la lumière, même diffuse ou artificielle. Il n\'existe aucun "interrupteur" sur les panneaux eux-mêmes. Seul le sectionnement en aval (boîte de jonction, onduleur) permet d\'isoler la partie installation, mais les panneaux et les câbles DC entre panneaux restent TOUJOURS sous tension de jour. D\'où l\'importance des procédures d\'occultation ou d\'intervention de nuit pour certaines opérations.'
    },
    {
      question: 'Quels sont les risques spécifiques du courant continu par rapport au courant alternatif ?',
      answer: 'Le courant continu présente plusieurs particularités dangereuses : l\'arc électrique ne s\'éteint pas spontanément (contrairement à l\'AC qui passe par zéro 100 fois/seconde), ce qui rend les arcs DC plus persistants et destructeurs. De plus, en cas de choc électrique, le courant DC provoque une tétanisation prolongée rendant difficile le lâcher de prise. Les équipements de protection (fusibles, disjoncteurs) ont également un comportement différent en DC.'
    },
    {
      question: 'L\'habilitation BP remplace-t-elle le BR pour le photovoltaïque ?',
      answer: 'Non, l\'habilitation BP est COMPLÉMENTAIRE du BR (ou du B2). Le BP ajoute les compétences spécifiques au photovoltaïque (risques DC, procédures PV, mise en sécurité adaptée). Un électricien intervenant sur PV doit donc être habilité BR + BP (ou B2 + BP selon ses fonctions). Le BP seul ne suffit pas, il faut d\'abord une habilitation BT de base.'
    },
    {
      question: 'Doit-on intervenir obligatoirement de nuit sur les installations PV ?',
      answer: 'Non, il est possible d\'intervenir de jour avec des procédures de sécurité adaptées : occultation des panneaux avec bâches opaques, sectionnement en amont, vérification d\'absence de tension, utilisation d\'EPI renforcés (gants DC classe 1, écran facial). Cependant, certaines interventions sensibles (remplacement de panneaux, travaux sur câblage DC) peuvent nécessiter une intervention de nuit pour une sécurité maximale.'
    },
    {
      question: 'Quels EPI spécifiques sont nécessaires pour le photovoltaïque ?',
      answer: 'En plus des EPI électriques classiques, le photovoltaïque nécessite : gants isolants adaptés au courant continu (classe 1 minimum pour des tensions DC >500V fréquentes sur strings), écran facial anti-arc renforcé, vêtements anti-arc (le risque d\'arc DC étant plus important), lunettes de protection contre l\'éblouissement. Si intervention en toiture : harnais antichute, casque, chaussures de sécurité antidérapantes.'
    }
  ],
  
  metaDescription: 'Formation habilitation BP Photovoltaïque pour intervenir en sécurité sur installations solaires. Courant continu, mise en sécurité PV, maintenance. Certifié Qualiopi.'
};

// ============================================
// FORMATIONS HAUTE TENSION
// ============================================

export const formationBFHF: Formation = {
  code: 'BF-HF',
  slug: 'bf-hf-travaux-sous-tension',
  title: 'Habilitation BF-HF - Travaux Sous Tension HTA',
  category: 'haute-tension',
  color: 'yellow',
  shortDesc: 'Exécuter ou diriger des travaux sous tension sur installations haute tension HTA en respectant les distances de sécurité et en utilisant les outils isolants.',
  longDesc: [
    "La formation BF-HF (Basse Fréquence - Haute Fréquence) prépare les électriciens hautement qualifiés à réaliser des travaux sous tension sur installations haute tension HTA (jusqu\'à 50 000 volts). Ces opérations extrêmement délicates nécessitent une expertise technique pointue, une parfaite maîtrise des gestes et l\'utilisation d\'équipements spécialisés.",
    "Les travaux sous tension (TST) sont réalisés lorsqu\'il est impossible ou trop contraignant de mettre l\'installation hors tension (continuité de service, risques liés à la coupure). Cette formation couvre deux niveaux : BF exécutant (réalise les travaux) et HF chef de travaux (dirige et surveille l\'équipe). Les deux niveaux sont généralement formés ensemble.",
    "Cette formation très technique alterne théorie approfondie sur les phénomènes haute tension, démonstrations sur maquettes pédagogiques et travaux pratiques intensifs avec manipulation d\'outils isolants de classe 2 et 3. La sécurité est au cœur de chaque geste, avec un apprentissage rigoureux des distances minimales d\'approche et des méthodes de protection."
  ],
  duration: {
    initial: '3 jours (21 heures)',
    recyclage: '2 jours (14 heures)'
  },
  pricing: {
    intra: '1 400€ HT',
    inter: '450€ HT',
    recyclageIntra: '1 100€ HT',
    recyclageInter: '380€ HT'
  },
  prerequisites: [
    'Être électricien hautement qualifié avec expérience significative en HTA',
    'Posséder déjà une habilitation haute tension (H1, H2 ou équivalent)',
    'Excellente dextérité manuelle et coordination des gestes',
    'Aptitude médicale renforcée (vision, stress, vertiges)',
    'Formation préalable aux risques électriques haute tension'
  ],
  recyclageFrequency: 'Tous les 3 ans conformément à la norme NF C18-510',
  certification: 'Avis d\'habilitation BF (exécutant TST HTA) et/ou HF (chef de travaux TST HTA) délivré par l\'employeur',
  
  objectives: [
    'Maîtriser les phénomènes électriques haute tension et leurs dangers spécifiques',
    'Connaître et appliquer rigoureusement les distances minimales d\'approche (DMA)',
    'Utiliser en sécurité les outils isolants de classes 2 et 3',
    'Exécuter des travaux sous tension HTA selon les méthodes normalisées',
    'Diriger une équipe de travaux sous tension (niveau HF)',
    'Organiser le chantier TST et définir les mesures de protection',
    'Réagir efficacement en cas d\'incident ou d\'amorçage'
  ],
  
  program: [
    {
      title: 'Rappels haute tension',
      items: [
        'Spécificités de la haute tension par rapport à la BT',
        'Phénomènes d\'amorçage et de claquage dans l\'air',
        'Influence de l\'humidité et de la pollution',
        'Effet de couronne et décharges partielles',
        'Conséquences d\'un choc électrique en HTA',
        'Statistiques d\'accidents en travaux sous tension'
      ]
    },
    {
      title: 'Réglementation des travaux sous tension',
      items: [
        'Cadre réglementaire spécifique aux TST (décret, norme)',
        'Conditions d\'autorisation des travaux sous tension',
        'Qualification et habilitation du personnel TST',
        'Responsabilités du chargé de travaux sous tension',
        'Documents obligatoires : mode opératoire, autorisation',
        'Surveillance médicale renforcée'
      ]
    },
    {
      title: 'Distances de sécurité en HTA',
      items: [
        'DMA - Distance Minimale d\'Approche en fonction de la tension',
        'Distance de voisinage en haute tension',
        'Zone de travail sous tension',
        'Influence de la configuration des installations',
        'Méthode de calcul et de vérification des distances',
        'Matérialisation des zones (chaînettes, rubans)'
      ]
    },
    {
      title: 'Équipements et outils isolants',
      items: [
        'Classes d\'isolation : classe 2 et classe 3 pour HTA',
        'Perches isolantes télescopiques et accessoires',
        'Outils isolants : pinces, tournevis, clés',
        'Gants isolants haute tension (classe 3 - 26,5 kV)',
        'Écrans et protecteurs isolants',
        'Vêtements de protection anti-arc électrique',
        'Vérification périodique et essais diélectriques'
      ]
    },
    {
      title: 'Méthodes de travaux sous tension',
      items: [
        'Méthode au contact : utilisation de gants isolants',
        'Méthode à distance : utilisation de perches isolantes',
        'Méthode au potentiel : accès direct aux parties actives',
        'Choix de la méthode selon le type d\'opération',
        'Installation du poste de travail TST',
        'Gestes techniques : serrage, desserage, pose, dépose',
        'Coordination des gestes en équipe'
      ]
    },
    {
      title: 'Organisation d\'un chantier TST (niveau HF)',
      items: [
        'Analyse préalable de l\'installation et des risques',
        'Rédaction du mode opératoire spécifique',
        'Demande d\'autorisation de travaux sous tension',
        'Constitution et briefing de l\'équipe',
        'Mise en place des protections et délimitations',
        'Surveillance permanente durant les opérations',
        'Gestion des situations anormales ou dangereuses'
      ]
    },
    {
      title: 'Opérations courantes en TST HTA',
      items: [
        'Remplacement de fusibles HTA sous tension',
        'Pose et dépose de câbles ou jeux de barres',
        'Serrage de connexions accessibles',
        'Installation de protection temporaire',
        'Manœuvres de sectionneurs sous tension',
        'Opérations sur cellules HTA',
        'Travaux sur lignes aériennes HTA'
      ]
    },
    {
      title: 'Situations d\'urgence',
      items: [
        'Détection d\'un amorçage imminent',
        'Procédure d\'arrêt immédiat des travaux',
        'Gestion d\'un contact accidentel',
        'Conduite à tenir en cas d\'arc électrique',
        'Évacuation de la zone de danger',
        'Alerte et premiers secours en HTA',
        'Compte-rendu d\'incident TST'
      ]
    },
    {
      title: 'Travaux pratiques et évaluation',
      items: [
        'Reconnaissance d\'installation HTA et zones de travail',
        'Manipulation d\'outils isolants classe 2 et 3',
        'Exercices de respect des DMA avec perches',
        'Réalisation de gestes techniques sous tension (maquette)',
        'Mise en situation de chantier TST complet',
        'Exercices de direction d\'équipe (niveau HF)',
        'Évaluation théorique approfondie',
        'Évaluation pratique individuelle sur gestes TST'
      ]
    }
  ],
  
  publicConcerne: {
    description: 'Électriciens hautement qualifiés et expérimentés en haute tension, amenés à exécuter ou diriger des travaux sous tension sur installations HTA.',
    metiers: [
      'Monteurs-câbleurs lignes haute tension',
      'Électriciens haute tension confirmés',
      'Chefs d\'équipe réseaux HTA',
      'Agents d\'exploitation postes HTA/BT',
      'Techniciens maintenance réseaux électriques',
      'Responsables d\'exploitation HTA',
      'Électriciens ENEDIS/RTE (distribution)',
      'Agents de maîtrise maintenance industrielle HT',
      'Techniciens postes sources',
      'Responsables techniques réseaux haute tension'
    ]
  },
  
  methodologie: [
    'Formation théorique approfondie sur phénomènes HTA',
    'Démonstrations vidéo de travaux sous tension réels',
    'Présentation et manipulation d\'outils isolants professionnels',
    'Travaux pratiques intensifs sur maquettes pédagogiques HTA',
    'Exercices de coordination de gestes en équipe',
    'Études de cas d\'incidents TST et analyse des causes',
    'Simulations de situations d\'urgence',
    'Livret stagiaire avec modes opératoires types TST',
    'Évaluations théorique et pratique très exigeantes'
  ],
  
  stats: {
    satisfaction: 98.5,
    reussite: 97.2,
    formes: 180
  },
  
  faq: [
    {
      question: 'Quelle est la différence entre BF et HF ?',
      answer: 'BF (Basse Fréquence) désigne l\'exécutant de travaux sous tension : c\'est l\'électricien qui réalise physiquement les opérations sous tension. HF (Haute Fréquence) désigne le chef de travaux sous tension : il dirige l\'équipe, surveille les opérations, assure la coordination et la sécurité. Le HF ne touche pas forcément aux installations mais a une responsabilité globale. La formation couvre généralement les deux niveaux simultanément.'
    },
    {
      question: 'Qu\'est-ce que la DMA et pourquoi est-elle si importante ?',
      answer: 'La DMA (Distance Minimale d\'Approche) est la distance en-deçà de laquelle aucune partie du corps ou outil conducteur ne doit s\'approcher d\'une pièce sous tension. En HTA 20 kV, la DMA est d\'environ 0,30 m. Cette distance est ABSOLUE et NON-NÉGOCIABLE car en dessous, un amorçage (arc électrique) peut se produire même sans contact physique. Le respect strict de la DMA est la base de la sécurité en TST.'
    },
    {
      question: 'Peut-on réaliser tous les travaux sous tension en HTA ?',
      answer: 'Non, les travaux sous tension ne sont autorisés QUE si la mise hors tension est impossible ou entraîne des risques graves (continuité d\'alimentation vitale, manœuvres dangereuses). De plus, seules certaines opérations normalisées et décrites dans des modes opératoires validés peuvent être réalisées en TST. Chaque opération nécessite une autorisation préalable et des conditions strictes (météo, matériel, personnel qualifié).'
    },
    {
      question: 'Quels sont les outils de classe 3 ?',
      answer: 'Les outils isolants de classe 3 sont conçus pour une tension d\'isolement de 36 kV (donc adaptés à la HTA 20 kV). Il s\'agit de gants isolants épais spéciaux, de perches isolantes télescopiques, de pinces isolantes, d\'écrans protecteurs. Ces outils subissent des essais diélectriques périodiques obligatoires (tous les 1 à 2 ans selon le type). Aucun outil métallique non isolé ne doit être utilisé en TST HTA.'
    },
    {
      question: 'Combien de personnes minimum pour des travaux sous tension ?',
      answer: 'Les travaux sous tension HTA nécessitent au minimum 3 personnes : 1 chargé de travaux TST habilité HF (surveille, dirige, coordonne) + 2 exécutants habilités BF (dont 1 réalise le travail et l\'autre assiste/surveille). Cette organisation en équipe de 3 permet une surveillance mutuelle permanente et une intervention rapide en cas d\'incident. Le travail seul en TST HTA est STRICTEMENT INTERDIT.'
    }
  ],
  
  metaDescription: 'Formation habilitation BF-HF pour travaux sous tension haute tension HTA. Outils isolants, distances de sécurité, méthodes TST. Formation exigeante. Certifié Qualiopi.'
};

export const formationBEHE: Formation = {
  code: 'BE-HE',
  slug: 'be-he-mesure-essai',
  title: 'Habilitation BE-HE - Mesure et Essai en Haute Tension',
  category: 'haute-tension',
  color: 'yellow',
  shortDesc: 'Réaliser des opérations de mesurage, d\'essais et de vérifications sur installations haute tension en toute sécurité.',
  longDesc: [
    "La formation BE-HE Mesure/Essai prépare les électriciens qualifiés à réaliser des opérations spécifiques de mesurage et d\'essais sur installations haute tension. Ces opérations sont essentielles pour la mise en service, la maintenance préventive, le diagnostic de pannes et la vérification de conformité des équipements HTA.",
    "Contrairement aux travaux classiques, les mesurages et essais nécessitent souvent de réalimenter partiellement l\'installation ou de créer des conditions particulières (injection de tension, essais diélectriques). Le technicien BE ou HE Mesure/Essai doit donc maîtriser non seulement les aspects électriques mais aussi l\'utilisation d\'équipements de mesure spécialisés haute tension.",
    "Cette formation couvre les principales opérations de mesurage en HTA : mesures électriques classiques (tension, courant, puissance), essais diélectriques (rigidité, isolement), mesures de protection (terre, continuité), ainsi que les essais de fonctionnement d\'équipements. Les stagiaires apprennent à préparer l\'installation, choisir les appareils adaptés, réaliser les mesures en sécurité et interpréter les résultats."
  ],
  duration: {
    initial: '2 jours (14 heures)',
    recyclage: '1,5 jours (10,5 heures)'
  },
  pricing: {
    intra: '1 200€ HT',
    inter: '380€ HT',
    recyclageIntra: '950€ HT',
    recyclageInter: '320€ HT'
  },
  prerequisites: [
    'Être électricien qualifié avec connaissances en haute tension',
    'Avoir des notions de métrologie et d\'utilisation d\'appareils de mesure',
    'Posséder une habilitation HTA en cours de validité (H1, H2 ou équivalent)',
    'Maîtriser les schémas électriques haute tension'
  ],
  recyclageFrequency: 'Tous les 3 ans conformément à la norme NF C18-510',
  certification: 'Avis d\'habilitation BE Mesure/Essai (BT) ou HE Mesure/Essai (HTA) délivré par l\'employeur',
  
  objectives: [
    'Identifier les différents types de mesurages et essais en haute tension',
    'Préparer une installation HTA pour réaliser des mesures en sécurité',
    'Choisir et utiliser les appareils de mesure adaptés à la haute tension',
    'Réaliser des mesurages électriques : tension, courant, puissance, énergie',
    'Effectuer des essais diélectriques : isolement, rigidité, tan delta',
    'Interpréter les résultats de mesure et identifier les anomalies',
    'Rédiger des rapports de mesure et essais conformes aux normes'
  ],
  
  program: [
    {
      title: 'Tronc commun haute tension',
      items: [
        'Rappels sur les risques électriques en HTA',
        'Cadre réglementaire et norme NF C18-510',
        'Les acteurs des opérations de mesurage/essai',
        'Distances de sécurité et zones de travail en HT',
        'Équipements de protection individuelle en HTA'
      ]
    },
    {
      title: 'Module BE-HE Mesure et Essai',
      items: [
        'Définition des opérations de mesurage et d\'essai',
        'Différence entre mesurage et travaux',
        'Responsabilités du chargé de mesure/essai',
        'Instructions de sécurité spécifiques',
        'Autorisation et supervision des opérations',
        'Limites de l\'habilitation BE-HE'
      ]
    },
    {
      title: 'Appareils de mesure haute tension',
      items: [
        'Voltmètres et sondes haute tension',
        'Ampèremètres et pinces ampèremétriques HT',
        'Wattmètres et analyseurs de réseau triphasés',
        'Mégohmmètres et contrôleurs d\'isolement (2,5 à 5 kV)',
        'Appareils d\'essais diélectriques',
        'Détecteurs de défaut et localisateurs',
        'Calibration et vérification des appareils'
      ]
    },
    {
      title: 'Mesurages électriques en HTA',
      items: [
        'Mesure de tension entre phases et phase-terre',
        'Mesure de courant de charge et de déséquilibre',
        'Mesure de puissance active et réactive',
        'Mesure du facteur de puissance (cos φ)',
        'Analyse harmonique et qualité de l\'énergie',
        'Mesure de continuité et résistance de terre',
        'Précautions lors des mesurages sous ou hors tension'
      ]
    },
    {
      title: 'Essais diélectriques',
      items: [
        'Mesure de résistance d\'isolement (mégohmmètre)',
        'Essais de rigidité diélectrique (tension appliquée)',
        'Mesure de tangente delta (tan δ) sur câbles et transfo',
        'Essais de tenue en tension à fréquence industrielle',
        'Essais au choc de foudre (si équipement disponible)',
        'Interprétation des résultats et critères d\'acceptation',
        'Essais avant mise en service et périodiques'
      ]
    },
    {
      title: 'Essais de fonctionnement',
      items: [
        'Essais de protection différentielle et directionnelle',
        'Vérification du fonctionnement des relais de protection',
        'Essais de déclenchement de disjoncteurs',
        'Tests de télécommande et télésignalisation',
        'Mesure de temps de coupure',
        'Essais de synchronisme',
        'Essais de transformateurs HTA/BT'
      ]
    },
    {
      title: 'Préparation et procédures',
      items: [
        'Analyse préalable de l\'installation',
        'Choix des points de mesure et des appareils',
        'Préparation de la zone d\'intervention',
        'Consignation partielle si nécessaire',
        'Installation des appareils de mesure',
        'Réalisation des mesures selon protocole',
        'Dépose des appareils et remise en service',
        'Rédaction du rapport de mesurage/essai'
      ]
    },
    {
      title: 'Travaux pratiques et évaluation',
      items: [
        'Reconnaissance d\'installation HTA et identification des points de mesure',
        'Utilisation d\'appareils de mesure HT (voltmètre, pince, mégohmmètre)',
        'Réalisation de mesurages de tension et courant en HTA',
        'Essais d\'isolement sur câbles et équipements',
        'Interprétation de résultats et détection d\'anomalies',
        'Rédaction de rapports de mesure',
        'Évaluation théorique (QCM)',
        'Évaluation pratique (mesurage complet sur installation HTA)'
      ]
    }
  ],
  
  publicConcerne: {
    description: 'Électriciens et techniciens qualifiés amenés à réaliser des opérations de mesurage, d\'essais et de vérifications sur installations haute tension.',
    metiers: [
      'Techniciens de mise en service installations HTA',
      'Agents de maintenance préventive réseaux HT',
      'Techniciens bureau de contrôle électrique',
      'Électriciens essais et mesures',
      'Techniciens bureau d\'études (essais terrain)',
      'Agents d\'exploitation postes HTA/BT',
      'Techniciens SAV matériel haute tension',
      'Responsables techniques maintenance HTA',
      'Ingénieurs essais électriques',
      'Techniciens qualité réseaux électriques'
    ]
  },
  
  methodologie: [
    'Formation théorique sur métrologie et appareils HT',
    'Présentation d\'appareils de mesure haute tension',
    'Démonstrations de mesurages sur installations réelles',
    'Travaux pratiques avec manipulation d\'appareils professionnels',
    'Exercices d\'interprétation de résultats de mesure',
    'Études de cas d\'essais de mise en service',
    'Rédaction de rapports de mesurage conformes',
    'Livret stagiaire avec protocoles de mesure types',
    'Évaluations théorique et pratique'
  ],
  
  stats: {
    satisfaction: 97.6,
    reussite: 98.7,
    formes: 260
  },
  
  faq: [
    {
      question: 'Quelle est la différence entre BE Mesure et HE Mesure ?',
      answer: 'BE Mesure concerne les opérations de mesurage en basse tension (jusqu\'à 1000V), tandis que HE Mesure concerne la haute tension (au-delà de 1000V, généralement jusqu\'à 50 kV). Les principes sont similaires mais les équipements, les distances de sécurité et les précautions sont beaucoup plus stricts en HE. La formation peut couvrir les deux niveaux ou uniquement HE selon les besoins.'
    },
    {
      question: 'Peut-on réaliser des mesurages sous tension en HTA ?',
      answer: 'Oui, certains mesurages peuvent être réalisés sous tension (mesure de tension, de courant de charge, de puissance) avec des appareils et des sondes adaptées à la haute tension. Cependant, d\'autres essais nécessitent une installation hors tension et consignée (essais d\'isolement, rigidité diélectrique). Le choix dépend du type de mesure et des équipements disponibles. Les mesurages sous tension HTA nécessitent des précautions renforcées.'
    },
    {
      question: 'Qu\'est-ce qu\'un essai de rigidité diélectrique ?',
      answer: 'Un essai de rigidité diélectrique consiste à appliquer une tension beaucoup plus élevée que la tension nominale pour vérifier que l\'isolant (câble, transfo, appareillage) ne claque pas. Par exemple, on applique 4 à 6 kV pendant 1 minute sur un câble 20 kV. Si l\'isolant tient sans claquage, il est considéré conforme. Cet essai est destructif s\'il y a défaut, d\'où l\'importance de bien dimensionner la tension d\'essai.'
    },
    {
      question: 'Qu\'est-ce que la mesure de tan delta (tangente delta) ?',
      answer: 'La mesure de tan δ (tangente delta) permet d\'évaluer l\'état de vieillissement d\'un isolant (câble, transformateur) sans le détruire. Elle mesure les pertes diélectriques dans l\'isolant. Une augmentation du tan δ dans le temps indique une dégradation de l\'isolant (humidité, vieillissement). C\'est un indicateur prédictif très utilisé en maintenance préventive des câbles HTA et des transformateurs.'
    },
    {
      question: 'Doit-on consigner l\'installation pour tous les mesurages ?',
      answer: 'Non, cela dépend du type de mesurage. Les mesurages "en service" (tension, courant, puissance) se font installation sous tension. Les essais diélectriques (isolement, rigidité) nécessitent une installation hors tension et généralement consignée. Le chargé de mesure BE-HE peut réaliser une mise en sécurité pour son propre compte mais ne peut pas consigner au sens réglementaire (attestation). Pour une consignation formelle, il faut faire appel à un chargé de consignation HC.'
    }
  ],
  
  metaDescription: 'Formation habilitation BE-HE pour mesurages et essais en haute tension. Appareils de mesure HT, essais diélectriques, interprétation résultats. Certifié Qualiopi.'
};

export const formationHEManoeuvre: Formation = {
  code: 'HE Manœuvre',
  slug: 'he-manoeuvre',
  title: 'Habilitation HE Manœuvre - Manœuvres en Haute Tension',
  category: 'haute-tension',
  color: 'yellow',
  shortDesc: 'Effectuer des manœuvres d\'exploitation et de consignation sur installations haute tension en respectant les consignes et procédures.',
  longDesc: [
    "La formation HE Manœuvre prépare le personnel d\'exploitation à réaliser des manœuvres sur installations haute tension dans le cadre de l\'exploitation normale, de la maintenance ou de la préparation de travaux. Les manœuvres consistent à modifier l\'état électrique d\'une installation : mise sous tension, mise hors tension, changement de configuration, transfert de charge.",
    "Le chargé de manœuvres HE intervient sur des équipements haute tension tels que disjoncteurs, sectionneurs, interrupteurs de postes HTA/BT ou de centrales de production. Ces opérations, bien que semblant simples, présentent des risques importants en haute tension : erreur de séquence, fausse manœuvre, manœuvre sur mauvais équipement. D\'où l\'importance d\'une formation rigoureuse.",
    "Cette formation alterne apports théoriques sur les installations HTA, les différents types d\'appareillage, les procédures de manœuvres et les risques associés, avec des travaux pratiques sur cellules HTA réelles ou simulateurs permettant de reproduire les situations d\'exploitation courantes."
  ],
  duration: {
    initial: '2 jours (14 heures)',
    recyclage: '1,5 jours (10,5 heures)'
  },
  pricing: {
    intra: '1 150€ HT',
    inter: '370€ HT',
    recyclageIntra: '900€ HT',
    recyclageInter: '310€ HT'
  },
  prerequisites: [
    'Avoir des connaissances de base en électricité',
    'Connaître l\'installation sur laquelle on va manœuvrer',
    'Savoir lire un schéma électrique unifilaire HTA',
    'Aptitude à suivre des consignes écrites',
    'Formation aux risques électriques haute tension recommandée'
  ],
  recyclageFrequency: 'Tous les 3 ans conformément à la norme NF C18-510',
  certification: 'Avis d\'habilitation HE Manœuvre délivré par l\'employeur sur la base de notre attestation de formation',
  
  objectives: [
    'Identifier les organes de manœuvre sur une installation haute tension',
    'Comprendre le rôle et le fonctionnement des disjoncteurs et sectionneurs HTA',
    'Réaliser des manœuvres d\'exploitation selon les consignes établies',
    'Respecter l\'ordre chronologique des manœuvres (séquence de sécurité)',
    'Identifier les situations anormales et réagir de manière appropriée',
    'Utiliser les équipements de protection pour les manœuvres HTA',
    'Rendre compte des manœuvres effectuées et signaler les anomalies'
  ],
  
  program: [
    {
      title: 'Tronc commun haute tension',
      items: [
        'Rappels sur les risques électriques en haute tension',
        'Effets du courant électrique sur le corps humain',
        'Cadre réglementaire et norme NF C18-510',
        'Rôles des différents acteurs (chargé d\'exploitation, de consignation, de manœuvre)',
        'Équipements de protection individuelle en HTA'
      ]
    },
    {
      title: 'Module HE Manœuvre',
      items: [
        'Définition des manœuvres d\'exploitation',
        'Différence entre manœuvre et travaux',
        'Responsabilités du chargé de manœuvres',
        'Limites de l\'habilitation HE Manœuvre',
        'Instructions et consignes de manœuvre',
        'Documents d\'exploitation : schémas, registres'
      ]
    },
    {
      title: 'Appareillage haute tension',
      items: [
        'Disjoncteurs HTA : rôle, types, commandes',
        'Sectionneurs et interrupteurs-sectionneurs',
        'Contacteurs et interrupteurs de charge',
        'Différence entre disjoncteur et sectionneur',
        'Identification des organes sur cellules HTA',
        'Signalisation des états : ouvert/fermé, consigné',
        'Commandes locales et télécommandes'
      ]
    },
    {
      title: 'Types de manœuvres',
      items: [
        'Manœuvres d\'exploitation courante (mise/remise en service)',
        'Manœuvres de transfert de charge (permutation de sources)',
        'Manœuvres de consignation (préparation de travaux)',
        'Manœuvres d\'urgence (coupure d\'urgence)',
        'Manœuvres de réalimentation après incident',
        'Manœuvres de mise à la terre',
        'Ordre chronologique impératif des manœuvres'
      ]
    },
    {
      title: 'Procédures de manœuvres',
      items: [
        'Réception et analyse de la consigne de manœuvre',
        'Vérification de l\'identité des organes à manœuvrer',
        'Respect strict de la chronologie des opérations',
        'Règle d\'or : JAMAIS de sectionneur sous charge',
        'Utilisation d\'EPI : gants, écran facial, perche',
        'Vérification visuelle après manœuvre',
        'Compte-rendu de manœuvre et mise à jour des documents'
      ]
    },
    {
      title: 'Séquences de manœuvres types',
      items: [
        'Mise hors tension d\'un départ HTA : disjoncteur PUIS sectionneur',
        'Mise sous tension d\'un départ : sectionneur PUIS disjoncteur',
        'Permutation de sources (deux transformateurs)',
        'Préparation pour consignation (séparation)',
        'Remise en service après travaux',
        'Manœuvre de mise à la terre',
        'Erreurs courantes et conséquences'
      ]
    },
    {
      title: 'Situations anormales et d\'urgence',
      items: [
        'Détection d\'une anomalie avant manœuvre',
        'Refus d\'exécuter une manœuvre dangereuse',
        'Disjoncteur qui ne se ferme pas ou ne s\'ouvre pas',
        'Présence de tension inattendue',
        'Arc électrique lors d\'une manœuvre',
        'Coupure d\'urgence en cas de danger',
        'Alerte et information de la hiérarchie'
      ]
    },
    {
      title: 'Travaux pratiques et évaluation',
      items: [
        'Reconnaissance de cellules HTA et identification des organes',
        'Lecture de schémas unifilaires HTA',
        'Réalisation de manœuvres sur cellules HTA (simulateur ou réelles)',
        'Exercices de séquencement de manœuvres',
        'Mise en situation d\'exploitation avec consignes écrites',
        'Gestion de situations anormales',
        'Évaluation théorique (QCM)',
        'Évaluation pratique (manœuvres complètes sur installation)'
      ]
    }
  ],
  
  publicConcerne: {
    description: 'Personnel d\'exploitation amené à effectuer des manœuvres sur installations haute tension dans le cadre de l\'exploitation courante ou de la préparation de travaux.',
    metiers: [
      'Agents d\'exploitation postes HTA/BT',
      'Conducteurs d\'installations électriques industrielles',
      'Opérateurs de production avec HTA',
      'Agents de maîtrise exploitation électrique',
      'Responsables techniques bâtiments tertiaires (HTA)',
      'Agents d\'exploitation ENEDIS/RTE',
      'Techniciens de conduite centrales électriques',
      'Agents de surveillance installations HT',
      'Responsables d\'exploitation sites industriels',
      'Chefs de quart en production électrique'
    ]
  },
  
  methodologie: [
    'Formation théorique sur appareillage et procédures HTA',
    'Présentation de cellules et d\'organes de manœuvre réels',
    'Analyse de schémas unifilaires d\'installations types',
    'Démonstrations commentées de manœuvres',
    'Travaux pratiques sur cellules HTA (réelles ou simulateur)',
    'Exercices de séquencement et de chronologie',
    'Études de cas d\'incidents liés à des fausses manœuvres',
    'Livret stagiaire avec procédures types de manœuvres',
    'Évaluations théorique et pratique'
  ],
  
  stats: {
    satisfaction: 97.3,
    reussite: 99.4,
    formes: 410
  },
  
  faq: [
    {
      question: 'Quelle est la différence entre HE Manœuvre et HC (chargé de consignation) ?',
      answer: 'HE Manœuvre effectue des manœuvres d\'exploitation (mise sous/hors tension selon consignes) mais ne peut pas consigner au sens réglementaire. HC (chargé de consignation HT) réalise les 4 étapes de consignation (séparation, condamnation, VAT, attestation) et délivre une attestation permettant les travaux. HC a donc des responsabilités et compétences supérieures. Un HC peut faire des manœuvres, mais un HE Manœuvre ne peut pas consigner.'
    },
    {
      question: 'Pourquoi ne doit-on JAMAIS manœuvrer un sectionneur sous charge ?',
      answer: 'Un sectionneur n\'est PAS conçu pour couper un courant. Si on ouvre un sectionneur sous charge, un arc électrique se forme entre les contacts et ne s\'éteint pas (car pas de système d\'extinction d\'arc comme dans un disjoncteur). Cet arc peut provoquer une explosion, détruire l\'équipement, blesser gravement l\'opérateur. Règle absolue : toujours couper avec le disjoncteur AVANT d\'ouvrir le sectionneur. C\'est la cause d\'accidents graves en HTA.'
    },
    {
      question: 'Peut-on manœuvrer à distance ou faut-il être sur place ?',
      answer: 'Les deux sont possibles selon l\'installation. Certains postes HTA disposent de télécommandes permettant de manœuvrer depuis un PC de supervision (SCADA). D\'autres nécessitent une manœuvre locale sur place. Dans tous les cas, avant toute manœuvre, il faut vérifier l\'identité de l\'organe à manœuvrer et s\'assurer qu\'il n\'y a personne au voisinage. La manœuvre locale nécessite des EPI (gants, écran facial).'
    },
    {
      question: 'Que faire si un disjoncteur refuse de se fermer ?',
      answer: 'JAMAIS insister ou forcer. Un disjoncteur qui refuse de se fermer indique généralement un problème (défaut en aval, protection active, verrouillage, commande défaillante). Il faut arrêter la manœuvre, vérifier les voyants et alarmes, consulter les protections, et informer immédiatement le responsable d\'exploitation ou le service maintenance. Ne JAMAIS court-circuiter des protections ou verrouillages. C\'est un mécanisme de sécurité.'
    },
    {
      question: 'Doit-on porter des EPI pour toutes les manœuvres HTA ?',
      answer: 'Oui, pour toute manœuvre locale sur appareillage HTA, le port d\'EPI est obligatoire : gants isolants HTA (classe 2 minimum), écran facial anti-arc, casque isolant. Même si l\'installation est "normalement" hors tension, il peut y avoir réalimentation inattendue, erreur d\'identification, présence de tension résiduelle. Les EPI protègent contre ces risques. Pour les manœuvres par télécommande depuis un local éloigné, les EPI ne sont pas nécessaires.'
    }
  ],
  
  metaDescription: 'Formation habilitation HE Manœuvre pour manœuvres d\'exploitation en haute tension HTA. Disjoncteurs, sectionneurs, procédures, consignes. Certifié Qualiopi.'
};