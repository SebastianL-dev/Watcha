"use client";

import Footer from "@/components/layout/footer";
import PopularMoviesSection from "@/components/sections/popularMoviesSection";
import TrendingSection from "@/components/sections/trendingSection";
import HeroSkeleton from "@/components/skeletons/heroSkeleton";
import HeroMovie from "@/components/ui/hero/heroMovie";
import TopRatedMovieList from "@/components/ui/topRatedMovieList";
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
  }, [movieId]);

  if (!movie) return <HeroSkeleton />;

  return (
    <>
      <main className="mb-36">
        <section className="flex mx-[10%] h-screen items-center max-md:justify-center max-md:mb-64 max-[400px]:pt-64 hero">
          <HeroMovie movie={movie} release={releaseDates} />
          <style jsx global>{`
            @media (height < 700px) {
              .hero {
                padding-top: 16rem;
              }
            }
          `}</style>
        </section>

        <PopularMoviesSection />
        <TrendingSection />
        <TopRatedMovieList />
      </main>
      <Footer />
    </>
  );
}
