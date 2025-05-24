import { Metadata } from "next";
import Search from "./search";

export const metadata: Metadata = {
  title: "Watcha | Search",
  description: "Find any of your favorite movies and series.",
  icons: {
    icon: "/favicon.webp",
  },
};

export default function Page() {
  return <Search />;
}
