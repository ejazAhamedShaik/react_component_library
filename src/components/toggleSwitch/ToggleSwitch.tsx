import React from "react";
import {
    Input,
  ToggleSwitchBackground,
  ToggleSwitchBtn,
  ToggleSwitchHandle,
} from "./styles";

const ToggleSwitch = () => {
  return (
    <ToggleSwitchBtn>
      <Input className="checkbox" type="checkbox" />
      <ToggleSwitchBackground>
        <ToggleSwitchHandle></ToggleSwitchHandle>
      </ToggleSwitchBackground>
    </ToggleSwitchBtn>
  );
};

export default ToggleSwitch;
