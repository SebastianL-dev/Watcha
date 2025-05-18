import Footer from "@/components/layout/footer";
import MainHero from "@/components/sections/mainHero";
import PopularMoviesSection from "@/components/sections/popularMoviesSection";
import TopRatedSection from "@/components/sections/topRatedSection";
import TrendingSection from "@/components/sections/trendingSection";

export default function Home() {
  return (
    <>
      <main className="mb-12">
        <MainHero />
        <TrendingSection />
        <PopularMoviesSection />
        <TopRatedSection />
      </main>
      <Footer />
    </>
  );
}
