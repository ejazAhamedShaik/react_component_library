import React from "react";
import { CheckboxProps } from "./ICheckbox";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

const Checkbox = ({ checked, name, value, onChange }: CheckboxProps) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} name={name} value={value} />
      <StyledCheckbox checked={checked} onChange={onChange}>
        <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
