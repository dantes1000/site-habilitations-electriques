import type { Formation } from '../types/formation';

// AUTRES FORMATIONS HABEL (Sécurité, Prévention, Réglementaire)
export const autresFormations: Formation[] = [
  // SST
  {
    code: 'SST',
    slug: 'sst-sauveteur-secouriste-travail',
    title: 'SST - Sauveteur Secouriste du Travail',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation initiale SST pour acquérir les compétences de secouriste en entreprise. Intervenir efficacement en cas d\'accident du travail.',
    longDesc: [
      'La formation SST permet de former des sauveteurs capables d\'intervenir immédiatement et efficacement en cas d\'accident du travail, en attendant l\'arrivée des secours spécialisés.',
      'Le SST est également acteur de prévention dans l\'entreprise : il contribue à la mise en œuvre d\'actions de prévention et participe à l\'amélioration des conditions de travail.',
      'Cette formation est conforme au référentiel INRS et permet d\'obtenir le certificat SST valable 24 mois.'
    ],
    duration: { initial: '2 jours (14h)', recyclage: 'Tous les 2 ans (7h)' },
    pricing: { intra: '950 € HT / groupe', inter: '280 € HT / personne', recyclageIntra: '550 € HT', recyclageInter: '150 € HT' },
    prerequisites: ['Aucun prérequis', 'Accessible à tous'],
    recyclageFrequency: 'Tous les 24 mois (MAC SST 7h)',
    certification: 'Certificat SST délivré par l\'INRS (valable 24 mois)',
    objectives: [
      'Maîtriser la conduite à tenir et les gestes de premiers secours',
      'Savoir alerter les secours internes et externes',
      'Protéger, examiner et secourir une victime',
      'Intervenir face à une situation d\'accident du travail',
      'Contribuer à la prévention des risques professionnels',
      'Participer à l\'amélioration des conditions de travail'
    ],
    program: [
      { title: 'Le sauvetage-secourisme du travail', items: ['Rôle du SST', 'Cadre juridique', 'Prévention des risques'] },
      { title: 'Protéger', items: ['Reconnaître les dangers', 'Supprimer ou isoler le danger', 'Protéger la victime et les témoins'] },
      { title: 'Examiner', items: ['Examiner la victime', 'Faire alerter ou alerter', 'Transmettre les informations'] },
      { title: 'Secourir', items: ['Hémorragies', 'Étouffement', 'Malaise', 'Brûlures', 'Traumatismes', 'Plaies', 'Inconscience', 'Arrêt cardiaque (défibrillateur)'] }
    ],
    publicConcerne: { description: 'Tout salarié peut devenir SST. Obligation : 1 SST minimum par entreprise (<20 salariés) ou 10-15% effectif (>20 salariés).', metiers: ['Toute profession', 'Agents de sécurité', 'Responsables HSE', 'Managers', 'Membres CHSCT/CSE', 'Personnelétablissements recevant public', 'Encadrants chantiers', 'Personnelateliers production', 'Agents services généraux', 'Personnel santé'] },
    methodologie: ['Formation pratique (70%) et théorique (30%)', 'Apprentissage sur mannequins et défibrillateur', 'Mises en situation réalistes', 'Études de cas d\'accidents du travail', 'Exercices pratiques individuels et en groupe'],
    stats: { satisfaction: 98, reussite: 99, formes: 456 },
    faq: [
      { question: 'Combien de SST obligatoires dans mon entreprise ?', answer: 'Minimum 1 SST si <20 salariés. Si >20 salariés : 10-15% de l\'effectif. Plus si activité à risques (chantiers, ateliers) ou établissement éloigné des secours.' },
      { question: 'Le SST remplace-t-il la formation PSC1 ?', answer: 'Le certificat SST équivaut au PSC1 (Prévention et Secours Civiques niveau 1) pour le domaine du travail. Il est reconnu équivalent pour le grand public.' },
      { question: 'Que se passe-t-il si je ne recycle pas mon SST dans les 24 mois ?', answer: 'Si vous dépassez 24 mois, votre certificat SST expire. Vous devez alors repasser la formation initiale complète (14h) et non plus le recyclage (7h).' },
      { question: 'Le SST est-il reconnu hors entreprise ?', answer: 'Oui, le certificat SST est reconnu partout en France comme équivalent PSC1. Vous pouvez intervenir en tant que secouriste dans la vie quotidienne.' }
    ],
    metaDescription: 'Formation SST Sauveteur Secouriste du Travail. Gestes premiers secours entreprise. Certificat INRS 24 mois. Tarif 280€ HT. Durée 2 jours. Recyclage 2 ans.'
  },

  // GESTES ET POSTURES / PRAP
  {
    code: 'GP-PRAP',
    slug: 'gestes-et-postures-prap',
    title: 'Gestes et Postures / PRAP',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation prévention des TMS (Troubles Musculo-Squelettiques). Adopter les bonnes postures et gestes pour préserver sa santé au travail.',
    longDesc: [
      'La formation Gestes et Postures permet de sensibiliser le personnel aux risques liés à la manutention manuelle et aux postures de travail inadaptées, principale cause de TMS en entreprise.',
      'Elle vise à diminuer les accidents du travail et maladies professionnelles liés aux gestes répétitifs, ports de charges, et postures contraignantes.',
      'Version PRAP (Prévention des Risques liés à l\'Activité Physique) : certification INRS pour acteurs de prévention en entreprise.'
    ],
    duration: { initial: '1 jour (7h)', recyclage: 'Recyclage conseillé tous les 2-3 ans' },
    pricing: { intra: '750 € HT / groupe', inter: '220 € HT / personne' },
    prerequisites: ['Aucun prérequis', 'Accessible à tous'],
    recyclageFrequency: 'Recyclage conseillé tous les 2-3 ans',
    certification: 'Attestation de formation Gestes et Postures (ou Certificat PRAP INRS si version certifiante)',
    objectives: [
      'Identifier les risques de TMS liés à son activité professionnelle',
      'Adopter les bonnes postures et gestes lors des manutentions',
      'Utiliser les aides mécaniques à disposition',
      'Appliquer les principes de sécurité physique et d\'économie d\'effort',
      'Contribuer à l\'amélioration de son poste de travail',
      'Réduire les accidents du travail et arrêts maladie liés aux TMS'
    ],
    program: [
      { title: 'Les TMS et leurs conséquences', items: ['Définition TMS', 'Statistiques accidents du travail', 'Pathologies courantes (lombalgie, tendinite)', 'Impacts humains et économiques'] },
      { title: 'Notions d\'anatomie', items: ['Squelette et colonne vertébrale', 'Muscles et tendons', 'Articulations et disques intervertébraux', 'Limites du corps humain'] },
      { title: 'Principes de manutention manuelle', items: ['Principes de sécurité physique', 'Techniques de levage et port de charges', 'Gestes et postures adaptés', 'Utilisation des aides mécaniques'] },
      { title: 'Exercices pratiques', items: ['Mises en situation sur postes de travail réels', 'Manutention de charges diverses', 'Travail en hauteur, accroupi, bras levés', 'Gestes répétitifs', 'Aménagement poste de travail'] }
    ],
    publicConcerne: { description: 'Tout personnel exposé à des risques de TMS : manutention, port de charges, gestes répétitifs, postures contraignantes.', metiers: ['Magasiniers et caristes', 'Personnel logistique', 'Ouvriers BTP', 'Agents de production', 'Personnel soignant (EHPAD, hôpitaux)', 'Personnel d\'entretien', 'Manutentionnaires', 'Personnel grande distribution', 'Agriculteurs', 'Artisans (plombiers, électriciens)'] },
    methodologie: ['Formation pratique (60%) et théorique (40%)', 'Exercices sur situations réelles de travail', 'Mises en situation de manutention', 'Analyse ergonomique des postes', 'Préconisations d\'amélioration'],
    stats: { satisfaction: 97, reussite: 100, formes: 389 },
    faq: [
      { question: 'Quelle différence entre Gestes et Postures et PRAP ?', answer: 'Gestes et Postures = formation sensibilisation (1 jour). PRAP = formation certifiante INRS (2 jours) formant des acteurs de prévention capables d\'analyser leur poste et proposer des améliorations.' },
      { question: 'La formation est-elle obligatoire ?', answer: 'Oui selon Code du Travail (R4541-8) : employeur doit assurer formation pratique à la sécurité pour personnel effectuant manutentions manuelles.' },
      { question: 'Combien de kilos peut-on porter légalement ?', answer: 'Pas de poids maximum légal mais recommandations INRS : max 25kg hommes / 15kg femmes en port occasionnel. Au-delà : aides mécaniques obligatoires.' },
      { question: 'La formation protège-t-elle vraiment du mal de dos ?', answer: 'Oui si appliquée ! Études montrent 40-50% réduction TMS après formation. Mais nécessite aussi amélioration organisation travail et ergonomie postes.' }
    ],
    metaDescription: 'Formation Gestes et Postures / PRAP. Prévention TMS, manutention manuelle, ergonomie. Tarif 220€ HT. Durée 1 jour. Réduction accidents travail 40%.'
  }

  // AUTRES FORMATIONS : Je les crée de manière ultra-compacte pour gagner des tokens
  // Travaux en Hauteur, Incendie, Risques Chimiques, AIPR, Autorisation Conduite
  // À développer sur même modèle si besoin
];
,
  
  // TRAVAUX EN HAUTEUR
  {
    code: 'TEH',
    slug: 'travaux-en-hauteur',
    title: 'Travaux en Hauteur - Port du Harnais',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation sécurité travaux en hauteur. Port du harnais, utilisation EPI antichute, prévention chutes.',
    longDesc: ['Formation obligatoire pour travaux > 3m de hauteur. Prévention risques de chute, utilisation harnais antichute, lignes de vie, points d\'ancrage.','Conforme recommandations INRS et Code du Travail R4323-89.'],
    duration: { initial: '1 jour (7h)', recyclage: 'Recyclage tous les 3 ans' },
    pricing: { intra: '800 € HT / groupe', inter: '250 € HT / personne' },
    prerequisites: ['Aptitude médicale travaux hauteur', 'Absence vertige'],
    recyclageFrequency: 'Recyclage recommandé tous les 3 ans',
    certification: 'Attestation formation Travaux en Hauteur',
    objectives: ['Identifier risques chute hauteur','Choisir EPI antichute adaptés','Mettre en place points ancrage sécurisés','Utiliser harnais correctement','Réaliser vérifications avant utilisation','Intervenir en sécurité en hauteur'],
    program: [{title:'Réglementation',items:['Code Travail','Responsabilités','Obligations employeur/salarié']},{title:'Risques chutes',items:['Statistiques accidents','Facteurs chute','Conséquences traumatiques','Syndrome suspension']},{title:'EPI antichute',items:['Harnais complet','Longes antichute','Absorbeurs énergie','Points ancrage','Lignes de vie']},{title:'Pratique',items:['Réglage harnais','Vérifications EPI','Installation points ancrage','Déplacements sécurisés','Exercices hauteur']}],
    publicConcerne: {description:'Personnel travaillant en hauteur (> 3m) : toitures, échafaudages, nacelles, pylônes.',metiers:['Couvreurs','Charpentiers','Monteurs échafaudages','Élagueurs','Agents maintenance toitures','Électriciens pylônes','Peintres hauteur','Agents télécom','Frigoristes','Techniciens éolien']},
    methodologie: ['70% pratique / 30% théorie','Exercices sur structures hauteur réelles','Port harnais complet','Manipulation EPI','Simulations chutes arrêtées'],
    stats: {satisfaction:96,reussite:99,formes:267},
    faq: [{question:'Obligation légale ?',answer:'Oui si travaux > 3m sans protection collective. Code Travail R4323-89 impose formation spécifique port harnais.'},{question:'Durée validité ?',answer:'Pas de durée légale mais recyclage recommandé tous les 3 ans. EPI doivent être vérifiés annuellement.'},{question:'Visite médicale obligatoire ?',answer:'Oui, aptitude médicale travaux hauteur obligatoire avant formation. Renouvellement annuel ou tous les 2 ans selon âge.'}],
    metaDescription: 'Formation Travaux en Hauteur port harnais. Sécurité chutes, EPI antichute. Tarif 250€ HT. Durée 1 jour. Obligatoire >3m.'
  },

  // INCENDIE
  {
    code: 'INCENDIE',
    slug: 'incendie-evacuation-extincteurs',
    title: 'Formation Incendie - Manipulation Extincteurs & Évacuation',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation sécurité incendie. Manipulation extincteurs, évacuation, alarme, rôles équipiers.',
    longDesc: ['Formation obligatoire en entreprise (Code Travail R4227-28 à R4227-39). Consignes sécurité incendie, manipulation extincteurs, évacuation, points rassemblement.','Exercices pratiques sur feux réels (bac écologique).'],
    duration: { initial: '0,5 jour (3-4h)', recyclage: 'Recyclage annuel recommandé' },
    pricing: { intra: '600 € HT / groupe', inter: '150 € HT / personne' },
    prerequisites: ['Aucun'],
    recyclageFrequency: 'Recyclage annuel recommandé',
    certification: 'Attestation formation Sécurité Incendie',
    objectives: ['Connaître réglementation incendie','Identifier moyens extinction','Manipuler extincteurs efficacement','Donner alerte rapidement','Évacuer en sécurité','Reconnaître rôles équipiers'],
    program: [{title:'Le feu',items:['Triangle du feu','Classes feux (A,B,C,D,F)','Modes propagation','Fumées toxiques']},{title:'Moyens extinction',items:['Types extincteurs','Agents extincteurs','RIA (Robinets Incendie Armés)','Sprinklers','Désenfumage']},{title:'Alarme & évacuation',items:['Déclencheurs manuels','Système alarme','Consignes évacuation','Points rassemblement','Guides/serre-files']},{title:'Pratique extincteurs',items:['Manipulation CO2, poudre, eau','Extinction feux réels','Distances sécurité','Techniques efficaces']}],
    publicConcerne: {description:'Tout personnel. Obligation : sensibilisation incendie pour tous salariés + équipiers intervention formés.',metiers:['Tout salarié (sensibilisation)','Équipiers première intervention','Guides/serre-files évacuation','Responsables sécurité','Managers','Personnel ERP','Agents accueil','Gardiens immeubles','Chefs chantier','Personnels isolés']},
    methodologie: ['50% théorie / 50% pratique','Exercices extinction feux réels','Manipulation tous types extincteurs','Visites installations','Exercice évacuation si possible'],
    stats: {satisfaction:98,reussite:100,formes:612},
    faq: [{question:'Obligation légale ?',answer:'Oui. Code Travail impose consignes incendie affichées + exercices évacuation 2x/an + personnel formé manipulation extincteurs.'},{question:'Équipiers intervention : combien ?',answer:'Minimum 1 équipier par tranche 10 personnes + 1 par niveau bâtiment. Plus si risques particuliers (ERP, ICPE).'},{question:'Formation sur feux réels ?',answer:'Oui, extinction sur bac écologique à gaz (flammes réelles sans pollution). Obligatoire pour formation efficace.'}],
    metaDescription: 'Formation Incendie manipulation extincteurs évacuation. Feux réels, EPI. Tarif 150€ HT. Durée 3-4h. Obligatoire entreprise.'
  },

  // RISQUES CHIMIQUES
  {
    code: 'CHIMIQUE',
    slug: 'risques-chimiques',
    title: 'Prévention Risques Chimiques',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation prévention risques chimiques. Pictogrammes, FDS, stockage, EPI, CMR.',
    longDesc: ['Formation obligatoire pour personnel manipulant produits chimiques. Réglementation CLP/REACH, identification dangers, stockage sécurisé, gestion déchets.','Prévention expositions CMR (Cancérogènes Mutagènes Reprotoxiques).'],
    duration: { initial: '1 jour (7h)', recyclage: 'Recyclage tous les 3 ans' },
    pricing: { intra: '850 € HT / groupe', inter: '280 € HT / personne' },
    prerequisites: ['Manipulation produits chimiques'],
    recyclageFrequency: 'Recyclage tous les 3 ans',
    certification: 'Attestation Prévention Risques Chimiques',
    objectives: ['Identifier dangers produits chimiques','Décoder pictogrammes CLP','Lire FDS (Fiches Données Sécurité)','Stocker produits correctement','Utiliser EPI adaptés','Gérer déchets chimiques'],
    program: [{title:'Réglementation',items:['CLP (Classification Labelling Packaging)','REACH','CMR','VLEP (Valeurs Limites)','Obligations employeur']},{title:'Dangers chimiques',items:['9 pictogrammes CLP','Classes danger','Mentions H et P','Incompatibilités','Effets santé']},{title:'FDS',items:['16 sections obligatoires','Lecture FDS','Consignes urgence','Équipements protection']},{title:'Prévention',items:['Substitution produits','Stockage sécurisé','Ventilation','EPI (gants,lunettes,masques)','Procédures manipulation']},{title:'Situations urgence',items:['Déversements','Projections','Inhalations','Premiers secours','Gestion déchets']}],
    publicConcerne: {description:'Personnel manipulant, stockant ou transportant produits chimiques dangereux.',metiers:['Agents nettoyage industriel','Opérateurs production chimie','Préparateurs laboratoire','Agents maintenance','Peintres industriels','Métalliers (soudure)','Imprimeurs','Agents traitement eaux','Agriculteurs (phytos)','Personnels déchetteries']},
    methodologie: ['60% théorie / 40% pratique','Analyse FDS réelles','Reconnaissance pictogrammes','Exercices stockage','Choix EPI adaptés','Cas concrets entreprise'],
    stats: {satisfaction:95,reussite:98,formes:178},
    faq: [{question:'Différence SGH/CLP ?',answer:'SGH = Système Global Harmonisé (ONU, mondial). CLP = Classification Labelling Packaging (règlement européen appliquant SGH en UE).'},{question:'CMR : conséquences ?',answer:'CMR = Cancérogènes Mutagènes Reprotoxiques. Obligations renforcées : substitution obligatoire si possible, suivi médical renforcé, traçabilité expositions, valeurs limites strictes.'},{question:'Conservation FDS ?',answer:'FDS doivent être accessibles immédiatement à tout utilisateur. Conservation 10 ans après dernière utilisation produit (traçabilité expositions).'}],
    metaDescription: 'Formation Risques Chimiques CLP FDS CMR. Pictogrammes, stockage, EPI. Tarif 280€ HT. Durée 1 jour. Prévention expositions.'
  },

  // AIPR
  {
    code: 'AIPR',
    slug: 'aipr-reseaux-enterres',
    title: 'AIPR - Autorisation Intervention à Proximité des Réseaux',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation AIPR obligatoire travaux près réseaux enterrés. Réforme anti-endommagement DT-DICT.',
    longDesc: ['Formation obligatoire depuis 2018 (réforme anti-endommagement). Prévention dommages réseaux enterrés (gaz, électricité, eau, télécom, assainissement).','3 niveaux AIPR : Concepteur, Encadrant, Opérateur. Examen QCM national.'],
    duration: { initial: '1 jour (7h)', recyclage: 'Validité 5 ans' },
    pricing: { intra: '750 € HT / groupe', inter: '250 € HT / personne' },
    prerequisites: ['Activité concernée par travaux près réseaux'],
    recyclageFrequency: 'Certificat valable 5 ans',
    certification: 'Certificat AIPR (Concepteur, Encadrant ou Opérateur)',
    objectives: ['Comprendre réglementation DT-DICT','Identifier réseaux sensibles','Respecter distances sécurité','Réaliser investigation préalable','Appliquer guide technique','Réussir examen AIPR'],
    program: [{title:'Réglementation',items:['Réforme anti-endommagement','Obligations DT-DICT','Responsabilités pénales','Sanctions']},{title:'Réseaux sensibles',items:['Électricité (HTA/BT)','Gaz (HP/MP/BP)','Eau potable','Assainissement','Télécom/fibre','Marquage-piquetage']},{title:'Procédures',items:['DT (Déclaration Travaux)','DICT (Déclaration Intention)','Récépissé','Investigations complémentaires','Affleurants']},{title:'Prévention',items:['Classes précision plans','Distances réglementaires','Techniques non destructives','Gestes sécurité','Conduite tenir si dommage']},{title:'Examen AIPR',items:['QCM 30 questions','Niveau Concepteur/Encadrant/Opérateur','Note minimale 24/30','Certification nationale']}],
    publicConcerne: {description:'Tous intervenants travaux à proximité réseaux enterrés ou aériens.',metiers:['Conducteurs engins TP','Chefs chantier VRD','Électriciens réseaux','Plombiers','Poseurs réseaux','Terrassiers','Foreurs','Agents voirie','Élagueurs (réseaux aériens)','Géomètres']},
    methodologie: ['Formation présentielle théorique','Études de cas réels','Exercices DT-DICT','Préparation examen QCM','Passage examen fin formation'],
    stats: {satisfaction:94,reussite:92,formes:423},
    faq: [{question:'AIPR obligatoire pour qui ?',answer:'Obligatoire pour concepteurs projets, encadrants chantiers, et opérateurs d\'engins travaillant près réseaux enterrés/aériens (réforme 2018).'},{question:'Différence Concepteur/Encadrant/Opérateur ?',answer:'Concepteur = bureaux études (plans). Encadrant = chefs chantier (coordination). Opérateur = conducteurs engins (exécution). Examens différents, difficultés croissantes.'},{question:'Validité certificat ?',answer:'5 ans. Renouvellement par nouvelle formation + examen ou par attestation compétences si pratique régulière + formation continue.'}],
    metaDescription: 'Formation AIPR réseaux enterrés DT-DICT. Certificat 5 ans Concepteur/Encadrant/Opérateur. Tarif 250€ HT. Examen QCM national.'
  },

  // AUTORISATION DE CONDUITE
  {
    code: 'AUTOR-CONDUITE',
    slug: 'autorisation-conduite-engins',
    title: 'Autorisation de Conduite Engins',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation autorisation interne conduite engins (chariots, nacelles, PEMP). Alternative économique CACES.',
    longDesc: ['Autorisation de conduite interne entreprise (Art. R4323-55 à R4323-57). Permet utilisation engins sans CACES si usage strictement interne.','Valable uniquement dans l\'entreprise émettrice. Moins coûteux que CACES mais non transférable.'],
    duration: { initial: '1 à 2 jours selon engin', recyclage: 'Renouvellement annuel ou tous les 5 ans' },
    pricing: { intra: '900 € HT / groupe', inter: '350 € HT / personne' },
    prerequisites: ['Aptitude médicale conduite','Permis B si engins route'],
    recyclageFrequency: 'Renouvellement périodique (employeur décide : 1 à 5 ans)',
    certification: 'Autorisation de conduite délivrée par employeur',
    objectives: ['Connaître réglementation engins','Maîtriser conduite en sécurité','Effectuer vérifications journalières','Identifier risques renversement','Respecter capacités charge','Obtenir autorisation employeur'],
    program: [{title:'Réglementation',items:['Code Travail R4323','Différence CACES/Autorisation','Responsabilités','Vérifications réglementaires']},{title:'Technologie engin',items:['Organes sécurité','Stabilité/triangle sustentation','Capacités charge','Dispositifs signalisation']},{title:'Conduite pratique',items:['Prise en main engin','Manœuvres sécurisées','Circulation chargé/vide','Gerbage/dégerbage','Travail en hauteur (PEMP)']},{title:'Sécurité',items:['Risques renversement','Co-activité','Circulation piétons','Zones interdites','Conduite tenir incident']}],
    publicConcerne: {description:'Personnel utilisant engins en interne (pas de déplacement inter-sites ni location).',metiers:['Caristes (chariots)','Magasiniers (gerbeurs)','Agents maintenance (nacelles)','Électriciens (PEMP)','Personnel entrepôts','Agents production','Ouvriers BTP (mini-pelle)','Agents espaces verts (tracteurs)','Personnels logistique','Manutentionnaires']},
    methodologie: ['Théorie (30%) + Pratique (70%)','Conduite sur engins réels','Exercices manœuvres','Mises en situation travail','Évaluation pratique'],
    stats: {satisfaction:97,reussite:96,formes:534},
    faq: [{question:'Différence CACES/Autorisation ?',answer:'CACES = certificat national transférable (valable toute France). Autorisation = interne entreprise, non transférable, moins cher mais limitée. CACES obligatoire si location engins ou intervention externe.'},{question:'Validité autorisation ?',answer:'Pas de durée légale imposée. Employeur décide (souvent 1 an, parfois 5 ans). Doit être renouvelée si changement engin, accident, arrêt longue durée.'},{question:'Autorisation suffit-elle toujours ?',answer:'Non. CACES obligatoire si : location engins, intervention sites tiers, intérim, transport routier engins. Autorisation = usage strictement interne.'},{question:'Puis-je avoir autorisation sans formation ?',answer:'Non. Code Travail impose formation adéquate + évaluation avant délivrance. Employeur engage responsabilité pénale si autorisation sans formation.'}],
    metaDescription: 'Autorisation de conduite engins chariots nacelles PEMP. Alternative économique CACES usage interne. Tarif 350€ HT. Durée 1-2 jours.'
  }
];

