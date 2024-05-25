import styled from 'styled-components';
export const Div = styled.div`
  position: absolute;
  right: 0px;
  bottom: -180px;
  z-index: 10000;
`;
export const List = styled.ul`
  overflow: hidden;

  border: ${({ theme }) => theme.border.normal};
  border-radius: ${({ theme }) => theme.radii.s};
  border-color: ${({ theme }) => theme.color.green};
  li {
    border-bottom: ${({ theme }) => theme.border.normal};
    border-color: ${({ theme }) => theme.color.green};
    padding: 8px;
  }
  li:last-child {
    border-bottom: none;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`;
