import styled from 'styled-components';
import { Button } from '../BookInTheTop/BookInTheTop.styled';
import { desktop, tablet } from '../../service/breakpoints/breakpoints';

export const LastSectionButton = styled(Button)`
  margin-bottom: 56px;
  margin-top: 80px;
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 80px;
    margin-top: 32px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 168px;
  }
`;
