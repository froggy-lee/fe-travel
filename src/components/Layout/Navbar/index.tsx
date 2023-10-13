"use client";
import React, { useState } from "react";
import * as S from "./styles";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTicketAlt } from "react-icons/fa";
import { menuLeft, menuRight } from "./data";
import { usePathname } from "next/navigation";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();
  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      {toggle && <S.BackDrop onClick={handleToggle} />}
      <button onClick={handleToggle} className="d-xl-none mx-3 my-2">
        <GiHamburgerMenu size="2rem" />
      </button>
      <S.Nav $toggle={toggle}>
        <section className="container d-flex justify-content-between flex-column flex-xl-row">
          <ul className="nav-left d-flex justify-content-between flex-column flex-xl-row align-items-center mt-5 mt-xl-0 ">
            {menuLeft.map((item) => {
              return (
                <S.MenuItem
                  href={item.href}
                  className={pathName === item.href ? "active p-3" : "p-3"}
                  onClick={handleToggle}
                  key={item.id}
                >
                  {item.title}
                </S.MenuItem>
              );
            })}
          </ul>
          <S.Logo className="logo" href="/">
            <Image
              src={"/images/logo/logo.png"}
              width={350}
              height={150}
              alt="logo"
            />
          </S.Logo>
          <ul className="nav-right d-flex justify-content-between flex-column flex-xl-row align-items-center">
            {menuRight.map((item) => {
              return (
                <S.MenuItem
                  href={item.href}
                  className="p-3"
                  onClick={handleToggle}
                  key={item.id}
                >
                  {item.title}
                </S.MenuItem>
              );
            })}
            <S.MenuItem href="#" className="buy-ticket">
              <S.BuyTicket className="d-flex align-items-center">
                <FaTicketAlt className="me-1" />
                Mua vé
              </S.BuyTicket>
            </S.MenuItem>
          </ul>
        </section>
      </S.Nav>
    </>
  );
}

export default Navbar;
