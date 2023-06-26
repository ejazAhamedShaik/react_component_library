import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { CenterDiv } from "./styles";

export default {
  title: "components/tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const TooltipTop = () => (
  <CenterDiv>
    <Tooltip position="top" content="I am tooltip">
      Hover me
    </Tooltip>
  </CenterDiv>
);

export const TooltipRight = () => (
  <CenterDiv>
    <Tooltip position="right" content="I am tooltip">
      Hover me
    </Tooltip>
  </CenterDiv>
);

export const TooltipLeft = () => (
    <CenterDiv>
      <Tooltip position="left" content="I am tooltip">
        Hover me
      </Tooltip>
    </CenterDiv>
  );

  export const TooltipBottom = () => (
    <CenterDiv>
      <Tooltip position="bottom" content="I am tooltip">
        Hover me
      </Tooltip>
    </CenterDiv>
  );