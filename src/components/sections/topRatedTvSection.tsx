import { Trophy } from "../icons/trophy";
import TopRatedTvList from "../ui/topRatedTvList";

export default function TopRatedTvSection() {
  return (
    <section className="flex flex-col w-[calc(100_-_margin)] my-42 min-h-[670px]">
      <div className="text-text flex gap-4 items-center mb-8 mx-[10%]">
        <Trophy />
        <h2 className="font-bold text-3xl">Top Rated Tv Series</h2>
      </div>

      <TopRatedTvList />
    </section>
  );
}
