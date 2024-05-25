import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 6px;
`;
export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
`;
export const Svg = styled.svg`
  margin-left: 6px;
  width: 148px;
  height: 24px;
  stroke: #004d40;
  fill: #fff;
  ${({ $variant }) =>
    $variant === 'position' &&
    css`
      margin-left: auto;
    `}
`;
export const CalledMark = styled.p``;
