import React from "react";
import * as S from "./styles";
import Image from "next/image";

function NewsItem({ news }: { news: any }) {
  return (
    <S.NewsItemWrapper className="row mt-3">
      <div className="col-4 position-relative">
        <Image src={news.image} fill alt="news" />
      </div>
      <div className="col-8">
        <S.Title>{news.title}</S.Title>
        <S.Content>{news.content}</S.Content>
      </div>
    </S.NewsItemWrapper>
  );
}

export default NewsItem;
