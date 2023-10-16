"use client";
import styled from "styled-components";

export const Footer = styled.footer`
  background: url("/images/bg-footer.png") no-repeat;
  background-size: cover;
  padding: 4rem 0;
  color: #fff;
  a {
    color: #fff;
    &:hover {
      color: #02aaeb;
    }
  }
`;

export const ListMenu = styled.article`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    margin: 2rem 0;
  }
`;
