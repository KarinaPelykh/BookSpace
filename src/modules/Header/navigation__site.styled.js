import styled from 'styled-components';

export const Navigation__site__ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 23px;
  gap: 16px;
  background-color: rgba(233, 211, 190, 0.7);
  font-family: 'Manrope', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.color.darkGray};

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    position: absolute;
    justify-content: start;
    padding: 0;
    left: 210px;
    top: 18px;
    width: 550px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    justify-content: start;
    padding: 0;
    left: 280px;
    top: 15px;
    width: 860px;
  }
`;

export const Navigation__site__item = styled.li`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: auto;
  }
`;
export const Navigation__site__item__button = styled.button`
  display: flex;
  align-items: center;
`;

export const Icon_down_svg = styled.svg``;

export const Plas__svg = styled.svg`
  fill: #e9d3be;
  stroke: black;
  margin-left: 8px;
`;
