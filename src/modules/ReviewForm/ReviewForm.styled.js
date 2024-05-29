import styled from 'styled-components';

export const ReviewSection = styled.section`
  padding-top: 32px;
  padding-bottom: 80px;

  @media screen and (min-width: 1024px) {
    padding-top: 140px;
    padding-bottom: 172px;
  }
`;
export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;
  font-family: 'Manrope', sans-serif;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 8px;

    color: ${({ theme }) => theme.color.black};

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.black};
    width: 325px;
    @media screen and (min-width: 1024px) {
      width: 690px;
    }
  }
`;

export const LableAbout = styled.label`
  margin-top: 32px;
`;

export const ReviewTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 32px;
  padding-left: 32px;
  padding-top: 24px;
  width: 336px;
  height: 489px;
  resize: both;
  margin-top: 24px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 976px;
    height: 436px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`;

export const QuoteSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 16px;
  width: 337px;
  height: 75px;
  margin-bottom: 16px;
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 976px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`;
export const QuoteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 14px;
  padding: 10px 14px;
  width: 110px;
  height: 44px;
  color: ${({ theme }) => theme.color.green};
  line-height: 1.5;
`;

export const DateButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 14px;
  padding: 10px 14px;
  width: 189px;
  height: 44px;
  line-height: 1.5;

  color: ${({ theme }) => theme.color.green};
  margin-top: 24px;
`;
export const NotesTextarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 16px;
  width: 335px;
  height: 130px;
  resize: none;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 976px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`;

export const CheckboxLable = styled.label`
  display: flex;
  margin-top: 16px;
  align-items: center;
  input {
    border: 1px solid ${({ theme }) => theme.color.green};
    border-radius: 8px;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

export const ButtonDiv = styled.div`
  a {
    font-weight: 700;
  }

  button {
    border-radius: 14px;
    padding: 10px 14px;
    width: 131px;
    height: 44px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.background.green};
    margin-top: 16px;
  }
`;