import { getImageUrl } from "@/services/tmdb";
import FormatDate from "@/utils/formatDate";
import Image from "next/image";
import { Star } from "@/components/icons/star";
import { Date } from "@/components/icons/date";
import * as motion from "motion/react-client";
import MainLinkButton from "@/components/ui/buttons/mainLinkButton";
import { Play } from "@/components/icons/play";
import { External } from "@/components/icons/external";
import Serie from "@/interfaces/serie.interface";
import FormatTvClasification from "@/utils/formatTvClasification";
import ContentRatings from "@/interfaces/contentRatings.interface";
import { Tv } from "@/components/icons/tv";

export default function HeroSerie({
  serie,
  rating,
}: {
  serie: Serie;
  rating: ContentRatings[];
}) {
  const clasification = FormatTvClasification(rating);

  const rateColor = () => {
    if (clasification === "TV-Y")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-Y7")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-G")
      return "bg-primary/15 border-primary/85 text-primary/85 drop-shadow-main";
    if (clasification === "TV-PG")
      return "bg-sky-500/10 border-sky-500/85 text-sky-500/85 drop-shadow-blue";
    if (clasification === "TV-14")
      return "bg-amber-300/10 border-amber-300/85 text-amber-300/85 drop-shadow-yellow";
    if (clasification === "TV-MA")
      return "bg-red-500/10 border-red-500/85 text-red-500/85 drop-shadow-red";
  };
  return (
    <>
      <div className="flex w-full h-screen hero-image absolute inset-0">
        <Image
          src={getImageUrl(serie.backdrop_path)}
          alt={serie.name}
          fill
          priority
          className="object-cover hero-image relative z-0"
        />
      </div>

      <article className="flex flex-col relative z-50 text-text">
        <ul className="flex gap-4 items-center w-fit mb-8">
          <li className="h-fit flex">
            <div className="text-base text-text/70 font-medium flex gap-2 items-center">
              <Tv />
              <div className="flex items-center">
                <span>
                  Season{" "}
                  <span className="text-primary">
                    {serie.last_episode_to_air.season_number}
                  </span>
                </span>

                <div className="w-1 h-1 rounded-full bg-text/40 mx-2" />

                <span>
                  Episode{" "}
                  <span className="text-primary">
                    {serie.last_episode_to_air.episode_number}
                  </span>
                </span>

                <div className="w-1 h-1 rounded-full bg-text/40 mx-2" />

                <span
                  className={`${
                    serie.in_production
                      ? "text-sky-400/60 text-shadow-blue"
                      : "text-text/40 text-shadow-text"
                  }`}
                >
                  {serie.in_production ? "In production" : "Completed"}
                </span>
              </div>
            </div>
          </li>
          <li>
            <span
              className={`font-light border-1 text-sm px-2.5 py-0.5 rounded-full ${rateColor()}`}
            >
              {clasification}
            </span>
          </li>
        </ul>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <Star className="text-amber-300" />
            <span>{serie.vote_average.toFixed(1)}</span>
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <Date className="" />
            <time>{FormatDate(serie.first_air_date)}</time>
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black">{serie.name}</h1>

          {serie.tagline && (
            <p className="text-xl font-medium text-text/75">{serie.tagline}</p>
          )}
        </div>

        <ul className="flex gap-4 text-sm my-6" aria-label="Generes">
          {serie.genres.map((genere) => {
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

        <p className="max-w-xl text-text/90 mb-16">{serie.overview}</p>

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
          {serie.homepage && (
            <li>
              <MainLinkButton
                text="Home page"
                primary={false}
                blank
                icon={<External />}
                href={serie.homepage}
              />
            </li>
          )}
        </ul>
      </article>
    </>
  );
}
