import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as S from "./styles";

function Footer() {
  return (
    <S.Footer>
      <main className="container d-flex flex-column flex-lg-row justify-content-between">
        <article className="d-flex justify-content-center">
          <Link href={"/"}>
            <Image
              src={"/images/logo/logo.png"}
              width={300}
              height={150}
              alt="logo"
            />
          </Link>
        </article>
        <S.ListMenu>
          <Link href={"/"} className="p-2 fs-5">
            Trang chủ
          </Link>
          <Link href={"/"} className="p-2 fs-5">
            Giới Thiệu
          </Link>
          <Link href={"/"} className="p-2 fs-5">
            Tin Tức
          </Link>
          <Link href={"/"} className="p-2 fs-5">
            Bản Đồ
          </Link>
          <Link href={"/login"} className="p-2 fs-5">
            Đăng Nhập
          </Link>
          <Link href={"/register"} className="p-2 fs-5">
            Đăng Kí
          </Link>
        </S.ListMenu>
        <article>
          <h5 className="fw-bold">Liên Hệ</h5>
          <p>
            <span className="fw-bold">Địa chỉ: </span>
            <span>
              Thôn An Sơn, xã Hòa Ninh, huyện Hòa Vang, TP Đà Nẵng, Việt Nam
            </span>
          </p>
          <p className="fw-bold">Hotline: + 84 (0) xxx xxx xxx</p>
          <p>
            <span className="fw-bold">Email: </span>
            <span>xxx.xxx@gmail.com</span>
          </p>
        </article>
      </main>
    </S.Footer>
  );
}

export default Footer;
