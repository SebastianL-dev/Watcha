import Media from "@/interfaces/media.interface";
import axios from "axios";

export async function getTrendingAll(): Promise<Media[]> {
  const response = await axios.get("/api/all/trending");

  return response.data.results;
}
