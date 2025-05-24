import { Metadata } from "next";
import TvPage from "./tv";

export const metadata: Metadata = {
  title: "Watcha | TV",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <TvPage params={params} />;
}
