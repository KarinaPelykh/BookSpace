import styled from 'styled-components';

export const DropDownCatalogUl = styled.ul`
  position: absolute;
  top: 40px;
  left: 105px;
  width: 199px;
  height: 336px;
  border: 0.5px solid ${({ theme }) => theme.color.green};
  border-radius: 8px 8px 0 0;
  box-shadow: -3px 4px 3px 0 rgba(0, 0, 0, 0.1);
  background: #f7f9f9;

  @media screen and (min-width: 1024px) {
    top: 50px;
    left: 81px;
  }
`;
