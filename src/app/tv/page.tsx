import { Metadata } from "next";
import TvSeries from "./tvSeries";

export const metadata: Metadata = {
  title: "Watcha | Tv Series",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page() {
  return <TvSeries />;
}
