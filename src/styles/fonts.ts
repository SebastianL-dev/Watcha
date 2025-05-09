import { Lato, Knewave } from "next/font/google";

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
});

export const knewave = Knewave({
  weight: "400",
  style: "normal",
});
