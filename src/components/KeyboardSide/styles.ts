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
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1rem;
    border-radius: 0 !important;

    @media(max-width: 900px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;  
    }
   
    button {
      padding: 0.5rem 1rem;
      border: 0;
      border-radius: 0.5rem !important;
      min-width: 110px;
      cursor: pointer;
      transition: all 0.2s ease;
      background-color: ${(props) => props.theme.title === 'light' ? '#00474B' : "#26C0AB"};
      color: ${(props) => props.theme.title === 'light' ? '#F4F4F4' : "#00474B"};

      &:hover:not([aria-pressed="true"]) {
        background-color: ${(props) => props.theme.title === 'light' ? '#26C0AB' : "#016A6F"};
        color: ${(props) => props.theme.title === 'light' ? '#00474B' : "#00474B"};
      }

      &.Mui-selected {
        background-color: #9FE8DF;
        color: ${(props) => props.theme.title === 'light' ? '#00474B' : "#00474B"};
      }

      &.Mui-selected:hover {
        background-color: #9FE8DF;
      }
    }
  }
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