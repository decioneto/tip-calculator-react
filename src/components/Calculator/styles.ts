import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.backgroundCalculator};
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 1120px;
`;  

export const KeyboardSide = styled.div`
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
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const InputCustom = styled.input`
  border: 1px solid transparent;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.backgroundInput};
  outline: none;
  padding: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  
  &::placeholder {
    color: ${props => props.theme.colors.placeholdertInput}
  }
  `;

export const ResultScreenSide = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1rem;
`;

export const TipValue = styled.div``;

export const TipAmout = styled.div``;

export const ValueText = styled.div``;

export const ValueBox = styled.div``;
