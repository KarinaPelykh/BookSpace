import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  /* scrollbar-gutter: stable; */
  z-index: 1;
  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const InnerContainer = styled.div`
  width: fit-content;
  height: fit-content;
`;
