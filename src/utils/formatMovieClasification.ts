import ReleaseDates from "@/interfaces/releaseDates.interface";

export default function FormatMovieClasification(
  clasification: ReleaseDates[]
): string {
  const usReleaase = clasification.find(
    (release) => release.iso_3166_1 === "US"
  );

  if (!usReleaase) return "";

  const certification = usReleaase.release_dates.find(
    (release) => release.certification !== ""
  );

  if (!certification) return "";

  return certification.certification;
}
