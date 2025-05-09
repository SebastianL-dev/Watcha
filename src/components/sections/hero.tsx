"use client";

import Media from "@/interfaces/media.interface";
import MediaDetails from "@/interfaces/mediaDetails.interface";
import { getDetails, getImageUrl, getTrendingAll } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import FormatDuration from "@/utils/formatDuration";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "../icons/star";
import { Date } from "../icons/date";
import { Clock } from "../icons/clock";
import * as motion from "motion/react-client";
import MainLinkButton from "../ui/mainLinkButton";
import { Play } from "../icons/play";
import { External } from "../icons/external";

export default function Hero() {
  const [media, setMedia] = useState<Media[]>();
  const [firstMediaDetails, setFirstMediaDetails] = useState<MediaDetails>();

  const getAllMedia = async () => {
    setMedia(await getTrendingAll());
  };

  useEffect(() => {
    getAllMedia();
  }, []);

  useEffect(() => {
    if (media && media.length > 0) {
      getMediaDetails();
    }
  }, [media]);

  if (!media || media.length === 0) return <div>Not found</div>;

  const firstMedia = media[0];

  const getMediaDetails = async () => {
    setFirstMediaDetails(
      await getDetails(firstMedia.media_type, firstMedia.id)
    );
  };

  if (!firstMediaDetails) return <div>Not found</div>;

  return (
    <section
      className="flex mx-[10%] h-screen items-center"
      aria-label="Hero section with most popular movie/serie"
    >
      <div className="flex w-full h-screen hero-image absolute inset-0">
        <Image
          src={getImageUrl(firstMedia.backdrop_path)}
          alt={firstMedia.title}
          fill
          priority
          className="object-cover hero-image relative z-0"
        />
      </div>

      <div className="flex flex-col relative z-50 text-text">
        <div className="text-base text-text/70 mb-8 font-medium flex gap-2 items-center">
          <Clock />
          <span>{FormatDuration(firstMediaDetails.runtime)}</span>
        </div>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <Star className="text-amber-300" />
            <span>{firstMedia.vote_average}</span>
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <Date className="" />
            <span>{FormatDate(firstMedia.release_date)}</span>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black">{firstMediaDetails.title}</h1>
          <p className="text-xl font-medium text-text/75">
            {firstMediaDetails.tagline}
          </p>
        </div>

        <ul className="flex gap-4 text-sm my-6">
          {firstMediaDetails.genres.map((generes, index) => {
            return (
              <li key={index}>
                <motion.a
                  className="flex gap-2 items-center text-shadow-main drop-shadow-main bg-primary/15 px-3 py-1 rounded-full backdrop-blur-sm"
                  aria-label={`Link to ${generes.name} genere`}
                  href={"/"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {generes.name}
                </motion.a>
              </li>
            );
          })}
        </ul>

        <p className="max-w-xl text-text/90 mb-16">
          {firstMediaDetails.overview}
        </p>

        <ul className="flex gap-6">
          <li>
            <MainLinkButton
              text="Watch trailer"
              primary
              icon={<Play />}
              href=""
            />
          </li>
          <li>
            <MainLinkButton
              text="Home page"
              primary={false}
              icon={<External />}
              href=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
