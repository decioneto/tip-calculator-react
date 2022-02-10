import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  background-color: ${props => props.theme.colors.backgroundButtonPrimary};
  color: ${props => props.theme.colors.colorButton};
  border-radius: 0.5rem;
  min-width: 110px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundButtonPrimaryHover};
    color: ${props => props.theme.colors.colorButtonHover};
  }

  &.active {
    background-color: ${props => props.theme.colors.backgroundButtonPrimaryFocus};
    color: #00474B;
  }
`;
