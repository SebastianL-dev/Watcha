import { Metadata } from "next";
import MoviePage from "./movie";

export const metadata: Metadata = {
  title: "Watcha | Movie",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <MoviePage params={params} />;
}
