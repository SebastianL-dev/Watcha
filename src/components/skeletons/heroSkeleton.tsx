export default function HeroSkeleton() {
  return (
    <section
      className="flex mx-[10%] h-screen items-center"
      aria-label="Hero section with trending media"
    >
      <div className="flex w-full h-screen hero-image absolute inset-0"></div>

      <article className="flex flex-col relative z-50 text-text">
        <ul className="flex gap-4">
          <li>
            <div className="text-base text-text/70 mb-8 font-medium flex gap-2 items-center">
              <div className="h-4 w-4 mr-1 bg-neutral-700 rounded-full animate-pulse" />
              <div className="h-4 w-12 bg-neutral-700 rounded-full animate-pulse" />
            </div>
          </li>

          <li>
            <div className="h-4 w-14 bg-sky-950 rounded-full animate-pulse" />
          </li>
        </ul>

        <ul className="flex gap-6 mb-4 text-lg font-semibold">
          <li className="flex gap-2 items-center">
            <div className="h-5 w-5 bg-neutral-600 rounded-full animate-pulse" />
            <div className="h-5 w-10 bg-neutral-600 rounded-md animate-pulse" />
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <div className="h-5 w-5 bg-neutral-600 rounded-full animate-pulse" />
            <div className="h-5 w-16 bg-neutral-600 rounded-md animate-pulse" />
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <div className="h-16 w-80 bg-neutral-500 rounded-xl animate-pulse" />
          <div className="h-8 w-64 bg-neutral-600 rounded-lg animate-pulse" />
        </div>

        <ul className="flex gap-4 text-sm my-6" aria-label="Generes Skeleton">
          <li className="flex gap-2 items-center">
            <div className="h-5 w-12 bg-primary/20 rounded-full animate-pulse" />
          </li>

          <li className="flex gap-2 items-center text-text/60 font-normal">
            <div className="h-5 w-16 bg-primary/20 rounded-full animate-pulse" />
          </li>
        </ul>

        <div className="flex flex-col gap-2 mb-20">
          <div className="h-4 w-96 bg-neutral-700 rounded-full animate-pulse" />
          <div className="h-4 w-92 bg-neutral-700 rounded-full animate-pulse" />
          <div className="h-4 w-94 bg-neutral-700 rounded-full animate-pulse" />
          <div className="h-4 w-72 bg-neutral-700 rounded-full animate-pulse" />
        </div>

        <ul className="flex gap-6" aria-label="Action buttons Skeleton">
          <li>
            <div className="h-11 w-38 bg-primary/40 rounded-full animate-pulse" />
          </li>
        </ul>
      </article>
    </section>
  );
}
