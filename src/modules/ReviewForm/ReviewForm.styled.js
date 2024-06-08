import styled from 'styled-components';

export const ReviewSection = styled.section`
  padding-top: 32px;
  padding-bottom: 80px;

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding-top: 82px;
    padding-bottom: 172px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 150px;
  }
`;
export const DateDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 124px;
  }
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
  padding-right: 10px;
  width: 100%;
  height: 489px;
  resize: both;
  margin-top: 24px;
`;

export const QuoteSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 16px;
  width: 100%;
  height: 75px;
  padding-left: 20px;
  margin-bottom: 16px;
`;
export const QuoteButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 14px;
  padding: 10px 14px;

  color: ${({ theme }) => theme.color.green};
  line-height: 1.5;
`;

export const DateButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 14px;
  padding: 10px 14px;

  line-height: 1.5;

  color: ${({ theme }) => theme.color.green};
  margin-top: 24px;
`;
export const NotesTextarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.color.green};
  border-radius: 16px;
  width: 100%;
  height: 130px;
  padding-left: 32px;
  padding-top: 24px;
  resize: none;
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
  button {
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-top: -50px;
  }
`;

export const PublickButton = styled.button`
  border-radius: 14px;
  padding: 10px 14px;
  width: 131px;
  height: 44px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.background.green};
  margin-top: 16px;
`;
