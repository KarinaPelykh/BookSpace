import styled from 'styled-components';

export const FormReview = styled.form`
  margin-top: 40px;
  @media screen and (min-width: 1024px) {
    margin-top: 0px;
  }
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  border: ${({ theme }) => theme.border.normal};
  border-radius: ${({ theme }) => theme.radii.m};
  border-color: ${({ theme }) => theme.color.green};
  width: 296px;
  padding: 6px 16px;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGray};
  }
  @media screen and (min-width: 1024px) {
    width: 890px;
  }
  @media screen and (min-width: 1440px) {
    width: 690px;
  }
`;
export const Button = styled.button`
  @media screen and (min-width: 1024px) {
    margin-left: 16px;
  }
`;
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.grey};
`;
