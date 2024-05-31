import styled from 'styled-components';

export const Container__header = styled.header`
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.background.beige} 50%,
    rgba(233, 211, 190, 0.7) 50%
  );

  @media screen and (min-width: 1024px) {
    background-color: ${({ theme }) => theme.background.beige};
  }
`;

export const Navigation__nav = styled.nav`
  max-width: 375px;
  margin: auto;
  @media screen and (min-width: 1024px) {
    display: flex;
    max-width: 1024px;
    position: relative;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
