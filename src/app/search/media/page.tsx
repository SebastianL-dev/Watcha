import { Metadata } from "next";
import SearchMedia from "./searchMedia";

export const metadata: Metadata = {
  title: "Watcha | Search Media",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page() {
  return <SearchMedia />;
}
