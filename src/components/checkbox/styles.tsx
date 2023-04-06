import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  height: 0px;
  margin: 0px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 0px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? "#2563EB" : "#FFFFFF")};
  transition: all 150ms;
  border: 1px solid #cbd5e1;
  border-radius: 4px;

  ${Icon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;
