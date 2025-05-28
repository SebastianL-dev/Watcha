"use client";

import MovieCard from "@/components/cards/movieCard";
import TvCard from "@/components/cards/tvCard";
import Footer from "@/components/layout/footer";
import Paginate from "@/components/ui/paginate";
import Media from "@/interfaces/media.interface";
import Movie from "@/interfaces/movie.interface";
import Serie from "@/interfaces/serie.interface";
import { getMediaDetails, getSearchMedia } from "@/services/tmdb";
import { MediaDetail } from "@/types/common.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchMedia() {
  const [media, setMedia] = useState<MediaDetail[]>();
  const [shortMedia, setShortMedia] = useState<Media[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const router = useRouter();

  const fetchMedia = async (query: string, page: number) => {
    try {
      const search = await getSearchMedia(query, page);

      if (!search || search.results.length === 0) {
        router.push("/not-found");
        return;
      }

      const filteredResults = search.results.filter(
        (media) =>
          (media.media_type === "movie" || media.media_type === "tv") &&
          media.poster_path !== null
      );

      const details = await Promise.all(
        filteredResults.map((media) =>
          getMediaDetails(
            media.media_type === "movie" ? "movie" : "tv",
            media.id
          )
        )
      );

      setMedia(details);
      setShortMedia(filteredResults);
      setPages(search.total_pages);
    } catch (error) {
      console.error("Error al cargar media:", error);
      router.push("/not-found");
    }
  };

  useEffect(() => {
    const queryParam = new URLSearchParams(window.location.search).get("query");
    if (!queryParam) return;
    setQuery(queryParam);

    fetchMedia(queryParam, 1);
  }, []);

  const changePage = (page: number) => {
    fetchMedia(query, page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(page);
  };

  if (!media) return <></>;
  if (media.length === 0) return <></>;

  return (
    <>
      <main className="mb-36">
        <section className="flex flex-col mx-[10%] items-center justify-center pt-52">
          <h1 className="text-6xl font-bold mb-12 text-center">
            Discover Movies
          </h1>

          <Paginate pages={pages} page={page} changePage={changePage} />
          <ul className="grid grid-cols-5 gap-4 w-full my-16 max-[1450]:grid-cols-4 max-[1100]:grid-cols-3 max-[830]:grid-cols-2 max-[550]:grid-cols-1">
            {media.map((media, index) => {
              const originalMedia = shortMedia[index];
              const type = originalMedia.media_type;

              return (
                <li key={media.id}>
                  {type === "movie" && (
                    <MovieCard movie={media as Movie} id={media.id} />
                  )}
                  {type === "tv" && (
                    <TvCard tv={media as Serie} id={media.id} />
                  )}
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
