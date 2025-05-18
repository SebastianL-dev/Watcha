import "swiper/css";
import "swiper/css/navigation";
import MediaCardSkeleton from "../skeletons/mediaCardSkeleton";

export default function SliderSkeleton() {
  return (
    <div className="relative min-h-[460px] flex items-center w-full">
      <ul className="flex mx-[10%] gap-2.5 min-h-[428px] w-full">
        <li className="w-full">
          <MediaCardSkeleton />
        </li>
        <li className="w-full max-sm:hidden">
          <MediaCardSkeleton />
        </li>
        <li className="w-full max-md:hidden">
          <MediaCardSkeleton />
        </li>
        <li className="w-full max-lg:hidden">
          <MediaCardSkeleton />
        </li>
        <li className="w-full max-xl:hidden">
          <MediaCardSkeleton />
        </li>
        <li className="w-full max-2xl:hidden">
          <MediaCardSkeleton />
        </li>
      </ul>
    </div>
  );
}
