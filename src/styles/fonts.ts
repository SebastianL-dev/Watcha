import { Poppins, Knewave } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
});

export const knewave = Knewave({
  weight: "400",
  style: "normal",
});
