import styled from 'styled-components';
import { tablet, desktop } from '../../../service/breakpoints/breakpoints';
export const FriendProfileSectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
  /* height: 208px; */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const FriendProfileContainer = styled.div`
  /* width: 104px;
  height: 208px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-self: center; */
  align-self: center;

  @media screen and (min-width: ${tablet}) {
    margin-right: 68px;
  }
  @media screen and (min-width: ${desktop}) {
    flex-direction: 98;
  }
  img {
    width: 78px;
    height: 78px;
    border: none;
    border-radius: 50%;
    margin-bottom: 14px;
  }
  button {
    padding: 10px 14px;
    color: ${({ theme }) => theme.color.green};
    border-radius: 14px;
    border: 1px solid ${({ theme }) => theme.color.green};
   
  }
`;
export const FrienProfileInfoContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  text-align: center;
  line-height: 1.5;
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
