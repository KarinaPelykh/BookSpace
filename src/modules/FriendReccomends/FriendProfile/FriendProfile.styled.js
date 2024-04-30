import styled from 'styled-components';

export const FriendProfileContainer = styled.div`
  outline: 1px solid red;
  /* width: 104px;
  height: 208px; */
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 78px;
    height: 78px;
    border: none;
    border-radius: 16px;
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
