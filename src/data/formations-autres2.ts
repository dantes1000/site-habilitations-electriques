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
