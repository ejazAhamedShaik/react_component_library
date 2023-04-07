import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./IButton";

export default {
  title: "components/button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: JSX.IntrinsicAttributes & ButtonProps) => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    children: "Submit",
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    children: "Click me"
}