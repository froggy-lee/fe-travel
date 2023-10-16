"use client";
import styled from "styled-components";

export const NewsItemWrapper = styled.article`
  padding: 0.5rem;
  background: #f7f7f7;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #02aaeb;
    h6 {
      color: #fff;
    }
  }
`;

export const Title = styled.h6`
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-transform: uppercase;
  color: #02aaeb;
`;

export const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
