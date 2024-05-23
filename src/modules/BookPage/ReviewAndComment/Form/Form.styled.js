import styled from 'styled-components';

export const FormReview = styled.form``;
export const Label = styled.label`
  display: flex;
`;
export const Input = styled.input`
  border: ${({ theme }) => theme.border.normal};
  border-radius: ${({ theme }) => theme.radii.m};
  border-color: ${({ theme }) => theme.color.green};
  width: 690px;
  padding: 6px 16px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
`;
export const Button = styled.button`
  margin-left: 16px;
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;
