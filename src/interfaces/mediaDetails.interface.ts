import Movie from "./media.interface";

export default interface MediaDetails extends Movie {
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  runtime: number;
  tagline: string;
  status: string;
  revenue: number;
  production_companies: {
    id: number;
    name: number;
    logo_path: string | null;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}
