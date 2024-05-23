import styled from 'styled-components';
export const Section = styled.section`
  @media screen and (min-width: 1024px) {
    margin-bottom: 80px;
  }
`;
export const AboutAuthor = styled.p`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 1.33;
    margin-bottom: 32px;
  }
`;
export const Div = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: start;
  }
`;

export const UserWrapp = styled.div`
  @media screen and (min-width: 1024px) {
    margin-right: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5;
    width: 1070px;

    &.active {
      overflow: hidden;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      margin-bottom: 16px;
    }
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
