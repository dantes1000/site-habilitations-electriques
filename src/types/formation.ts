export type FormationCategory = 
  | 'non-electricien'
  | 'interventions-bt'
  | 'electricien-bt'
  | 'haute-tension'
  | 'autres';

export type ColorTheme = 'blue' | 'orange' | 'orange-dark' | 'yellow' | 'green';

export interface PricingInfo {
  intra: string;
  inter: string;
  recyclageIntra?: string;
  recyclageInter?: string;
}

export interface DurationInfo {
  initial: string;
  recyclage?: string;
}

export interface ProgramModule {
  title: string;
  items: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Formation {
  // Identifiants
  code: string;
  slug: string;
  title: string;
  category: FormationCategory;
  color: ColorTheme;
  
  // Descriptions
  shortDesc: string;
  longDesc: string[];
  
  // Informations pratiques
  duration: DurationInfo;
  pricing: PricingInfo;
  prerequisites: string[];
  recyclageFrequency: string;
  certification: string;
  
  // Pédagogie
  objectives: string[];
  program: ProgramModule[];
  publicConcerne: {
    description: string;
    metiers: string[];
  };
  methodologie: string[];
  
  // Qualité
  stats?: {
    satisfaction?: number;
    reussite?: number;
    formes?: number;
  };
  
  // FAQ
  faq: FAQ[];
  
  // SEO
  metaDescription: string;
}

export interface AutreFormation extends Omit<Formation, 'category' | 'code'> {
  category: 'autres';
  partenaire: boolean;
}
