import Media from "@/interfaces/media.interface";
import { MediaDetail, MediaType } from "@/types/common.types";
import axios from "axios";
import ReleaseDates from "@/interfaces/releaseDates.interface";
import ContentRatings from "@/interfaces/contentRatings.interface";
import Data from "@/interfaces/data.interface";

const image_url = "https://image.tmdb.org/t/p/";

export function getImageUrl(path: string | null, size: string): string {
  if (!path) return "/";

  return `${image_url}/${size}${path}`;
}

export async function getTrendingAll(): Promise<Media[]> {
  const response = await axios.get("/api/all/trending");

  return response.data.results;
}

export async function getPopularMovies(): Promise<Media[]> {
  const response = await axios.get("/api/movies/popular");

  return response.data.results;
}

export async function getTopRatedMovies(): Promise<Media[]> {
  const response = await axios.get("/api/movies/top_rated");

  return response.data.results;
}

export async function getDiscoverMovies(page: number): Promise<Data> {
  const response = await axios.get("/api/movies/discover", {
    params: { page },
  });

  return response.data;
}

export async function getPopularTv(): Promise<Media[]> {
  const response = await axios.get("/api/tv/popular");

  return response.data.results;
}

export async function getTopRatedTv(): Promise<Media[]> {
  const response = await axios.get("/api/tv/top_rated");

  return response.data.results;
}

export async function getDiscoverTv(page: number): Promise<Data> {
  const response = await axios.get("/api/tv/discover", {
    params: { page },
  });

  return response.data;
}

export async function getMediaDetails(
  type: MediaType,
  id: number
): Promise<MediaDetail> {
  const response = await axios.get(`/api/all/details`, {
    params: { type, id },
  });

  return response.data;
}

export async function getMovieClasification(
  id: number
): Promise<ReleaseDates[]> {
  const response = await axios.get("/api/movies/clasification", {
    params: { id },
  });

  return response.data.results;
}

export async function getTvClasification(
  id: number
): Promise<ContentRatings[]> {
  const response = await axios.get("/api/tv/clasification", {
    params: { id },
  });

  return response.data.results;
}
