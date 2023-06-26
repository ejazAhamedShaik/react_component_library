import React, { FC, useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./ICheckbox";

export default {
  title: "components/checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (
  args: JSX.IntrinsicAttributes & CheckboxProps
) => <Checkbox {...args} />;

export const CheckedCheckbox = Template.bind({});
CheckedCheckbox.args = {
  checked: true,
  name: "checked checkbox",
  value: "checked",
};

export const UncheckedCheckbox = Template.bind({});
UncheckedCheckbox.args = {
  checked: false,
  name: "unchecked checkbox",
  value: "checked",
};
