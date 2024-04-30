import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 32px;
`;
export const TitleReview = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};

  color: ${({ theme }) => theme.color.black};
  margin-bottom: 32px;
  margin-top: 32px;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 22px;
`;
export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin-bottom: 8px;
`;
export const Description = styled.p`
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
`;

export const ButtonOpen = styled.button`
  display: flex;
  margin: 0 auto 0 auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkGray};
  svg {
    margin-left: 3px;
  }
`;
export const WrapperSvg = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
`;
export const Value = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.grey};
`;
