import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 80px;
`;
export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.3;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
`;
export const Button = styled.button`
  margin-left: 48px;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.background.green};
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radii.s};
`;

export const Text = styled.button``;
