import Media from "@/interfaces/media.interface";
import MediaDetails from "@/interfaces/mediaDetails.interface";
import axios from "axios";

const image_url = "https://image.tmdb.org/t/p/original";

export function getImageUrl(path: string | null): string {
  if (!path) return "/";
  return `${image_url}${path}`;
}

export async function getTrendingAll(): Promise<Media[]> {
  const response = await axios.get("/api/all/trending");

  return response.data.results;
}

export async function getDetails(
  type: string,
  id: number
): Promise<MediaDetails> {
  const response = await axios.get(`/api/all/details?type=${type}&id=${id}`);

  console.log("Hola");
  console.log(response.data);
  return response.data;
}
