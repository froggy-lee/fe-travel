"use client";
import styled from "styled-components";
import { Wrapper, Title, FormWrapper, Erros } from "../LoginPage/styles";

export const WrapperRegister = styled(Wrapper)`
  z-index: -1;
  background: url("/images/bg-login.png") no-repeat;
  a {
    color: #fff;
  }
`;

export const TitleRegister = styled(Title)``;

export const WrapperFrom = styled(FormWrapper)`
  width: 55rem;
`;
export const RegisterErros = styled(Erros)``;
