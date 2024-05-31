import styled from 'styled-components';

export const Section = styled.div`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;

  color: ${({ theme }) => theme.color.black};
  background: #f7f9f9;
  border-bottom: 0.5px solid ${({ theme }) => theme.background.grey};
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ImageBox = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
export const Image = styled.img`
  width: 118px;
  height: 183px;
  border-radius: 10px;

  margin: 0px auto 16px auto;

  @media screen and (min-width: 1024px) {
    margin: 0px 32px 24px 0px;
    width: 178px;
    height: 275px;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 287px;
  margin-bottom: 16px;
  li {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.darkGray};
  }

  @media screen and (min-width: 1024px) {
    width: 414px;
  }
`;

export const RetingBox = styled.div`
  width: 335px;

  span {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }

  button {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    width: 398px;
  }
`;
export const RetingButtonSvg = styled.svg`
  fill: #f7f9f9;
  stroke: black;
`;
