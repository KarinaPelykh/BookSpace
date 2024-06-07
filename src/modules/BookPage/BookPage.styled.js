import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 1024px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const Title = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 1.3;
    margin-bottom: 40px;
    display: flex;
  }
`;

export const WrapperSelect = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #000;
  fill: #fff;
`;
