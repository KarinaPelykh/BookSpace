import styled from 'styled-components';

export const PreviewBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  height: 100%;
  padding-top: 33px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: 1fr 672px 1fr;
    grid-template-rows: auto auto;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 892px 1fr;
    grid-template-rows: auto auto;
  }
`;

export const UserDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 1;

  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    grid-column: 1/ 2;
    grid-row: 1;
    align-items: start;
  }
`;
export const ButtonDiv = styled.div`
  grid-column: 1 / 3;
  margin-top: 24px;

  lable {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 16px;
  }
  input {
    border: 1px solid ${({ theme }) => theme.color.green};
    border-radius: 8px;
    width: 24px;
    height: 24px;
  }

  button {
    border-radius: 14px;
    padding: 10px 14px;
    width: 131px;
    height: 44px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.background.green};
    margin-top: 16px;
    @media screen and (min-width: 1024px) {
      margin-top: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    grid-row: 2;
    grid-column: 1 / 4;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    border-top: 0.5px solid ${({ theme }) => theme.background.grey};
  }
`;

export const UserWrapp = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    margin-right: 57px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0px;
  }
`;
export const Images = styled.img`
  margin-bottom: 14px;
  border-radius: ${({ theme }) => theme.radii.round};
`;
export const BookCalled = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-align: center;
  width: 135px;
`;
export const AmountBook = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.5;
  text-align: center;
`;
export const Button = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radii.s};
  background-color: ${({ theme }) => theme.background.green};
  line-height: 1.5;
  text-align: center;
  padding: 10px 14px;
  width: 124px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;
