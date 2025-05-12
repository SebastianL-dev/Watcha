"use client";

import HeroSkeleton from "@/components/skeletons/heroSkeleton";
import HeroSerie from "@/components/ui/hero/heroSerie";
import ContentRatings from "@/interfaces/contentRatings.interface";
import Serie from "@/interfaces/serie.interface";
import { getMediaDetails, getTvClasification } from "@/services/tmdb";
import { MediaType } from "@/types/common.types";
import { use, useEffect, useState } from "react";

export default function SeriePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const serieId = parseInt(id);

  const [serie, setSerie] = useState<Serie>();
  const [contentRatings, setContentRatings] = useState<ContentRatings[]>();

  useEffect(() => {
    const fetchMovie = async () => {
      const details = await getMediaDetails("tv" as MediaType, serieId);
      const ratings = await getTvClasification(details.id);

      setSerie(details as Serie);
      setContentRatings(ratings);
    };

    fetchMovie();
  }, []);

  if (!serie) return <HeroSkeleton />;

  return (
    <section
      className="flex mx-[10%] h-screen items-center"
      aria-label="Hero section with trending media"
    >
      <HeroSerie serie={serie} rating={contentRatings} />
    </section>
  );
}
