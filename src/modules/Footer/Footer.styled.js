import styled from 'styled-components';
import { tablet, desktop } from '../../service/breakpoints/breakpoints';
import { StyledContainer } from '../../components/Container/Container.styled';
export const FooterSectionContainer = styled.footer`
  background-color: ${props => props.theme.background.beige};

  padding-block: 24px;
  padding-inline: 0;
  @media screen and (min-width: ${tablet}) {
    padding-block: 32px;
  }
`;
export const FooterContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: none;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h3 {
    overflow: hidden;
    color: ${props => props.theme.color.black};
    margin-bottom: 16px;
    text-overflow: ellipsis;

    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 1.5; /* 150% */
  }

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    gap: 110px;
  }
  @media screen and (min-width: ${desktop}) {
  }

  a {
    color: ${props => props.theme.color.darkGray};
    cursor: pointer;
    font: inherit;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;
export const FooterSvgContainer = styled.ul`
  display: flex;
  flex-direction: row !important;
  gap: 16px;

  svg:hover {
    scale: 1.2;
  }
`;
