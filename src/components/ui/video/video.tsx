export default function VideoComponent({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <iframe
      className="w-full h-[calc(100dvh-15rem)]"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&si=Ywz7WUfIigtiwQCi`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
