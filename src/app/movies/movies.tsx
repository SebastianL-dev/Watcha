"use client";

import MovieCard from "@/components/cards/movieCard";
import Footer from "@/components/layout/footer";
import Paginate from "@/components/ui/paginate";
import Movie from "@/interfaces/movie.interface";
import { getDiscoverMovies, getMediaDetails } from "@/services/tmdb";
import { MediaDetail } from "@/types/common.types";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState<MediaDetail[]>();
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const fetchMovie = async (page: number) => {
    const discover = await getDiscoverMovies(page);
    const details = await Promise.all(
      discover.results.map((movie) => getMediaDetails("movie", movie.id))
    );

    setMovies(details);
    setPages(discover.total_pages);
  };

  useEffect(() => {
    fetchMovie(1);
  }, []);

  const changePage = (page: number) => {
    fetchMovie(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(page);
  };

  if (!movies) return <></>;

  return (
    <>
      <main className="mb-36">
        <section className="flex flex-col mx-[10%] items-center justify-center pt-52">
          <h1 className="text-6xl font-bold mb-12 text-center">
            Discover Movies
          </h1>

          <Paginate pages={pages} page={page} changePage={changePage} />
          <ul className="grid grid-cols-5 gap-4 w-full my-16 max-[1450]:grid-cols-4 max-[1100]:grid-cols-3 max-[830]:grid-cols-2 max-[550]:grid-cols-1">
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <MovieCard movie={movie as Movie} id={movie.id} />
                </li>
              );
            })}
          </ul>
          <Paginate pages={pages} page={page} changePage={changePage} />
        </section>
      </main>
      <Footer />
    </>
  );
}
