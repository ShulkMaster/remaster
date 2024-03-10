export type Sprites = {
  back_default: string;
  back_female: string | null
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export type Pokemon = {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  weight: number;
  location_area_encounters: string;
  sprites: Sprites;
};

export type PageRequest = {
  limit: number;
  offset: number;
  filter: Record<string, string>;
};

export type Paginable<T> = {
  loading: boolean;
  total: number;
  offset: number;
  limit: number;
  data: T[];
  filter: Record<string, string>;
};
