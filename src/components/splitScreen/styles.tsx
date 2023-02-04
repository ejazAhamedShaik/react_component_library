import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Pane = styled.div<{weight: number}>`
  flex: ${({ weight }) => weight};
`;
