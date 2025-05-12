import MainHero from "@/components/sections/mainHero";
import PopularMoviesSection from "@/components/sections/popularMoviesSection";
import TrendingSection from "@/components/sections/trendingSection";

export default function Home() {
  return (
    <main className="mb-12">
      <MainHero />
      <TrendingSection />
      <PopularMoviesSection />
    </main>
  );
}