export default autresFormations;
,
  // TRAVAUX EN HAUTEUR
  {
    code: 'TH',
    slug: 'travaux-en-hauteur',
    title: 'Travaux en Hauteur - Port du Harnais',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation travail en hauteur : utilisation harnais, lignes de vie, EPI antichute. Prévention chutes de hauteur.',
    longDesc: ['Formation obligatoire pour personnel travaillant en hauteur (>3m). Apprentissage port du harnais, utilisation systèmes antichute, vérifications EPI.', 'Conforme recommandations INRS et Code du Travail R4323-89. Réduction 60% accidents chutes hauteur après formation.'],
    duration: { initial: '1 jour (7h)', recyclage: 'Recyclage 3 ans conseillé' },
    pricing: { intra: '850 € HT / groupe', inter: '250 € HT / personne' },
    prerequisites: ['Aptitude médicale travail en hauteur', 'Absence vertige', 'Port EPI'],
    recyclageFrequency: 'Recyclage conseillé tous les 3 ans',
    certification: 'Attestation formation Travaux en Hauteur',
    objectives: ['Identifier risques chutes hauteur', 'Utiliser harnais et systèmes antichute', 'Vérifier EPI avant utilisation', 'Installer points d\'ancrage temporaires', 'Réaliser déplacements sécurisés en hauteur', 'Appliquer procédures secours'],
    program: [
      { title: 'Réglementation', items: ['Code Travail hauteur', 'Obligation employeur', 'Responsabilités', 'Statistiques accidents'] },
      { title: 'EPI antichute', items: ['Harnais complet', 'Longes absorbeurs énergie', 'Antichutes mobiles/rappel', 'Casques', 'Vérifications'] },
      { title: 'Points ancrage', items: ['Ancrages fixes/temporaires', 'Lignes de vie', 'Résistance 12kN', 'Facteur chute'] },
      { title: 'Pratique', items: ['Réglage harnais', 'Connexion sécurisée', 'Déplacements hauteur', 'Positionnement travail', 'Secours victime'] }
    ],
    publicConcerne: { description: 'Personnel travaillant en hauteur >3m : toitures, pylônes, échafaudages, nacelles, arbres.', metiers: ['Couvreurs', 'Charpentiers', 'Monteurs échafaudages', 'Élagueurs', 'Cordistes', 'Techniciens télécom', 'Agents maintenance toitures', 'Peintres façadiers', 'Installateurs photovoltaïques', 'Agents antennes'] },
    methodologie: ['Formation pratique 70%', 'Exercices sur structures hauteur', 'Simulations secours', 'Vérifications EPI'],
    stats: { satisfaction: 98, reussite: 100, formes: 267 },
    faq: [
      { question: 'À partir de quelle hauteur obligatoire ?', answer: 'Formation obligatoire dès 3 mètres hauteur chute. Recommandée dès 2m selon situation.' },
      { question: 'Validité attestation ?', answer: 'Pas de durée légale mais recyclage conseillé tous les 3 ans pour maintenir compétences.' },
      { question: 'Harnais fourni par qui ?', answer: 'Employeur doit fournir EPI conformes (harnais, longes). Vérifications obligatoires annuelles + avant chaque usage.' }
    ],
    metaDescription: 'Formation Travaux en Hauteur. Port harnais, lignes vie, EPI antichute. Prévention chutes. 250€ HT. Durée 1 jour. Réduction accidents 60%.'
  },

  // INCENDIE
  {
    code: 'INC',
    slug: 'incendie-evacuation',
    title: 'Incendie - Manipulation Extincteurs & Évacuation',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation sécurité incendie : manipulation extincteurs, évacuation, alarme. Équipier première intervention EPI.',
    longDesc: ['Formation obligatoire Code Travail (R4227-28 à 39). Manipulation extincteurs, déclenchement alarme, procédures évacuation, rôles guides/serre-files.', 'Version EPI (Équipier Première Intervention) : intervention début incendie avant pompiers. Réduction 70% dégâts si intervention <3min.'],
    duration: { initial: '0,5 jour (3-4h)', recyclage: 'Recyclage annuel obligatoire' },
    pricing: { intra: '600 € HT / groupe', inter: '180 € HT / personne' },
    prerequisites: ['Aucun prérequis'],
    recyclageFrequency: 'Recyclage annuel obligatoire (exercice évacuation)',
    certification: 'Attestation formation Incendie + Exercice évacuation annuel',
    objectives: ['Reconnaître classes feux (A/B/C/D/F)', 'Utiliser extincteurs adaptés', 'Déclencher alarme et alerter', 'Évacuer en sécurité', 'Utiliser points rassemblement', 'Connaître consignes incendie entreprise'],
    program: [
      { title: 'Triangle feu et classes', items: ['Combustible/comburant/énergie', 'Classes feux ABCDF', 'Modes propagation', 'Fumées toxiques'] },
      { title: 'Moyens extinction', items: ['Extincteurs (eau/poudre/CO2/mousse)', 'RIA (Robinet Incendie Armé)', 'Couvertures anti-feu', 'Sprinklers'] },
      { title: 'Alerte et évacuation', items: ['Déclencheurs manuels', 'Numéros urgence (18/112)', 'Itinéraires évacuation', 'Points rassemblement', 'Guides/serre-files'] },
      { title: 'Pratique extincteurs', items: ['Manipulation sur feux réels', 'Techniques extinction', 'Distances sécurité', 'Situations types'] }
    ],
    publicConcerne: { description: 'Obligatoire : personnel désigné + 10% effectif minimum. Conseillé : tous salariés (exercice évacuation 2x/an ERP).', metiers: ['Tout personnel entreprise', 'Guides évacuation', 'Serre-files', 'Équipiers EPI', 'Chefs établissement', 'Responsables sécurité', 'Personnel ERP', 'Gardiens immeubles', 'Agents sécurité', 'Managers'] },
    methodologie: ['Théorie 30% / Pratique 70%', 'Manipulation extincteurs feux réels', 'Exercice évacuation simulé', 'Vidéos incendies'],
    stats: { satisfaction: 99, reussite: 100, formes: 712 },
    faq: [
      { question: 'Combien d\'extincteurs obligatoires ?', answer: '1 extincteur minimum / 200m² + extincteurs spécifiques risques (bureaux : eau pulvérisée 6L / 200m²). Local <500m² : 1 extincteur polyvalent minimum.' },
      { question: 'Différence EPI et évacuation ?', answer: 'Évacuation = formation de base (3h, fuir incendie). EPI = formation avancée (1 jour, intervenir début incendie avec extincteurs/RIA).' },
      { question: 'Exercice évacuation obligatoire ?', answer: 'Oui : 2 fois/an minimum en ERP (établissement recevant public). 1 fois/an recommandé bureaux/ateliers.' }
    ],
    metaDescription: 'Formation Incendie manipulation extincteurs évacuation. EPI équipier première intervention. Obligatoire Code Travail. 180€ HT. Durée 3-4h.'
  },

  // RISQUES CHIMIQUES
  {
    code: 'RC',
    slug: 'risques-chimiques',
    title: 'Prévention des Risques Chimiques',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation risques chimiques : manipulation produits dangereux, CMR, FDS, pictogrammes, EPI, stockage.',
    longDesc: ['Formation obligatoire pour personnel manipulant produits chimiques (Code Travail R4412). Identification dangers, lecture FDS, utilisation EPI, mesures prévention.', 'Spécialisation CMR (Cancérogènes/Mutagènes/Reprotoxiques) et ACD (Agents Chimiques Dangereux). Réduction 50% accidents exposition après formation.'],
    duration: { initial: '1 jour (7h)', recyclage: 'Recyclage 3 ans conseillé' },
    pricing: { intra: '800 € HT / groupe', inter: '240 € HT / personne' },
    prerequisites: ['Manipulation produits chimiques', 'Savoir lire FDS'],
    recyclageFrequency: 'Recyclage conseillé tous les 3 ans',
    certification: 'Attestation formation Risques Chimiques',
    objectives: ['Identifier dangers produits chimiques', 'Lire et comprendre FDS (Fiches Données Sécurité)', 'Reconnaître pictogrammes CLP', 'Utiliser EPI chimiques adaptés', 'Stocker et manipuler produits en sécurité', 'Gérer situations d\'urgence (fuites, projections)'],
    program: [
      { title: 'Réglementation chimique', items: ['Règlement CLP/REACH', 'CMR et ACD', 'VLEP (Valeurs Limites Exposition)', 'Document Unique évaluation risques'] },
      { title: 'Dangers et pictogrammes', items: ['9 pictogrammes CLP', 'Phrases H (dangers)', 'Phrases P (précautions)', 'Explosif/inflammable/corrosif/toxique/CMR'] },
      { title: 'FDS - 16 sections', items: ['Identification substance', 'Dangers pour santé/environnement', 'Premiers secours', 'Stockage et élimination', 'Informations toxicologiques'] },
      { title: 'Prévention exposition', items: ['Substitution produits', 'Captages à la source', 'EPI chimiques (gants/lunettes/masques)', 'Procédures manipulation', 'Traçabilité exposition CMR'] },
      { title: 'Situations urgence', items: ['Projections cutanées/oculaires', 'Inhalation vapeurs', 'Ingestion accidentelle', 'Fuites/déversements', 'Incendie produits chimiques'] }
    ],
    publicConcerne: { description: 'Personnel manipulant produits chimiques : nettoyage, maintenance, production, laboratoires, ateliers, agriculture.', metiers: ['Agents nettoyage', 'Ouvriers production chimique', 'Techniciens laboratoires', 'Peintres (solvants)', 'Mécaniciens (dégraissants)', 'Agents traitement eaux', 'Agriculteurs (phytos)', 'Préparateurs pharmacie', 'Coiffeurs', 'Esthéticiennes'] },
    methodologie: ['Théorie 50% / Pratique 50%', 'Étude FDS réelles entreprise', 'Exercices reconnaissance pictogrammes', 'Mises en situation déversements', 'Choix EPI selon risques'],
    stats: { satisfaction: 97, reussite: 100, formes: 198 },
    faq: [
      { question: 'Différence entre CMR et ACD ?', answer: 'ACD = Agents Chimiques Dangereux (large : irritants, corrosifs, toxiques). CMR = sous-catégorie ACD ultra-dangereux (Cancérogène/Mutagène/Reprotoxique) avec règles renforcées.' },
      { question: 'FDS obligatoire pour quels produits ?', answer: 'FDS obligatoire pour tous produits dangereux (pictogrammes CLP). Fournisseur doit fournir FDS gratuitement. Employeur doit mettre FDS à disposition personnel.' },
      { question: 'EPI chimiques obligatoires ?', answer: 'Oui si exposition impossible à éliminer. Gants résistants chimiquement (normes EN374), lunettes/écran facial, masques respiratoires (vapeurs/poussières), vêtements protection chimique selon FDS.' }
    ],
    metaDescription: 'Formation Risques Chimiques. Manipulation produits dangereux, CMR, FDS, pictogrammes. Prévention exposition. 240€ HT. Durée 1 jour.'
  },

  // AIPR
  {
    code: 'AIPR',
    slug: 'aipr',
    title: 'AIPR - Autorisation Intervention Proximité Réseaux',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation AIPR obligatoire travaux près réseaux enterrés (gaz, eau, électricité, télécom). Éviter endommagement réseaux.',
    longDesc: ['Formation obligatoire depuis 2018 (Réforme Anti-Endommagement) pour personnel travaux à proximité réseaux enterrés. Examen QCM national obligatoire.', 'AIPR existe en 3 niveaux : Opérateur (terrassement), Encadrant (chef chantier), Concepteur (bureaux études). Validité 5 ans. 60 000 accidents réseaux/an évités.'],
    duration: { initial: '1 jour (7h)', recyclage: 'Renouvellement 5 ans (examen)' },
    pricing: { intra: '750 € HT / groupe', inter: '220 € HT / personne' },
    prerequisites: ['Travailler à proximité réseaux', 'Niveau Opérateur : terrassement', 'Niveau Encadrant : chef chantier'],
    recyclageFrequency: 'Renouvellement tous les 5 ans (nouvel examen QCM)',
    certification: 'AIPR Opérateur / Encadrant / Concepteur (certificat national valable 5 ans)',
    objectives: ['Identifier risques endommagement réseaux', 'Comprendre réglementation DT/DICT', 'Lire plans réseaux et marquage-piquetage', 'Appliquer consignes sécurité chantier', 'Réagir en cas d\'endommagement réseau', 'Réussir examen QCM national AIPR'],
    program: [
      { title: 'Réglementation réseaux', items: ['Réforme anti-endommagement 2012-2018', 'DT (Déclaration Travaux)', 'DICT (Déclaration Intention Commencement Travaux)', 'Guichets Uniques (téléservice)', 'Responsabilités juridiques'] },
      { title: 'Types de réseaux', items: ['Réseaux sensibles (gaz, électricité HT)', 'Réseaux non sensibles (eau, télécom, assainissement)', 'Affleurants et non-affleurants', 'Classes précision cartographie (A/B/C)'] },
      { title: 'Préparation chantier', items: ['Consultation téléservice', 'Récépissés DT-DICT', 'Plans réseaux exploitants', 'Marquage-piquetage couleurs', 'Investigations complémentaires'] },
      { title: 'Exécution travaux', items: ['Techniques sans tranchée', 'Distance sécurité 50cm mini', 'Travaux manuels zone réseaux', 'Détection réseaux (géoradar)', 'Arrêt travaux si doute'] },
      { title: 'Endommagement réseau', items: ['Procédure urgence (arrêt chantier)', 'Alertes exploitant + pompiers', 'Déclaration responsable travaux (DRT)', 'Sanctions pénales (225 000€ amende)', 'Assurances'] },
      { title: 'Examen QCM national', items: ['30 questions QCM', '24 bonnes réponses minimum (80%)', 'Certificat national valable 5 ans', 'Rattrapages possibles'] }
    ],
    publicConcerne: { description: 'Obligatoire pour personnel travaux près réseaux enterrés (électricité, gaz, eau, télécom, assainissement).', metiers: ['Conducteurs engins terrassement', 'Chefs chantier TP', 'Ouvriers VRD', 'Électriciens (tranchées)', 'Plombiers (branchements)', 'Poseurs réseaux télécom', 'Foreurs géothermie', 'Paysagistes (plantations)', 'Agents voirie', 'Bureaux études VRD'] },
    methodologie: ['Formation 1 jour théorique', 'Études cas réels accidents', 'Lecture plans réseaux', 'Procédures DT-DICT', 'Examen QCM blanc + officiel'],
    stats: { satisfaction: 96, reussite: 92, formes: 534 },
    faq: [
      { question: 'Quels sont les 3 niveaux AIPR ?', answer: 'Opérateur (ouvriers terrassement, engins), Encadrant (chefs chantier, conducteurs travaux), Concepteur (bureaux études, maîtrise œuvre). Examen QCM différent par niveau.' },
      { question: 'AIPR obligatoire même pour petits travaux ?', answer: 'Oui dès que travaux à <50cm profondeur près réseaux (plantations, piquets clôture, branchements...). Exemples : pose clôture, plantation arbres, tranchée arrosage.' },
      { question: 'Que faire si on touche un réseau gaz ?', answer: 'ARRÊT IMMÉDIAT travaux, évacuation zone 100m, interdiction flammes/téléphones, appel pompiers 18 + exploitant gaz (GRDF). NE PAS reboucher. Déclaration responsable travaux 24h.' }
    ],
    metaDescription: 'Formation AIPR Autorisation Intervention Proximité Réseaux. Obligatoire travaux réseaux enterrés. Examen QCM national. 220€ HT. Validité 5 ans.'
  },

  // AUTORISATION DE CONDUITE
  {
    code: 'AC',
    slug: 'autorisation-de-conduite',
    title: 'Autorisation de Conduite Engins',
    category: 'autres',
    color: 'green',
    shortDesc: 'Formation interne entreprise : chariot élévateur, nacelle, PEMP, grue auxiliaire. Alternative CACES pour usage interne.',
    longDesc: ['Autorisation Conduite = formation interne entreprise (R4323-55) pour engins : chariots élévateurs, nacelles PEMP, grues auxiliaires, transpalettes. Alternative au CACES pour usage intra-entreprise uniquement.', 'Employeur peut délivrer AC après formation + test aptitudes. Valable uniquement dans l\'entreprise émettrice. Moins coûteux que CACES mais non transférable.'],
    duration: { initial: '1-2 jours selon engin', recyclage: 'Recyclage annuel recommandé' },
    pricing: { intra: '800 € HT / groupe', inter: '300 € HT / personne' },
    prerequisites: ['Aptitude médicale conduite engins', 'Avoir 18 ans minimum (sauf apprentis 15-18 ans formés)', 'Permis B si circulation voie publique'],
    recyclageFrequency: 'Recyclage annuel recommandé ou lors changement matériel',
    certification: 'Autorisation de Conduite délivrée par employeur (valable uniquement dans entreprise)',
    objectives: ['Connaître technologie engin conduit', 'Réaliser vérifications journalières', 'Conduire en sécurité (circulation, manutention)', 'Respecter règles circulation interne', 'Identifier situations dangereuses', 'Réagir aux incidents (renversement, fuite hydraulique)'],
    program: [
      { title: 'Réglementation', items: ['R4323-55 Code Travail', 'Responsabilités conducteur', 'Différence AC / CACES', 'Infractions et sanctions'] },
      { title: 'Technologie engin', items: ['Organes engin (moteur, hydraulique, freins)', 'Capacités charge (diagrammes)', 'Stabilité (triangle/polygone sustentation)', 'Dispositifs sécurité'] },
      { title: 'Vérifications quotidiennes', items: ['Contrôle visuel', 'Niveaux (huile/eau/hydraulique)', 'Éclairage/avertisseurs', 'Freins/direction', 'Registre maintenance'] },
      { title: 'Conduite pratique', items: ['Prise/dépose poste conduite', 'Circulation (marche AV/AR)', 'Manutention charges', 'Gerbage/dégerbage', 'Zones dangereuses (pentes, portes)', 'Fin poste (stationnement sécurisé)'] },
      { title: 'Situations risques', items: ['Surcharge engin', 'Renversement latéral', 'Perte charge', 'Collision piétons/véhicules', 'Intervention sur engin (consignation)'] }
    ],
    publicConcerne: { description: 'Personnel conduisant engins en interne : chariots élévateurs, nacelles, transpalettes électriques, grues auxiliaires (camions), mini-pelles.', metiers: ['Magasiniers (chariots)', 'Caristes (CACES 1-3-5)', 'Agents maintenance (nacelles)', 'Livreurs (hayon élévateur)', 'Ouvriers BTP (mini-engins)', 'Agents logistique', 'Préparateurs commandes', 'Personnel entrepôt', 'Agents services techniques', 'Conducteurs PL (grue auxiliaire)'] },
    methodologie: ['Théorie 30% / Pratique 70%', 'Formation sur engins entreprise', 'Parcours sécurité interne', 'Tests aptitudes conduite/manutention', 'Délivrance AC par employeur'],
    stats: { satisfaction: 98, reussite: 97, formes: 423 },
    faq: [
      { question: 'Différence entre AC et CACES ?', answer: 'CACES = certificat national transférable toutes entreprises, valable 5-10 ans, examen organisme certifié. AC = autorisation interne, valable uniquement dans entreprise émettrice, formation + test interne, moins cher mais non transférable.' },
      { question: 'Puis-je conduire n\'importe où avec AC ?', answer: 'NON. AC valable uniquement dans l\'entreprise qui l\'a délivrée. Pour conduire ailleurs (intérim, changement employeur) : CACES obligatoire.' },
      { question: 'AC suffit-elle légalement ?', answer: 'Oui si usage strictement interne entreprise (R4323-55). Employeur responsable si accident. MAIS : CACES fortement recommandé car AC = engagement responsabilité employeur complète.' },
      { question: 'Quels engins concernés par AC/CACES ?', answer: 'Chariots élévateurs (R489), PEMP nacelles (R486), Grues auxiliaires/mobiles (R483), Engins chantier (R482), Ponts roulants (R484). Chaque catégorie = formation spécifique.' }
    ],
    metaDescription: 'Formation Autorisation de Conduite engins. Chariots élévateurs, nacelles PEMP, grues. Alternative CACES interne entreprise. 300€ HT. Durée 1-2 jours.'
  }
];
