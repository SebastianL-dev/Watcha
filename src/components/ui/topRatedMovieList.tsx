"use client";

import Media from "@/interfaces/media.interface";
import Link from "next/link";
import BigMovieCard from "../cards/bigMovieCard";
import { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/services/tmdb";

export default function TopRatedMovieList() {
  const [topRated, setTopRated] = useState<Media[]>();

  useEffect(() => {
    const fetchRatedMovies = async () => {
      const rated = await getTopRatedMovies();

      setTopRated(rated.slice(0, 3));
    };

    fetchRatedMovies();
  }, []);

  if (!topRated) return <></>;

  return (
    <ul className="gap-8 mx-[10%] justify-center grid grid-cols-3 max-xl:grid-cols-2 max-md:flex max-md:flex-col max-md:items-center">
      {topRated.map((movie, index) => {
        const isLastInOddRow =
          topRated.length % 2 === 1 && index === topRated.length - 1;

        return (
          <li
            key={movie.id}
            className={`max-w-[482px] ${
              isLastInOddRow
                ? "max-xl:col-span-2 max-xl:justify-self-center max-md:col-span-1"
                : ""
            }`}
          >
            <Link className="group" href={`/movie/${movie.id}`}>
              <BigMovieCard media={movie} index={index} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
