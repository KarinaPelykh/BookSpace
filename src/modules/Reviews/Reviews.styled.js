import styled, { css } from 'styled-components';

export const TitleReview = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};

  color: ${({ theme }) => theme.color.black};
  margin-bottom: 32px;
  margin-top: 32px;

  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  ${({ $variant }) =>
    $variant === 'bookPage' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
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
  margin-bottom: 32px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 48px;
  }
`;
