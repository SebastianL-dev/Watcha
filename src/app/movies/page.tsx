import { Metadata } from "next";
import Movies from "./movies";

export const metadata: Metadata = {
  title: "Watcha | Movies",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page() {
  return <Movies />;
}
