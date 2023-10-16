import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import * as S from "./styles";
import NewsItem from "./NewsItem";

function IntroduceSection() {
  return (
    <S.IntroWrapper className="container-fluid py-5">
      <div className="container">
        <div className="title-section mt-5">Travel</div>
        <div>
          <FaMapLocationDot size="2rem" color="#02aaeb" />
          <span className="ms-2 fs-5 fw-bold" style={{ color: "#02aaeb" }}>
            Địa điểm
          </span>
          <div className="mt-4 fs-4">
            Thôn An Sơn, xã Hòa Ninh, huyện Hòa Vang, TP Đà Nẵng, Việt Nam.
          </div>
        </div>
        <S.IntroContent className="row mt-4">
          <div className="col-12 col-md-5">Video</div>
          <div className="col-12 col-md-7 p-5">
            Đến với Sun World Ba Na Hills, du khách sẽ được trải nghiệm khí hậu
            bốn mùa trong một ngày, chu du trên những tuyến cáp treo, đắm chìm
            trong cảnh quan thiên nhiên của những cánh rừng nguyên sinh nối tiếp
            ở Bà Nà Núi Chúa, thưởng thức ẩm thực đa dạng và tận hưởng không khí
            lễ hội ngập tràn.
            <div className="mt-3">
              <button>XEM THÊM</button>
            </div>
          </div>
        </S.IntroContent>
        <S.ListNews>
          <NewsItem url="/images/news/news1.jpg" />
          <NewsItem url="/images/news/news2.jpg" />
          <NewsItem url="/images/news/news3.jpg" />
        </S.ListNews>
      </div>
    </S.IntroWrapper>
  );
}

export default IntroduceSection;
