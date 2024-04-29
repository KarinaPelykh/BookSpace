import styled from 'styled-components';

export const Container__header = styled.header`
  max-width: 375px;
  margin: auto;

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Navigation__nav = styled.nav`
  width: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
    position: relative;
    justify-content: space-between;
  }
`;
