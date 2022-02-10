import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundCalculator};
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 950px;
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

export const ResultScreenSide = styled.div``;
