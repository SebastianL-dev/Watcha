export default interface Media {
  backdrop_path: string | null;
  id: number;
  title: string;
  name: string;
  original_title: string;
  first_air_date: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
