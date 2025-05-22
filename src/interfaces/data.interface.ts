import Media from "./media.interface";

export default interface Data {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}
