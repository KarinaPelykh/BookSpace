import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 16px;
  margin-top: 32px;
  line-height: 1.5;
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 1.33;
    margin-bottom: 32px;
    /* margin-top: 80px; */
  }
`;
export const Button = styled.button`
  display: flex;
  margin: 0 auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkGray};
  svg {
    margin-left: 3px;
  }
`;
