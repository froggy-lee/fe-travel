"use client";
import styled from "styled-components";
import Link from "next/link";

export const Nav = styled.nav<{ $toggle?: boolean }>`
  background: #e3f2fd;
  position: relative;
  z-index: 9;
  @media (max-width: 1199px) {
    position: fixed;
    z-index: 999;
    top: 0;
    left: ${(props) => (props.$toggle ? 0 : "-210px")};
    bottom: 0;
    width: 202px;
    margin-top: 0rem;
    border-right: 2px solid #a9a9a9;
    transition: all 0.5s;
    .nav-left {
      margin-top: 8rem !important;
    }
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  border-bottom: 4px solid #e3f2fd;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 24px;
  color: #02aaeb;
  &.active {
    border-bottom: 4px solid var(--textPrimary);
  }
  &:hover {
    border-bottom: 4px solid var(--textPrimary);
  }
  &.buy-ticket {
    padding: 0.7rem !important;
  }
`;

export const BuyTicket = styled.button`
  padding: 0.5rem;
  border-radius: 10px;
  color: #fff;
  line-height: 18px;
  background: var(--textPrimary);
`;

export const Logo = styled(Link)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -24%);
  cursor: pointer;
  @media (max-width: 1199px) {
    left: 0rem;
    top: 1rem;
    transform: translate(0, 0);
    img {
      width: 200px;
      height: 85px;
    }
  }
`;
