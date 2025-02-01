export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  favoriteSeason: Season;
}
