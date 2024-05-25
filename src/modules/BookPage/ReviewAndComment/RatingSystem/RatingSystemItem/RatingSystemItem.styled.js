import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    width: 439px;
  }
`;
export const Span = styled.span``;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0px 20px 0px 4px;

  fill: #fff;
  @media screen and (min-width: 1024px) {
    margin: 0px 22px 0px 5px;
  }
`;
export const Div = styled.div`
  width: 267px;
  height: 14px;
  border: ${({ theme }) => theme.border.normal};
  border-color: ${({ theme }) => theme.color.grey};
  border-radius: 6px;
  @media screen and (min-width: 1024px) {
    width: 363px;
  }
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const SpanTwo = styled.span`
  color: ${({ theme }) => theme.color.grey};
  @media screen and (min-width: 1024px) {
    margin-left: 7px;
  }
`;
