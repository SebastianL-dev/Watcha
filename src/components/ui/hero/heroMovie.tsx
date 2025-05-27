"use client";

import Movie from "@/interfaces/movie.interface";
import { getImageUrl } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import FormatDuration from "@/utils/formatDuration";
import Image from "next/image";
import { Star } from "@/components/icons/star";
import { Date } from "@/components/icons/date";
import { Clock } from "@/components/icons/clock";
import * as motion from "motion/react-client";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";
import { Play } from "@/components/icons/play";
import { External } from "@/components/icons/external";
import ReleaseDates from "@/interfaces/releaseDates.interface";
import FormatMovieClasification from "@/utils/formatMovieClasification";
import { Close2 } from "@/components/icons/close2";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Video from "@/interfaces/video.interface";
import VideoComponent from "../video/video";

export default function HeroMovie({
  movie,
  release,
  video,
}: {
  movie: Movie;
  release?: ReleaseDates[];
  video: Video;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clasification = release ? FormatMovieClasification(release) : "";

  const releaseColor = () => {
    if (clasification === "G")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "PG")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "PG-13")
      return "bg-sky-500/10 border-sky-500/85 text-sky-500/85 drop-shadow-blue";
    if (clasification === "R")
      return "bg-amber-300/10 border-amber-300/85 text-amber-300/85 drop-shadow-yellow";
    if (clasification === "NC-17")
      return "bg-red-500/10 border-red-500/85 text-red-500/85 drop-shadow-red";
  };

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex w-full h-screen hero-image absolute inset-0">
        <AnimatePresence>
          {isOpen && (
            <motion.dialog
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex fixed inset-0 bg-black/80 backdrop-blur-sm items-center justify-center z-[9999] w-full h-screen"
            >
              <div className="flex gap-4 w-full m-[15%] items-center justify-center rounded-2xl overflow-hidden border-2 border-neutral-800 drop-shadow-trailer/20 relative">
                <VideoComponent
                  videoId={video.key}
                  title={`${movie.title} ${video.name}`}
                />
              </div>

              <button
                className="text-text absolute top-8 right-8 cursor-pointer"
                onClick={handleClose}
              >
                <Close2 width={32} height={32} />
              </button>
            </motion.dialog>
          )}
        </AnimatePresence>

        <Image
          src={getImageUrl(movie.backdrop_path, "original")}
          alt={`${movie.title} backdrop image`}
          fill
          priority
          loading="eager"
          className="object-cover relative z-0"
        />
      </div>

      <article className="flex flex-col relative z-50 text-text">
        <ul className="flex gap-4 mb-8">
          <li>
            <div className="text-base text-text/70 font-medium flex gap-2 items-center">
              <Clock />
              <span>{FormatDuration(movie.runtime ? movie.runtime : 0)}</span>
            </div>
          </li>
          {clasification !== "" && (
            <li>
              <span
                className={`font-light border-1 text-sm px-2.5 py-0.5 rounded-full ${releaseColor()}`}
              >
                {clasification}
              </span>
            </li>
          )}
        </ul>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <Star className="text-amber-300" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <Date className="" />
            <time>{FormatDate(movie.release_date)}</time>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black max-sm:text-4xl">{movie.title}</h1>

          {movie.tagline && (
            <p className="text-xl font-medium text-text/75">{movie.tagline}</p>
          )}
        </div>

        <ul className="flex gap-4 text-sm my-6 flex-wrap" aria-label="Generes">
          {movie.genres.map((genere) => {
            return (
              <li key={genere.id}>
                <motion.span
                  className="flex gap-2 items-center text-shadow-main drop-shadow-main bg-primary/15 px-3 py-1 rounded-full backdrop-blur-sm"
                  aria-label={`${genere.name} genere`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {genere.name}
                </motion.span>
              </li>
            );
          })}
        </ul>

        <p className="max-w-xl text-text/90 mb-16">{movie.overview}</p>

        <ul className="flex gap-6 max-sm:flex-col" aria-label="Action buttons">
          <li>
            <motion.button
              className="flex gap-2 px-4 py-2 w-fit rounded-full items-center font-semibold transition-colors ease-in-out duration-200 text-white bg-green-700 hover:bg-primary shadow-button-primary cursor-pointer"
              aria-label={"Watch trailer button"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleOpen}
            >
              <Play />
              Watch trailer
            </motion.button>
          </li>
          {movie.homepage && (
            <li>
              <MainLinkButton
                text="Home page"
                primary={false}
                blank
                icon={<External />}
                href={movie.homepage}
              />
            </li>
          )}
        </ul>
      </article>
    </>
  );
}
