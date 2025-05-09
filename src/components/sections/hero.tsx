"use client";

import Media from "@/interfaces/media.interface";
import { getMediaDetails, getTrendingAll } from "@/services/tmdb";
import { MediaDetail, MediaType } from "@/types/common.types";
import { useEffect, useState } from "react";
import HeroMovie from "../ui/hero/heroMovie";
import Movie from "@/interfaces/movie.interface";
import Serie from "@/interfaces/serie.interface";
import HeroSerie from "../ui/hero/heroSerie";

export default function Hero() {
  const [trendingMedia, setTrendingMedia] = useState<Media>();
  const [trendingMediaDetails, setTrendingMediaDetails] =
    useState<MediaDetail>();

  useEffect(() => {
    const fetchTrendingMedia = async () => {
      const trending = await getTrendingAll();

      if (!trending || trending.length === 0) return;

      const { media_type, id } = trending[0];
      const details = await getMediaDetails(media_type as MediaType, id);

      setTrendingMedia(trending[0]);
      setTrendingMediaDetails(details);
    };

    fetchTrendingMedia();
  }, []);

  if (!trendingMediaDetails) return <div>Not found</div>;
  if (!trendingMedia) return <div>Not found</div>;

  return (
    <section
      className="flex mx-[10%] h-screen items-center"
      aria-label="Hero section with trending media"
    >
      {trendingMedia.media_type === "movie" && (
        <HeroMovie movie={trendingMediaDetails as Movie} />
      )}
      {trendingMedia.media_type === "tv" && (
        <HeroSerie movie={trendingMediaDetails as Serie} />
      )}
    </section>
  );
}
