"use client";

import Media from "@/interfaces/media.interface";
import {
  getMediaDetails,
  getMovieClasification,
  getMovieVideos,
  getTrendingAll,
  getTvClasification,
  getTvVideos,
} from "@/services/tmdb";
import { MediaDetail, MediaType } from "@/types/common.types";
import { useEffect, useState } from "react";
import HeroMovie from "../ui/hero/heroMovie";
import Movie from "@/interfaces/movie.interface";
import Serie from "@/interfaces/serie.interface";
import HeroSerie from "../ui/hero/heroSerie";
import ReleaseDates from "@/interfaces/releaseDates.interface";
import ContentRatings from "@/interfaces/contentRatings.interface";
import HeroSkeleton from "../skeletons/heroSkeleton";
import Video from "@/interfaces/video.interface";

export default function MainHero() {
  const [trendingMedia, setTrendingMedia] = useState<Media>();
  const [trendingMediaDetails, setTrendingMediaDetails] =
    useState<MediaDetail>();
  const [clasification, setClasification] = useState<
    ReleaseDates[] | ContentRatings[]
  >();
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    const fetchTrendingMedia = async () => {
      const trending = await getTrendingAll();

      if (!trending || trending.length === 0) return;

      const { media_type, id } = trending[0];

      const details = await getMediaDetails(media_type as MediaType, id);

      setTrendingMedia(trending[0]);
      setTrendingMediaDetails(details);

      if (media_type === "movie") {
        const release = await getMovieClasification(trending[0].id);
        setClasification(release);

        const videos = await getMovieVideos(trending[0].id);

        const trailer = videos.find(
          (video) =>
            video.name === "Official Trailer" && video.official === true
        );
        setVideo(trailer);
      } else {
        const release = await getTvClasification(trending[0].id);
        setClasification(release);

        const videos = await getTvVideos(trending[0].id);

        const trailer = videos.find(
          (video) =>
            video.name === "Official Trailer" && video.official === true
        );
        setVideo(trailer);
      }
    };

    fetchTrendingMedia();
  }, []);

  if (!trendingMediaDetails) return <HeroSkeleton />;
  if (!trendingMedia) return <HeroSkeleton />;

  return (
    <section
      className="flex mx-[10%] h-screen items-center max-md:justify-center max-md:mb-64 max-[400px]:pt-64 hero"
      aria-label="Hero section with trending media"
    >
      {trendingMedia.media_type === "movie" && (
        <HeroMovie
          movie={trendingMediaDetails as Movie}
          release={clasification as ReleaseDates[]}
          video={video as Video}
        />
      )}
      {trendingMedia.media_type === "tv" && (
        <HeroSerie
          serie={trendingMediaDetails as Serie}
          rating={clasification as ContentRatings[]}
          video={video as Video}
        />
      )}

      <style jsx global>{`
        @media (height < 700px) {
          .hero {
            padding-top: 16rem;
          }
        }
      `}</style>
    </section>
  );
}
