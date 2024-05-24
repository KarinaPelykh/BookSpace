import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 48px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 56px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;
export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.3;
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;
export const DivMain = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Button = styled.button`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.background.green};
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radii.s};
  width: 177px;
  height: 44px;
  @media screen and (min-width: 1024px) {
    margin-left: 48px;
  }
`;

export const Text = styled.button`
  margin-bottom: 8px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;
