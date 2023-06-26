import styled from "styled-components";

export const ToggleSwitchBtn = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    right: -35px;
    font-size: 12px;
    font-weight: bold;
    color: #aaa;
    text-shadow: 1px 1px #fff;
    transition: color 0.3s ease-in-out;
  }
`;

export const Input = styled.input`
  display: none;

  transform: translateX(45px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #05c46b;
`;

export const ToggleSwitchBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ddd;
  border-radius: 20px;
  box-shadow: inset 0 0 0 2px #ccc;
  transition: background-color 0.3s ease-in-out;
`;

export const ToggleSwitchHandle = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  transform: translateX(45px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 3px #05c46b;
`;
