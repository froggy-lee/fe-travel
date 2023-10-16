import React from "react";
import Image from "next/image";
import * as S from "./styles";

function MapSection() {
  return (
    <article>
      <div className="title-section mt-4 mt-lg-0">bản đồ</div>
      <S.ImageWrapper className="position-relative">
        <Image src={"/images/map-travel.png"} fill alt="map" />
      </S.ImageWrapper>
    </article>
  );
}

export default MapSection;
