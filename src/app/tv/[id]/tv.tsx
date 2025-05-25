"use client";

import Footer from "@/components/layout/footer";
import PopularTvSection from "@/components/sections/popularTvSection";
import TopRatedTvSection from "@/components/sections/topRatedTvSection";
import TrendingSection from "@/components/sections/trendingSection";
import HeroSkeleton from "@/components/skeletons/heroSkeleton";
import HeroSerie from "@/components/ui/hero/heroSerie";
import ContentRatings from "@/interfaces/contentRatings.interface";
import Serie from "@/interfaces/serie.interface";
import Video from "@/interfaces/video.interface";
import {
  getMediaDetails,
  getTvClasification,
  getTvVideos,
} from "@/services/tmdb";
import { MediaType } from "@/types/common.types";
import { use, useEffect, useState } from "react";

export default function TvPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const serieId = parseInt(id);

  const [serie, setSerie] = useState<Serie>();
  const [contentRatings, setContentRatings] = useState<ContentRatings[]>();
  const [video, setVideo] = useState<Video>();

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await getMediaDetails("tv" as MediaType, serieId);
      const ratings = await getTvClasification(details.id);
      const videos = await getTvVideos(serieId);

      const trailer = videos.find(
        (video) => video.name === "Official Trailer" && video.official === true
      );

      setVideo(trailer);
      setSerie(details as Serie);
      setContentRatings(ratings);
    };

    fetchMovie();
  }, [serieId]);

  if (!serie) return <HeroSkeleton />;

  return (
    <>
      <main className="mb-36">
        <section
          className="flex mx-[10%] h-screen items-center max-md:justify-center max-md:mb-64 max-[400px]:pt-64 hero"
          aria-label="Hero section with trending media"
        >
          <HeroSerie
            serie={serie}
            rating={contentRatings}
            video={video as Video}
          />
          <style jsx global>{`
            @media (height < 700px) {
              .hero {
                padding-top: 16rem;
              }
            }
          `}</style>
        </section>

        <PopularTvSection />
        <TrendingSection />
        <TopRatedTvSection />
      </main>
      <Footer />
    </>
  );
}
