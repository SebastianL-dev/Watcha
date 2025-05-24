"use client";

import Media from "@/interfaces/media.interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTopRatedTv } from "@/services/tmdb";
import BigmediaCard from "../cards/bigMediaCard";

export default function TopRatedTvList() {
  const [topRated, setTopRated] = useState<Media[]>();

  useEffect(() => {
    const fetchRatedTv = async () => {
      const rated = await getTopRatedTv();

      setTopRated(rated.slice(0, 3));
    };

    fetchRatedTv();
  }, []);

  if (!topRated) return <></>;

  return (
    <ul className="gap-8 mx-[10%] justify-center grid grid-cols-3 max-xl:grid-cols-2 max-md:flex max-md:flex-col max-md:items-center">
      {topRated.map((tv, index) => {
        const isLastInOddRow =
          topRated.length % 2 === 1 && index === topRated.length - 1;

        return (
          <li
            key={tv.id}
            className={`max-w-[482px] ${
              isLastInOddRow
                ? "max-xl:col-span-2 max-xl:justify-self-center max-md:col-span-1"
                : ""
            }`}
          >
            <Link className="group" href={`/tv/${tv.id}`}>
              <BigmediaCard media={tv} index={index} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
