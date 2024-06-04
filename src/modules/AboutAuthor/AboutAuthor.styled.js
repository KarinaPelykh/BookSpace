import { desktop, tablet } from '../../service/breakpoints/breakpoints';

import styled from 'styled-components';

export const AuthorSectionContainer = styled.div`
  margin-block: 32px;

  @media screen and (min-width: ${tablet}) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
    margin-block: 40px;
  }
`;

export const AuthorPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 32px; */
  margin-bottom: 24px;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${tablet}) {
    min-width: 180px;
    img {
      width: 180px;
      height: 180px;
    }
  }
  @media screen and (min-width: ${desktop}) {
  }

  button {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.radii.s};
    background-color: ${({ theme }) => theme.background.green};
    line-height: 1.5;
    text-align: center;
    padding: 10px 14px;
  }

  span {
    color: ${({ theme }) => theme.color.grey};
    text-align: center;

    font-size: ${({ theme }) => theme.fontSize.m};

    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 1.5;

    @media screen and (min-width: ${tablet}) {
      margin-bottom: 8px;
    }
  }
`;
export const AuthorTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column;
  margin-bottom: 16px;
  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.lx};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.5;
  }
  p {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.25;
  }
  @media screen and (min-width: ${tablet}) {
    align-items: flex-start;
  }
`;
export const AuthorDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 32px;

  @media screen and (min-width: ${tablet}) {
    padding-bottom: 68px;
    border-bottom-width: 0.5px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.color.grey};
  }
  @media screen and (min-width: ${desktop}) {
    padding-bottom: 92px;
  }
  button {
    align-self: center;
    @media screen and (min-width: ${tablet}) {
      align-self: flex-end;
    }
  }

  p button {
    display: none;
  }

  @media screen and (min-width: ${desktop}) {
    button {
      display: none;
    }
    p button {
      display: inline-flex;
      margin-left: 4px;
      margin-top: 0;
    }
  }
  h4 {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.33;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.color.black};
    line-height: 1.5;
    /* max-height: 240px;
    overflow: hidden; */
  }
`;
