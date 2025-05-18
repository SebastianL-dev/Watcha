"use client";

import { useEffect, useState } from "react";
import MainSwiper from "../ui/mainSwiper";
import Media from "@/interfaces/media.interface";
import { getPopularMovies } from "@/services/tmdb";
import { Popular } from "../icons/popular";

export default function PopularMoviesSection() {
  const [popularMovies, setPopularMovies] = useState<Media[]>();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const popular = await getPopularMovies();

      setPopularMovies(popular);
    };

    fetchPopularMovies();
  }, []);

  if (!popularMovies) return <>Not found</>;

  return (
    <section className="flex flex-col w-[calc(100_-_margin)] my-42">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Popular />
        <h2 className="font-bold text-3xl">Popular Movies</h2>
      </div>

      <div className="">
        <MainSwiper media={popularMovies} media_type="movie" />
      </div>
    </section>
  );
}
