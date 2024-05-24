import styled from 'styled-components';
export const Section = styled.section`
  margin-top: 48px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 56px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;
export const AboutAuthor = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.33;
  margin-bottom: 32px;
`;
export const Div = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: start;
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
`;

export const DescriptionAboutAuthor = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;

  &.active {
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1070px;
  }
`;

export const EmptySpan = styled.span`
  height: 1rem;
`;
export const ButtonShow = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
