import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 439px;
`;
export const Span = styled.span``;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin: 0px 22px 0px 5px;

  fill: #fff;
`;
export const Div = styled.div`
  width: 363px;
  height: 14px;
  border: ${({ theme }) => theme.border.normal};
  border-color: ${({ theme }) => theme.color.grey};
  border-radius: 6px;
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const SpanTwo = styled.span`
  color: ${({ theme }) => theme.color.grey};
  margin-left: 7px;
`;
