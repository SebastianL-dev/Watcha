import { getImageUrl } from "@/services/tmdb";
import Image from "next/image";
import { Date } from "../icons/date";
import { Star } from "../icons/star";
import FormatDate from "@/utils/formatDate";
import { Watcha } from "../icons/watcha";
import Media from "@/interfaces/media.interface";
import { useEffect } from "react";

export default function BigmediaCard({
  media,
  index,
}: {
  media: Media;
  index: number;
}) {
  useEffect(() => {
    console.log(media);
  });
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-950 grow h-full">
      <div className="relative flex h-96 media-image-card before:bg-transparent group-hover:before:bg-neutral-950/50 group-hover:before:backdrop-blur-xs">
        <Image
          src={getImageUrl(media.backdrop_path, "original")}
          alt={`${media.title} Background Image`}
          fill
          loading="lazy"
          sizes="(max-width: 1200px) 50vw, 33vw"
          className="z-10 object-cover w-full h-full group-hover:scale-110 transition-all ease-in-out duration-200"
        />

        <div className="absolute flex flex-col items-center gap-1 z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent group-hover:text-text/50 transition-all ease-in-out duration-200 scale-50 group-hover:scale-100">
          <Watcha width={64} height={64} />
          <span>More info</span>
        </div>
      </div>

      <div className="flex flex-col p-6 gap-4 bg-neutral-950 z-10">
        <span className="block text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap w-full max-w-[500px] max-md:w-72">
          {media.title ?? media.name}
        </span>

        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center h-fit">
            <div className="text-base text-text/70 font-medium flex gap-2 items-center">
              <Star className="text-amber-300" />
              <span>{media.vote_average.toFixed(1)}</span>
            </div>

            <div className="text-base text-text/70 font-medium flex gap-2 items-center">
              <Date className="" />
              <time>
                {FormatDate(media.release_date ?? media.first_air_date)}
              </time>
            </div>
          </div>

          <span className="text-primary/80 bg-primary/10 border border-primary/80 drop-shadow-main rounded-full px-4 py-1 text-sm font-medium items-center justify-center">
            #{index + 1}
          </span>
        </div>

        <p className="text-clip overflow-hidden text-text/50 line-clamp-3">
          {media.overview}
        </p>
      </div>
    </article>
  );
}
