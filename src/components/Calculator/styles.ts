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
