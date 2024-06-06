import styled from 'styled-components';

export const BookDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  justify-self: end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 124px;

  @media screen and (min-width: 1024px) {
    grid-column: 3/ 4;
    grid-row: 1;
    justify-content: start;
  }
`;
export const Images = styled.img`
  height: 183px;
  border-radius: ${({ theme }) => theme.radii.xs};
  margin-bottom: 8px;
`;
export const Title = styled.h2`
  font-family: 'Manrope', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-align: center;
`;
export const Author = styled.p`
  font-family: 'Manrope', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.color.darkGray};
`;
export const Rating = styled.p`
  display: flex;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.darkGray};
  justify-content: center;
  svg {
    display: flex;
    margin-right: 5px;
  }
`;
