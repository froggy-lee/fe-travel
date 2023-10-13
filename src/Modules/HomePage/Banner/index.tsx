"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import moment from "moment";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import * as S from "./styles";
import { useGetWeather } from "@/api/weather/queries";

function BannerSection() {
  const time = moment().format("DD/MM/YYYY \n  HH:mm");
  const { data } = useGetWeather();
  const { weather } = data || "";
  return (
    <>
      <div className="position-relative">
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
        <S.WrapperTime className="container">
          <div className="row">
            <article className="col-12 col-xl row text-center">
              <div className="col">
                <span className="fs-2 fw-bold">Đà Nẵng</span>
                <br />
                <span>Việt Nam</span>
              </div>
              <div className="col">
                {weather && (
                  <Image
                    src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                    width={100}
                    height={100}
                    alt="icon"
                  />
                )}
              </div>
              <div className="col">
                <span className="fs-2 fw-bold">Nhiệt độ</span>
                <br />
                <span>{data?.main.temp}°C</span>
              </div>
              <div className="col mt-3">{time}</div>
            </article>
            <article className="col-12 col-xl row text-center pt-4 pt-xl-0">
              <div className="col">
                <span className="fs-2 fw-bold">Giờ mở cửa</span>
                <br />
                <span>08:00</span>
              </div>
              <div className="col-2 mt-3">Đến</div>
              <div className="col">
                <span className="fs-2 fw-bold">Cáp treo</span>
                <br />
                <span>22:00</span>
              </div>
            </article>
          </div>
        </S.WrapperTime>
      </div>
    </>
  );
}

export default BannerSection;
