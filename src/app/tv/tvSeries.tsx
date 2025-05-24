"use client";

import TvCard from "@/components/cards/tvCard";
import Footer from "@/components/layout/footer";
import Paginate from "@/components/ui/paginate";
import Serie from "@/interfaces/serie.interface";
import { getDiscoverTv, getMediaDetails } from "@/services/tmdb";
import { MediaDetail } from "@/types/common.types";
import { useEffect, useState } from "react";

export default function TvSeries() {
  const [tv, setTv] = useState<MediaDetail[]>();
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const fetchTv = async (page: number) => {
    const discover = await getDiscoverTv(page);
    const details = await Promise.all(
      discover.results.map((tv) => getMediaDetails("tv", tv.id))
    );

    setTv(details);
    setPages(discover.total_pages);
  };

  useEffect(() => {
    fetchTv(1);
  }, []);

  const changePage = (page: number) => {
    fetchTv(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(page);
  };

  if (!tv) return <></>;

  return (
    <>
      <main className="mb-36">
        <section className="flex flex-col mx-[10%] items-center justify-center pt-52">
          <h1 className="text-6xl font-bold mb-12 text-center">
            Discover Tv Series
          </h1>

          <Paginate pages={pages} page={page} changePage={changePage} />
          <ul className="grid grid-cols-5 gap-4 w-full my-16 max-[1450]:grid-cols-4 max-[1200]:grid-cols-3 max-[900]:grid-cols-2 max-[600]:grid-cols-1">
            {tv.map((tvSerie) => {
              return (
                <li key={tvSerie.id}>
                  <TvCard tv={tvSerie as Serie} id={tvSerie.id} />
                </li>
              );
            })}
          </ul>
          <Paginate pages={pages} page={page} changePage={changePage} />
        </section>
      </main>
      <Footer />
    </>
  );
}
