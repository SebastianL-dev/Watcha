import { getImageUrl } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import FormatDuration from "@/utils/formatDuration";
import Image from "next/image";
import { Star } from "@/components/icons/star";
import { Date } from "@/components/icons/date";
import { Clock } from "@/components/icons/clock";
import * as motion from "motion/react-client";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";
import { Play } from "@/components/icons/play";
import { External } from "@/components/icons/external";
import Serie from "@/interfaces/serie.interface";

export default function HeroSerie({ movie }: { movie: Serie }) {
  return (
    <>
      <div className="flex w-full h-screen hero-image absolute inset-0">
        <Image
          src={getImageUrl(movie.backdrop_path)}
          alt={movie.name}
          fill
          priority
          className="object-cover hero-image relative z-0"
        />
      </div>

      <article className="flex flex-col relative z-50 text-text">
        <div className="text-base text-text/70 mb-8 font-medium flex gap-2 items-center">
          <Clock />
          {/* <span>{FormatDuration(movie.runtime ? movie.runtime : 0)}</span> */}
        </div>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <Star className="text-amber-300" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <Date className="" />
            <time>{FormatDate(movie.first_air_date)}</time>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black">{movie.name}</h1>

          {movie.tagline && (
            <p className="text-xl font-medium text-text/75">{movie.tagline}</p>
          )}
        </div>

        <ul className="flex gap-4 text-sm my-6" aria-label="Generes">
          {movie.genres.map((genere) => {
            return (
              <li key={genere.id}>
                <motion.a
                  className="flex gap-2 items-center text-shadow-main drop-shadow-main bg-primary/15 px-3 py-1 rounded-full backdrop-blur-sm"
                  aria-label={`Link to ${genere.name} genere`}
                  href={"/"}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {genere.name}
                </motion.a>
              </li>
            );
          })}
        </ul>

        <p className="max-w-xl text-text/90 mb-16">{movie.overview}</p>

        <ul className="flex gap-6" aria-label="Action buttons">
          <li>
            <MainLinkButton
              text="Watch trailer"
              primary
              blank={false}
              icon={<Play />}
              href=""
            />
          </li>
          {movie.homepage && (
            <li>
              <MainLinkButton
                text="Home page"
                primary={false}
                blank
                icon={<External />}
                href={movie.homepage}
              />
            </li>
          )}
        </ul>
      </article>
    </>
  );
}
