import React from "react";
import MapSection from "./Map";
import NewsSection from "./News";
import * as S from "./styles";

function MapAndNewsSection() {
  return (
    <S.Wrapper className="container">
      <div>
        <MapSection />
      </div>
      <div>
        <S.Line>Travel Everywhere</S.Line>
      </div>
      <div>
        <NewsSection />
      </div>
    </S.Wrapper>
  );
}

export default MapAndNewsSection;
