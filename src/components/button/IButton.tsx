import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode
  id: string;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  value: string | number | readonly string[] | undefined;
  onClick: () => void;
  style: object;
  disabled: boolean;
}
