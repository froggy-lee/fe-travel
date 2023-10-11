"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BannerSection() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="d-block w-100"
            src={"/images/banner/banner1.jpg"}
            width={1440}
            height={750}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="d-block w-100"
            src={"/images/banner/banner2.jpg"}
            width={1440}
            height={750}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="d-block w-100"
            src={"/images/banner/banner3.jpg"}
            width={1440}
            height={750}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="d-block w-100"
            src={"/images/banner/banner4.jpg"}
            width={1440}
            height={750}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerSection;
