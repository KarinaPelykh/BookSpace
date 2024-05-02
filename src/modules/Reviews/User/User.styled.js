import styled from 'styled-components';
export const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 23px;
  }
`;

export const Images = styled.img`
  margin-bottom: 14px;
  border-radius: ${({ theme }) => theme.radii.round};
`;

export const UserName = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 4px;
  line-height: 150%;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.darkGray};
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.background.green};
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radii.s};
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
  @media screen and (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
