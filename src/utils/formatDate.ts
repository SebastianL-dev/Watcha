export default function FormatDate(date: string) {
  const newDate = new Date(date);
  const resultDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return resultDate;
}
