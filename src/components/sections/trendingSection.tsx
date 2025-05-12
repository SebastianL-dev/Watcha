"use client";

import { useEffect, useState } from "react";
import { Trend } from "../icons/trend";
import MainSwiper from "../ui/mainSwiper";
import Media from "@/interfaces/media.interface";
import { getTrendingAll } from "@/services/tmdb";

export default function TrendingSection() {
  const [trendingMedia, setTrendingMedia] = useState<Media[]>();

  useEffect(() => {
    const fetchTrendingMedia = async () => {
      const trending = await getTrendingAll();

      setTrendingMedia(trending);
    };

    fetchTrendingMedia();
  }, []);

  if (!trendingMedia) return <>Not found</>;

  return (
    <section className="flex flex-col w-[calc(100_-_margin)] mb-42">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Trend />
        <h2 className="font-bold text-3xl">Trending</h2>
      </div>

      <div className="">
        <MainSwiper media={trendingMedia} />
      </div>
    </section>
  );
}
