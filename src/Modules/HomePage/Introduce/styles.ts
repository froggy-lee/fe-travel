"use client";
import styled from "styled-components";

export const IntroWrapper = styled.section`
  margin-top: 5rem;
  background: url("/images/bg-introduce.png") no-repeat;
  background-size: 100% 100%;
`;

export const IntroContent = styled.article`
  background: #f8e293;
  font-size: 14px;
`;

export const ListNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 991.5px) {
    grid-template-columns: 1fr;
  }
`;
