import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.colors.title}
  }

  & > div {
    position: relative;

    input {
      width: 100%;
      background-color: ${props => props.theme.colors.backgroundInput};
      border: 1.5px solid transparent;
      border-radius: 4px;
      padding: 1rem 1rem 1rem 45px;
      text-align: right;
      color: ${props => props.theme.colors.secondary};
      outline: none;

      &::placeholder {
        color: ${props => props.theme.colors.placeholdertInput}
      }

      &:focus {
        border: 1.5px solid #26C0AB;
      }
    }

    > svg {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      fill: ${props => props.theme.colors.iconInput}
    }
  }
`;