import styled from 'styled-components';

export const Item = styled.li`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 122px;
    margin-bottom: 12px;
  }
`;
export const Images = styled.img`
  border-radius: ${({ theme }) => theme.radii.xs};

  width: 124px;
  height: 195px;
  margin-bottom: 8px;
`;
export const Title = styled.h2`
  width: 122px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};

  margin-bottom: 4px;
`;
export const Author = styled.p`
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: 8px;
  white-space: nowrap;
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
