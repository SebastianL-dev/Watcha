import ContentRatings from "@/interfaces/contentRatings.interface";

export default function FormatTvClasification(
  clasification: ContentRatings[]
): string {
  const usContent = clasification.find(
    (release) => release.iso_3166_1 === "US"
  );

  if (!usContent) return "";

  return usContent.rating;
}
