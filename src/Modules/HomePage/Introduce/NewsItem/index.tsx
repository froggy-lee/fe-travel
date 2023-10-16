import React from "react";
import * as S from "./styles";
import Image from "next/image";

function NewsItem({ url }: { url: string }) {
  return (
    <S.NewsWrapper className="positon-relative">
      <S.ImageWrapper>
        <Image src={url} fill alt="news" />
        <S.OutStanding>NỔI BẬT</S.OutStanding>
      </S.ImageWrapper>
      <div className="px-4 mt-3">
        <S.Title>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione
        </S.Title>
        <S.NewsContent>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </S.NewsContent>
      </div>
      <div className="mt-3 d-flex justify-content-end">
        <button className="fs-4">&gt;</button>
      </div>
    </S.NewsWrapper>
  );
}

export default NewsItem;
