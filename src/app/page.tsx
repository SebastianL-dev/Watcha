import Footer from "@/components/layout/footer";
import MainHero from "@/components/sections/mainHero";
import PopularMoviesSection from "@/components/sections/popularMoviesSection";
import PopularTvSection from "@/components/sections/popularTvSection";
import TopRatedMoviesSection from "@/components/sections/topRatedMoviesSection";
import TrendingSection from "@/components/sections/trendingSection";

export default function Home() {
  return (
    <>
      <main className="mb-12">
        <MainHero />
        <TrendingSection />
        <PopularMoviesSection />
        <TopRatedMoviesSection />
        <PopularTvSection />
      </main>
      <Footer />
    </>
  );
}
