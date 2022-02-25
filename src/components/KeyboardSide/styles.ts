import styled, { css } from "styled-components";

type ButtonProps = {
  isSecondary?: boolean;
  isActive?: boolean;
}

export const Container = styled.div`
  flex: 1;
`;

export const SelectTip = styled.div`
  flex: 1;
  margin: 2.5rem 0;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.title};
`;

export const TipButtonsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;

  @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;  
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: 0;
  background-color: 
  ${(props) =>
    props.isSecondary
        ? props.theme.colors.backgroundButtonSecondary
        : props.theme.colors.backgroundButtonPrimary };
    
  color: ${(props) =>
    props.isSecondary
        ? props.theme.colors.colorButtonSecondary
        : props.theme.colors.colorButtonPrimary};
  border-radius: 0.5rem;
  min-width: 110px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.isSecondary
      ? props.theme.colors.backgroundButtonSecondaryHover
      : props.theme.colors.backgroundButtonPrimaryHover};
    color: ${(props) =>
      props.isSecondary
      ? props.theme.colors.colorButtonSecondaryHover
      : props.theme.colors.colorButtonPrimaryHover};
  }

  ${(props) => {
    if(props.isActive === true) {
      return css`
          background-color: ${(props) =>
            props.theme.colors.backgroundButtonPrimaryFocus};
          color: #00474b;
      `
    }
  }}
`;

export const InputCustom = styled.input`
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.backgroundInput};
  outline: none;
  padding: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  width: 100%;
  
  &::placeholder {
    color: ${props => props.theme.colors.placeholdertInput}
  }
`;