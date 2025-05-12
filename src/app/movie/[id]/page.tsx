"use client";

import HeroMovie from "@/components/ui/hero/heroMovie";
import Movie from "@/interfaces/movie.interface";
import ReleaseDates from "@/interfaces/releaseDates.interface";
import { getMediaDetails, getMovieClasification } from "@/services/tmdb";
import { MediaType } from "@/types/common.types";
import { use, useEffect, useState } from "react";

export default function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const movieId = parseInt(id);

  const [movie, setMovie] = useState<Movie>();
  const [releaseDates, setReleaseDates] = useState<ReleaseDates[]>();

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await getMediaDetails("movie" as MediaType, movieId);
      const release = await getMovieClasification(details.id);

      setMovie(details as Movie);
      setReleaseDates(release);
    };

    fetchMovie();
  }, []);

  if (!movie) return <div>Not found</div>;

  return (
    <section
      className="flex mx-[10%] h-screen items-center"
      aria-label="Hero section with trending media"
    >
      <HeroMovie movie={movie} release={releaseDates} />
    </section>
  );
}
