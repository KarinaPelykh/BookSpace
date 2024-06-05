import styled from 'styled-components';

export const Navigation__box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 21px;
  border-bottom: 1px solid #f0e1d2;

  @media screen and (min-width: 1024px) {
    width: 100%;
    padding: 16px 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 16px 80px;
  }
`;

export const Search__svg = styled.svg`
  fill: #e9d3be;
  stroke: black;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Navigation__form = styled.form`
  position: absolute;
  top: 110px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    display: block;

    top: 90px;
    width: 976px;
  }
  @media screen and (min-width: 1440px) {
    display: block;

    top: 10px;
    left: 550px;
    width: 399px;
    z-index: 2;
  }
`;
export const Navigation__form__input = styled.input`
  border: 1px solid #141414;
  border-radius: 16px;
  padding: 2px 16px;
  width: 330px;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 976px;
    height: 36px;
  }

  @media screen and (min-width: 1440px) {
    width: 399px;
    height: 36px;
  }
`;

export const Navigation__form__button = styled.button``;

export const Navigation__form__button__svg = styled.svg`
  fill: white;
  stroke: black;

  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  fill: white;
`;

export const Logo__box = styled.div``;
export const Logo__svg = styled.svg`
  @media screen and (min-width: 1024px) {
    width: 149px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    left: 80px;
    top: 13px;
  }
`;
export const User__tools__ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 1024px) {
    gap: 42px;
    margin-bottom: 10px;
  }
`;

export const User__tools__item = styled.li`
  display: flex;
  align-items: center;

  &:nth-child(2) {
    display: none;
    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
    }
  }
`;
export const User__svg = styled.svg`
  fill: #e9d3be;
  stroke: black;
  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;
export const Translation__svg = styled.svg`
  fill: #e9d3be;
  stroke: black;
  margin-right: 5px;
`;

export const Jingle__svg = styled.svg`
  fill: #e9d3be;
  stroke: black;
  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
`;
