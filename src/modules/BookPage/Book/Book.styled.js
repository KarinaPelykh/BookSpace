import styled from 'styled-components';
export const Section = styled.section`
  @media screen and (min-width: 1024px) {
    display: flex;
    margin-bottom: 80px;
  }
`;
export const Div = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Images = styled.img`
  width: 54px;
  height: 85px;
  border-radius: ${({ theme }) => theme.radii.xs};
  @media screen and (min-width: 1024px) {
    width: 124px;
    height: 195px;
    margin-right: 32px;
  }
`;
export const Title = styled.h1`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lx};
    margin-bottom: 4px;
  }
`;

export const Author = styled.p`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5;
    margin-bottom: 16px;
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
  @media screen and (min-width: 1024px) {
    width: 1060px;
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
    }
  }
`;

export const EmptySpan = styled.span`
  @media screen and (min-width: 1024px) {
    height: 1em;
  }
`;
export const Wrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5%;
    margin-right: 28px;
  }
`;
export const Select = styled.select`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5%;
    padding: 4px;
    border: ${({ theme }) => theme.border.normal};
    border-color: ${({ theme }) => theme.color.green};
    width: 180px;
    height: 32px;
    border-radius: ${({ theme }) => theme.radii.xss};
  }
`;
export const ButtonShow = styled.button`
  @media screen and (min-width: 1024px) {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5%;
    margin-top: 8px;
    display: flex;
    align-items: center;
  }
`;
