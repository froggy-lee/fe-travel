"use client";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: var(--textPrimary);
  button {
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    &:first-child {
      border-right: 2px solid #fff;
    }
  }
`;
