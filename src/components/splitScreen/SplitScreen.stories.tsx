// Button.stories.ts|tsx

import React, { FC } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SplitScreen, SplitScreenProps } from "./SplitScreen";

// export default {
//   title: "components/splitScreen",
//   component: SplitScreen,
// } as ComponentMeta<typeof SplitScreen>;

export default {
  title: "components/splitScreen",
  component: SplitScreen as FC<SplitScreenProps>,
} as ComponentMeta<typeof SplitScreen>;

export const TwoSections: ComponentStory<typeof SplitScreen> = () => (
  <SplitScreen leftWeight={1} rightWeight={3}>
    <h1 style={{ background: "aqua" }}>{"I am left pane!"}</h1>
    <p style={{ background: "gray" }}>{"I am right pane!"}</p>
  </SplitScreen>
);

export const ThreeSections: ComponentStory<typeof SplitScreen> = () => (
  <SplitScreen>
    <h1 style={{ background: "aqua" }}>{"I am left pane!"}</h1>
    <h1 style={{ background: "green" }}>{"I am left pane!"}</h1>
    <h1 style={{ background: "red" }}>{"I am left pane!"}</h1>
  </SplitScreen>
);
