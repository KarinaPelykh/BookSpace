import styled from 'styled-components';

export const DateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  select {
    border: 1px solid ${({ theme }) => theme.background.grey};
    border-radius: 8px;
    padding: 8px;

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const DatePickerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 316px;

  p {
    margin-top: 24px;
  }
`;
