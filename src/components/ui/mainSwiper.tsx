"use client";

import Media from "@/interfaces/media.interface";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getMediaDetails } from "@/services/tmdb";
import MovieCard from "../cards/movieCard";
import Movie from "@/interfaces/movie.interface";
import { useEffect, useState } from "react";
import { MediaDetail, MediaType } from "@/types/common.types";
import TvCard from "../cards/tvCard";
import Serie from "@/interfaces/serie.interface";

export default function MainSwiper({
  media,
  media_type,
}: {
  media: Media[];
  media_type?: MediaType;
}) {
  const [mediaDetails, setMediaDetails] = useState<MediaDetail[]>([]);

  useEffect(() => {
    const fetchAllDetails = async () => {
      const details = await Promise.all(
        media.map((data) =>
          getMediaDetails(
            (data.media_type as MediaType) ?? (media_type as MediaType),
            data.id
          )
        )
      );

      setMediaDetails(details);
    };

    fetchAllDetails();
  }, [media, media_type]);

  const swiperConfig = {
    modules: [Navigation, Mousewheel],
    spaceBetween: 10,
    slidesPerView: 1,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      550: { slidesPerView: 2, spaceBetween: 10 },
      830: { slidesPerView: 3, spaceBetween: 10 },
      1100: { slidesPerView: 4, spaceBetween: 10 },
      1450: { slidesPerView: 5, spaceBetween: 10 },
      1700: { slidesPerView: 6, spaceBetween: 10 },
    },
  };

  return (
    <div className="relative">
      <Swiper {...swiperConfig} className="media-carousel">
        {mediaDetails.map((details, index) => {
          const originalMedia = media[index];
          const type = originalMedia.media_type ?? media_type;

          return (
            <SwiperSlide key={originalMedia.id}>
              {type === "movie" ? (
                <MovieCard movie={details as Movie} id={originalMedia.id} />
              ) : (
                <TvCard tv={details as Serie} id={originalMedia.id} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }

        .media-carousel {
          padding: 1em 3%;
          margin: 0 7%;
        }

        .media-carousel .swiper-slide {
          transition: transform 0.3s;
        }
      `}</style>
    </div>
  );
}
