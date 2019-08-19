import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({ calback }) => (
  <StyledStartButton onClick={calback}>Start Game</StyledStartButton>
);

export default StartButton;
