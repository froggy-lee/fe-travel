import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import * as S from "./styles";

function Header() {
  return (
    <S.HeaderWrapper>
      <header className="container d-flex justify-content-end align-items-center py-2">
        <button className="px-2">VI</button>
        <button className="px-2">EN</button>
        <button className="px-2">
          <BsFacebook color="#fff" />
        </button>
        <button className="px-2">
          <BsYoutube color="#fff" />
        </button>
        <button className="px-2">
          <BsInstagram color="#fff" />
        </button>
      </header>
    </S.HeaderWrapper>
  );
}

export default Header;
