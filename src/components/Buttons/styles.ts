import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonPrimary = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: 0;
  background-color: ${(props) =>
    props.isSecondary
        ? props.theme.colors.backgroundButtonSecondary
        : props.theme.colors.backgroundButtonPrimary};
  color: ${(props) =>
    props.isSecondary
        ? props.theme.colors.colorButtonSecondary
        : props.theme.colors.colorButtonPrimary};
  border-radius: 0.5rem;
  min-width: 110px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.isSecondary
      ? props.theme.colors.backgroundButtonSecondaryHover
      : props.theme.colors.backgroundButtonPrimaryHover};
    color: ${(props) =>
      props.isSecondary
      ? props.theme.colors.colorButtonSecondaryHover
      : props.theme.colors.colorButtonPrimaryHover};
  }

  &.active:not(:disabled) {
      background-color: ${(props) =>
          props.theme.colors.backgroundButtonPrimaryFocus};
      color: #00474b;
  }

  &:disabled {
      opacity: 0.5;
  }
`;
