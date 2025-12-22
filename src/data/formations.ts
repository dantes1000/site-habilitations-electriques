import type { Formation } from '../types/formation';
import { formationsElectriques } from './formations-part1';
import { formationsInterventionsBT } from './formations-part2';
import { formationsElectricienBT } from './formations-part3';

// Agrégation de toutes les formations électriques
export const allFormationsElec: Formation[] = [
  ...formationsElectriques,
  ...formationsInterventionsBT,
  ...formationsElectricienBT
];

// Helper functions
export function getFormationBySlug(slug: string): Formation | undefined {
  return allFormationsElec.find(f => f.slug === slug);
}

export function getFormationsByCategory(category: string): Formation[] {
  return allFormationsElec.filter(f => f.category === category);
}

export function getAllFormationSlugs(): string[] {
  return allFormationsElec.map(f => f.slug);
}

// Export par catégories pour faciliter l'affichage
export const formationsParCategorie = {
  'non-electricien': allFormationsElec.filter(f => f.category === 'non-electricien'),
  'interventions-bt': allFormationsElec.filter(f => f.category === 'interventions-bt'),
  'electricien-bt': allFormationsElec.filter(f => f.category === 'electricien-bt'),
  'haute-tension': allFormationsElec.filter(f => f.category === 'haute-tension')
};
