import styled, { css } from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 22px;
`;
export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.m};
  @media screen and (min-width: 1024px) {
    text-align: start;
  }
`;
export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: 4px;
  line-height: 150%;

  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  &.active {
    overflow: visible;
    display: block;
  }

  ${({ $variant }) =>
    $variant === 'bookPage' &&
    css`
      overflow: visible;
      -webkit-line-clamp: unset;

      @media screen and (min-width: 1440px) {
        width: 1108px;
      }
    `};
`;
export const Wrapper = styled.div`
  margin-top: 20px;
  ${({ $variant }) =>
    $variant === 'bookPage' &&
    css`
      margin-top: 0px;
      @media screen and (min-width: 1024px) {
        margin-top: 5px;
      }
    `}
`;
export const ButtonOpen = styled.button`
  display: flex;
  margin: 0 auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkGray};
  svg {
    margin-left: 3px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto 0 0;
  }

 
`;

export const WrapperSvg = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`;
export const Value = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey};
`;
export const Wrap = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 726px;
    margin-right: 125px;
    padding-top: 40px;
    padding-bottom: 52px;
    height: 240px;
  }
  @media screen and (min-width: 1439px) {
    width: 1075px;
  }
`;
