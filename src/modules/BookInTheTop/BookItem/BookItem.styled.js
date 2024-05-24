import styled, { css } from 'styled-components';

export const Item = styled.li`
  margin-right: 16px;

  @media screen and (min-width: 1024px) {
    width: 122px;
    margin-right: 67px;
  }
`;
export const Images = styled.img`
  width: 54px;
  height: 85px;
  border-radius: ${({ theme }) => theme.radii.xs};
  @media screen and (min-width: 1024px) {
    width: 124px;
    height: 195px;
    margin-bottom: 8px;
  }
`;
export const Title = styled.h2`
  display: none;
  ${({ $variant }) =>
    $variant === 'slider' &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.m};
      width: 122px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    `}
  @media screen and (min-width: 1024px) {
    width: 122px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};

    margin-bottom: 4px;
  }
`;
export const Author = styled.p`
  display: none;
  ${({ $variant }) =>
    $variant === 'slider' &&
    css`
      display: flex;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.darkGray};
    margin-bottom: 8px;
    white-space: nowrap;
  }
`;
export const Rating = styled.p`
  display: none;
  svg {
    display: none;
  }
  ${({ $variant }) =>
    $variant === 'slider' &&
    css`
      display: flex;
      svg {
        display: flex;
      }
    `}
  @media screen and (min-width: 1024px) {
    display: flex;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.darkGray};
    justify-content: center;
    svg {
      display: flex;
      margin-right: 5px;
    }
  }
`;
