"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

export default function MainSwiper() {
  return (
    <Swiper className="h-64 w-50" spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <article>
          <Image src={"/"} alt="" fill priority />

          <div></div>
        </article>
      </SwiperSlide>
    </Swiper>
  );
}
