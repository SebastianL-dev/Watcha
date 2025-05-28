"use client";

import { getImageUrl } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import Image from "next/image";
import { Star } from "@/components/icons/star";
import { Date } from "@/components/icons/date";
import * as motion from "motion/react-client";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";
import { Play } from "@/components/icons/play";
import { External } from "@/components/icons/external";
import Serie from "@/interfaces/serie.interface";
import FormatTvClasification from "@/utils/formatTvClasification";
import ContentRatings from "@/interfaces/contentRatings.interface";
import { Tv } from "@/components/icons/tv";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import VideoComponent from "../video/video";
import { Close2 } from "@/components/icons/close2";
import Video from "@/interfaces/video.interface";
import { NoImage } from "@/components/icons/image";

export default function HeroSerie({
  serie,
  rating,
  video,
}: {
  serie: Serie;
  rating?: ContentRatings[];
  video: Video;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clasification = rating ? FormatTvClasification(rating) : "";

  const rateColor = () => {
    if (clasification === "TV-Y")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-Y7")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-G")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-PG")
      return "bg-sky-500/10 border-sky-500/85 text-sky-500/85 drop-shadow-blue";
    if (clasification === "TV-14")
      return "bg-amber-300/10 border-amber-300/85 text-amber-300/85 drop-shadow-yellow";
    if (clasification === "TV-MA")
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
        {video && (
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
                    title={`${serie.name} ${video.name}`}
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
        )}

        {!video && (
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
                <div className="flex flex-col items-center justify-center h-fit text-center max-w-xl text-text p-12 bg-background gap-4 w-fit m-[15%] rounded-2xl overflow-hidden border-2 border-neutral-800 drop-shadow-trailer/20 relative">
                  <span className="text-6xl font-black mb-2">
                    Oops! This place looks empty
                  </span>
                  <p className="text-text/50 mb-6 text-lg">
                    The trailer for this series is not available at the moment.
                    Please check back later or explore other series.
                  </p>

                  <div className="not-found relative">
                    <img
                      src="https://cdn.prod.website-files.com/6476dfb953dc2bc84373e1b2/655db2ba500155ba79ffd5cb_404-img.svg"
                      alt="Not Found image"
                    />
                  </div>
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
        )}

        {serie.backdrop_path && (
          <Image
            src={getImageUrl(serie.backdrop_path, "original")}
            alt={`${serie.name} backdrop image`}
            fill
            priority
            loading="eager"
            className="object-cover relative z-0"
          />
        )}

        {!serie.backdrop_path && (
          <div className="w-full h-full bg-background relative z-0 items-center justify-center flex">
            <NoImage
              className="text-neutral-800 animate-pulse"
              width={500}
              height={500}
            />
          </div>
        )}
      </div>

      <article className="flex flex-col relative z-50 text-text">
        <ul className="flex gap-4 items-center w-fit mb-8 max-sm:flex-col max-sm:items-start">
          <li className="h-fit flex">
            <div className="text-base text-text/70 font-medium flex gap-2 items-center">
              <Tv />
              <div className="flex items-center">
                <span>
                  Season{" "}
                  <span className="text-primary">
                    {serie.number_of_seasons}
                  </span>
                </span>

                <div className="w-1 h-1 rounded-full bg-text/40 mx-2" />

                <span>
                  <span className="text-primary">
                    {serie.number_of_episodes}
                  </span>{" "}
                  Episodes
                </span>

                <div className="w-1 h-1 rounded-full bg-text/40 mx-2 max-sm:hidden" />

                <span
                  className={`max-sm:hidden ${
                    serie.in_production
                      ? "text-sky-400/60 text-shadow-blue"
                      : "text-text/40 text-shadow-text"
                  }`}
                >
                  {serie.in_production ? "In production" : "Completed"}
                </span>
              </div>
            </div>
          </li>
          {clasification !== "" && (
            <li className="flex items-center">
              <span
                className={`font-light border-1 text-sm px-2.5 py-0.5 rounded-full ${rateColor()}`}
              >
                {clasification}
              </span>

              <div className="w-1 h-1 rounded-full bg-text/40 mx-2 max-sm:flex hidden" />

              <span
                className={`max-sm:flex hidden ${
                  serie.in_production
                    ? "text-sky-400/60 text-shadow-blue"
                    : "text-text/40 text-shadow-text"
                }`}
              >
                {serie.in_production ? "In production" : "Completed"}
              </span>
            </li>
          )}
        </ul>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <Star className="text-amber-300" />
            <span>{serie.vote_average.toFixed(1)}</span>
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <Date className="" />
            <time>{FormatDate(serie.first_air_date)}</time>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black max-sm:text-4xl">{serie.name}</h1>

          {serie.tagline && (
            <p className="text-xl font-medium text-text/75">{serie.tagline}</p>
          )}
        </div>

        <ul className="flex gap-4 text-sm my-6 flex-wrap" aria-label="Generes">
          {serie.genres.map((genere) => {
            return (
              <li key={genere.id}>
                <motion.span
                  className="flex gap-2 items-center text-shadow-main drop-shadow-main bg-primary/15 px-3 py-1 rounded-full backdrop-blur-sm"
                  aria-label={`${genere.name} genere`}
                  whileHover={{ scale: 1.1 }}
                >
                  {genere.name}
                </motion.span>
              </li>
            );
          })}
        </ul>

        <p className="max-w-xl text-text/90 mb-16">{serie.overview}</p>

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
          {serie.homepage && (
            <li>
              <MainLinkButton
                text="Home page"
                primary={false}
                blank
                icon={<External />}
                href={serie.homepage}
              />
            </li>
          )}
        </ul>
      </article>
    </>
  );
}
