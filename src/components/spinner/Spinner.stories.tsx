import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "./Spinner";

export default {
  title: "components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const PrimarySpinner = () => {
  return <Spinner />;
};
