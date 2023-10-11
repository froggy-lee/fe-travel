import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/images/bg-login1.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  a {
    color: #fff;
  }
`;

export const FormWrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  width: 35rem;
  max-width: 95%;
  padding: 4rem;
  border-radius: 10px;

  @media (max-width: 576px) {
    padding: 4rem 2rem;
  }
`;
export const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--textPrimary);
`;

export const Erros = styled.div`
  font-size: 12px;
  color: red;
  height: 16px;
`;
