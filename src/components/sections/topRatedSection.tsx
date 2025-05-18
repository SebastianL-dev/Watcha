"use client";

import Media from "@/interfaces/media.interface";
import { getImageUrl, getTopRatedMovies } from "@/services/tmdb";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Date } from "../icons/date";
import { Star } from "../icons/star";
import FormatDate from "@/utils/formatDate";
import { Watcha } from "../icons/watcha";
import Link from "next/link";
import { Trophy } from "../icons/trophy";

export default function TopRatedSection() {
  const [topRated, setTopRated] = useState<Media[]>();

  useEffect(() => {
    const fetchRatedMovies = async () => {
      const rated = await getTopRatedMovies();

      setTopRated(rated.slice(0, 3));
    };

    fetchRatedMovies();

    console.log(topRated);
  }, []);

  if (!topRated) return <></>;

  return (
    <section className="flex flex-col w-[calc(100_-_margin)] my-42">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Trophy />
        <h2 className="font-bold text-3xl">Top Rated Movies</h2>
      </div>

      <ul className="flex flex-wrap gap-8 mx-[10%] justify-center">
        {topRated.map((movie, index) => {
          return (
            <li key={movie.id} className="basis-1/4 flex-1 max-w-[482px]">
              <Link className="group" href={`/movie/${movie.id}`}>
                <article className="flex flex-col rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-950 grow h-full">
                  <div className="relative flex h-96 media-image-card before:bg-transparent group-hover:before:bg-neutral-950/50 group-hover:before:backdrop-blur-xs">
                    <Image
                      src={getImageUrl(movie.backdrop_path, "original")}
                      alt={`${movie.title} Background Image`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      className="w-1/3 h-full object-cover group-hover:scale-110 transition-all ease-in-out duration-200"
                    />

                    <div className="absolute flex flex-col items-center gap-1 z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent group-hover:text-text/50 transition-all ease-in-out duration-200 scale-50 group-hover:scale-100">
                      <Watcha width={64} height={64} />
                      <span>More info</span>
                    </div>
                  </div>

                  <div className="flex flex-col p-6 gap-4 bg-neutral-950 z-10">
                    <span className="font-bold text-2xl text-ellipsis overflow-hidden whitespace-nowrap">
                      {movie.title}
                    </span>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-center h-fit">
                        <div className="text-base text-text/70 font-medium flex gap-2 items-center">
                          <Star className="text-amber-300" />
                          <span>{movie.vote_average.toFixed(1)}</span>
                        </div>

                        <div className="text-base text-text/70 font-medium flex gap-2 items-center">
                          <Date className="" />
                          <time>{FormatDate(movie.release_date)}</time>
                        </div>
                      </div>

                      <span className="text-primary/80 bg-primary/10 border border-primary/80 drop-shadow-main rounded-full px-4 py-1 text-sm font-medium items-center justify-center">
                        #{index + 1}
                      </span>
                    </div>

                    <p className="text-clip overflow-hidden text-text/50 line-clamp-3">
                      {movie.overview}
                    </p>
                  </div>
                </article>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
