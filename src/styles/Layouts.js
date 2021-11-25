import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;

  @media screen and (max-width: 642px) {
    padding: 4rem;
  }
  @media screen and (max-width: 510px) {
    padding: 2rem;
  }

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem;

  @media screen and (max-width: 642px) {
    padding: 4rem;
  }
  @media screen and (max-width: 510px) {
    padding: 2rem;
  }
`;
