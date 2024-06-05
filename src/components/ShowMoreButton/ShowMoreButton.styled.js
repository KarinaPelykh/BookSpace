import styled from 'styled-components';

export const ShowMoreButtonContainer = styled.button`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.5;
  display: flex;
  align-items: center;
`;
