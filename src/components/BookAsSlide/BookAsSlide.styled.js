import styled from 'styled-components';

export const ItemContainer = styled.li`
  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  img {
    width: 124px;
    height: 195px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 1024px) {
    :not(img) {
      display: none;
    }

    img {
      height: 85px;
      width: 54px;
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h3`
  @media screen and (min-width: 1024px) {
    width: 122px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};

    margin-bottom: 4px;
  }
`;

export const Author = styled.p`
  display: flex;
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
