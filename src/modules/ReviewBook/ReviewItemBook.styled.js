import styled from 'styled-components';
export const Section = styled.div`
  background: #f7f9f9;
  border-bottom: 0.5px solid ${({ theme }) => theme.background.grey};
`;
export const Image = styled.img`
  width: 118px;
  height: 183px;
  border-radius: 10px;

  margin: 0px auto 16px auto;
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
  }
`;

export const RetingBox = styled.div`
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
`;
export const RetingButtonSvg = styled.svg`
  fill: #f7f9f9;
  stroke: black;
`;
