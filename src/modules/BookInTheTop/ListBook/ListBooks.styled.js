import styled from 'styled-components';

export const ListBook = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  li:last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;
