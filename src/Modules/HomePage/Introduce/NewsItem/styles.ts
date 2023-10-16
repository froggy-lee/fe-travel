"use client";
import styled from "styled-components";

export const NewsWrapper = styled.article`
  padding: 0.5rem;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #fef5ef;
    div {
      button {
        background: #d11313;
        color: #fff;
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    background: #f8e293;
    border-radius: 6px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const OutStanding = styled.div`
  position: absolute;
  z-index: 2;
  background: red;
  width: 60%;
  color: #fff;
  text-align: center;
  transform: rotate(40deg);
  right: -20%;
  top: 7%;
  padding: 0.3rem;
`;

export const Title = styled.div`
  color: #de1313;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-transform: uppercase;
  font-size: 25px;
  @media (max-width: 1199px) {
    font-size: 18px;
  }
`;

export const NewsContent = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* number of lines to show */
  line-clamp: 6;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #454545;
  margin: 2rem 0;
`;
