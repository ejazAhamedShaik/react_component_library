import { ReactNode } from "react";

export interface TooltipProps {
    children: ReactNode
    delay?: number
    position?: string
    content: string
}