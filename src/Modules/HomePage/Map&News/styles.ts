"use client";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 4rem 1fr;
  @media (max-width: 991.8px) {
    grid-template-columns: 1fr;
  }
`;

export const Line = styled.div`
  position: relative;
  transform: rotate(90deg);
  white-space: nowrap;
  margin-top: 5rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  color: #02aaeb;
  &::before {
    position: absolute;
    content: "";
    width: 8rem;
    height: 0.3rem;
    background: #02aaeb;
    top: 40%;
    left: 15rem;
  }
  @media (max-width: 991px) {
    transform: rotate(0);
    margin: 2rem 0;
  }
`;
