import styled from 'styled-components';
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 56px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;
export const Div = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Images = styled.img`
  width: 124px;
  height: 195px;
  margin: 0px auto 0px auto;
  border-radius: ${({ theme }) => theme.radii.xs};
  @media screen and (min-width: 1024px) {
    margin-right: 32px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
export const Title = styled.h1`
  margin: 0px auto 0px auto;
  width: 292px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lx};
  margin-bottom: 4px;
  @media screen and (min-width: 1024px) {
    margin: 0px;
    width: auto;
  }
`;

export const Author = styled.p`
  margin: 0px auto 0px auto;
  width: 161px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  margin-bottom: 16px;
  @media screen and (min-width: 1024px) {
    margin: 0px;
    margin-bottom: 16px;
    width: auto;
  }
`;
export const Span = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.3%;
  margin: 0px 24px 0px 8px;
`;
export const Text = styled.p`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: 1.5;
    margin-right: 16px;
  }
`;

export const Summary = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  margin-bottom: 16px;
  span {
    display: block;
  }
  &.active {
    overflow: visible;
    -webkit-line-clamp: unset;
    display: block;
  }

  @media screen and (min-width: 1440px) {
    width: 1060px;
  }
`;

export const EmptySpan = styled.span`
  @media screen and (min-width: 1024px) {
    height: 1em;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: start;
    flex-direction: row;
  }
`;

export const WrapperRating = styled.div`
  display: flex;
  p {
    margin: 8px 16px 0px 0px;
  }
`;
export const Button = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  margin-right: 28px;
`;
export const Select = styled.select`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5;
    padding: 4px;
    border: ${({ theme }) => theme.border.normal};
    border-color: ${({ theme }) => theme.color.green};
    width: 180px;
    height: 32px;
    border-radius: ${({ theme }) => theme.radii.xss};
  }
`;
export const ButtonShow = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  margin-top: 16px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 1024px) {
    margin-top: 8px;
  }
`;
