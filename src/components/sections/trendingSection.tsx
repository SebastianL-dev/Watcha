import { Trend } from "../icons/trend";
import MainSwiper from "../ui/mainSwiper";

export default function TrendingSection() {
  return (
    <section className="flex mx-[10%] items-center flex-col w-fit">
      <div className="text-text flex gap-6 items-center">
        <Trend />
        <h2 className="font-bold text-3xl">Trending</h2>
      </div>

      <div>
        <MainSwiper />
      </div>
    </section>
  );
}
