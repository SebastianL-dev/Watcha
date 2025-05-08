import Movie from "./media.interface";

export default interface MediaDetails extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  production_companies: {
    id: number;
    name: number;
    logo_path: string | null;
  }[];
}
