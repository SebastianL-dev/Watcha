import { NoImage } from "../icons/image";

export default function MediaCardSkeleton() {
  return (
    <article className="flex flex-col rounded-xl overflow-hidden border-2 border-neutral-800 h-full w-full">
      <div className="flex relative h-[350px] media-image-card text-text/30 justify-center items-center animate-pulse">
        <NoImage width={100} height={100} aria-label="Loading image" />
      </div>

      <div className="flex flex-col gap-2 bg-neutral-950 backdrop-blur-sm p-2 grow z-10">
        <header>
          <div className="h-5 w-28 bg-neutral-600 rounded-md animate-pulse" />
        </header>

        <footer className="flex justify-between text-sm">
          <div className="h-4 w-14 bg-neutral-700 rounded-full animate-pulse" />

          <div className="flex gap-3 items-center">
            <div className="h-4 w-12 bg-sky-950 rounded-full animate-pulse" />

            <div className="text-amber-300 flex items-center gap-1">
              <div className="h-4 w-4 mr-1 bg-neutral-700 rounded-full animate-pulse" />
              <div className="h-4 w-8 bg-neutral-700 rounded-full animate-pulse" />
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
