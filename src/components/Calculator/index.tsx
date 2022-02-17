import KeyboardSide from '../KeyboardSide'
import ResultScreenSide from '../ResultScreenSide';

import { Container } from './styles';


function Calculator() {
  return (
    <Container>
      <KeyboardSide />
      <ResultScreenSide />
    </Container>
  );
}

export default Calculator;