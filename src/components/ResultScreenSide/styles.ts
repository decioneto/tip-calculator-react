import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1rem;
`;

export const TipValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2.5rem;
`;

export const TipAmout = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.primary};
`;

export const ValueText = styled.div`
  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: #F4FAFA;
    opacity: 0.5;
    margin-bottom: 0;
  }
`;

export const ValueBox = styled.h3`
  font-size: 3rem;
`;

export const ButtonsSubmit = styled.div`
  button {
    width: 100%;
  }
`;