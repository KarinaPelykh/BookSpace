import styled from 'styled-components';

export const DescriptionDiv = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  margin-top: 16px;
  border-bottom: 0.5px solid ${({ theme }) => theme.background.grey};

  @media screen and (min-width: 1024px) {
    grid-column: 2/ 3;
    grid-row: 1;
    margin-top: 0;
    border-bottom: 0;
  }
`;

export const QuoteUl = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-top: 16px;
  font-family: 'Manrope', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const DateUl = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
  margin-top: 8px;
  font-family: 'Manrope', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.darkGray};

  span {
    margin-right: 3px;
  }
`;

export const DescriptionText = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: 4px;
  line-height: 150%;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  &.active {
    overflow: visible;
    display: block;
  }
`;
