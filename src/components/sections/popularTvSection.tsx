"use client";

import { useEffect, useState } from "react";
import MainSwiper from "../ui/mainSwiper";
import Media from "@/interfaces/media.interface";
import { Popular } from "../icons/popular";
import { getPopularTv } from "@/services/tmdb";

export default function PopularTvSection() {
  const [popularTv, setPopularTv] = useState<Media[]>();

  useEffect(() => {
    const fetchPopularTv = async () => {
      const popular = await getPopularTv();

      console.log(popular);
      setPopularTv(popular);
    };

    fetchPopularTv();
  }, []);

  if (!popularTv) return <>Not found</>;

  return (
    <section className="flex flex-col w-[calc(100_-_margin)] my-42">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Popular />
        <h2 className="font-bold text-3xl">Popular Series</h2>
      </div>

      <div className="">
        <MainSwiper media={popularTv} media_type="tv" />
      </div>
    </section>
  );
}
