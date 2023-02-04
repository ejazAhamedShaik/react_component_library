import React, { ReactNode } from "react";
import { Container, Pane } from "./styles";

export interface SplitScreenProps {
  children: ReactNode[];
  leftWeight?: number;
  rightWeight?: number;
}

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
  ...props
}: SplitScreenProps) => {
  const [left, right] = children;
  return (
    <Container>
      {children.map((child) => (
        <Pane weight={1}>{child}</Pane>
      ))}
      {/* <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane> */}
    </Container>
  );
};
