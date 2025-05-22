import { getImageUrl } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { Star } from "../icons/star";
import { Watcha } from "../icons/watcha";
import Serie from "@/interfaces/serie.interface";

export default function TvCard({ tv, id }: { tv: Serie; id: number }) {
  return (
    <Link href={`/tv/${id}`} className="group">
      <article className="flex flex-col rounded-xl overflow-hidden border-2 border-neutral-800 h-full ">
        <div className="flex relative h-[350px] media-image-card before:bg-transparent group-hover:before:bg-neutral-950/50 group-hover:before:backdrop-blur-xs">
          <Image
            src={getImageUrl(tv.poster_path, "original")}
            alt={`${tv.name} poster image`}
            fill
            sizes="(max-width: 1200px) 50vw, 33vw"
            className="z-10 object-cover w-full h-full group-hover:scale-110 transition-all ease-in-out duration-200 aspect-auto"
          />

          <div className="absolute flex flex-col items-center gap-1 z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent group-hover:text-text/50 transition-all ease-in-out duration-200 scale-50 group-hover:scale-100">
            <Watcha width={64} height={64} />
            <span>More info</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-neutral-950 backdrop-blur-sm p-2 grow z-10">
          <header>
            <span className="block text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full max-w-[500px]">
              {tv.name}
            </span>
          </header>

          <footer className="flex justify-between text-sm">
            <time className="font-normal text-neutral-400">
              {FormatDate(tv.first_air_date)}
            </time>

            <div className="flex gap-3 items-center">
              <span className="text-sky-500/80 bg-sky-500/10 border border-sky-500/80 drop-shadow-blue rounded-full px-2 py-0.5 text-xs">
                {tv.number_of_seasons} Seasons
              </span>

              <div className="text-amber-300 flex items-center gap-1">
                <Star width={16} height={16} />
                <span>{tv.vote_average.toFixed(1)}</span>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Link>
  );
}
