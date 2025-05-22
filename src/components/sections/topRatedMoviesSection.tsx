import { Trophy } from "../icons/trophy";
import TopRatedMovieList from "../ui/topRatedMovieList";

export default function TopRatedMoviesSection() {
  return (
    <section className="flex flex-col w-[calc(100_-_margin)] my-42 min-h-[670px]">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Trophy />
        <h2 className="font-bold text-3xl">Top Rated Movies</h2>
      </div>

      <TopRatedMovieList />
    </section>
  );
}
