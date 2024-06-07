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
  margin-top: 24px;
  span {
    margin-left: 16px;
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
