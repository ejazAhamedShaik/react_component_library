import React, { useState } from "react";
import { TooltipProps } from "./ITooltip";
import { TooltipTip, TooltipWrapper } from "./styles";

const Tooltip = ({ children, delay, position, content }: TooltipProps) => {
  let timeout: NodeJS.Timeout;
  const [isActive, setIsActive] = useState(false);

  const showTooltip = () => {
    timeout = setTimeout(() => setIsActive(true), delay || 400);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setIsActive(false);
  };
  return (
    <TooltipWrapper onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isActive && (
        <TooltipTip className={position || "top"}>{content}</TooltipTip>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
