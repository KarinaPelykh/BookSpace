import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: 0 20px 0 20px;
  border: 3px solid red;
  @media screen and (min-width: 375px) {
    max-width: 335px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 976px;
    padding: 0 24px 0 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1280px;
    padding: 0 80px 0 80px;
  }
`;
