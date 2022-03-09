import Button from '../Buttons'

import { 
  Container,
  TipValue,
  TipAmout,
  ValueText,
  ValueBox,
  ButtonsSubmit 
} from './styles'

function ResultScreenSide() {
  function calculate() {
    console.log('calculei!')
  }

  return (
    <Container>
      <TipValue>
          
          <TipAmout>
            <ValueText>
              <h2>Gorjeta</h2>
              <p>/pessoa</p>
            </ValueText>
            <ValueBox>
              $0.00
            </ValueBox>
          </TipAmout>
          
          <TipAmout>
            <ValueText>
              <h2>Total</h2>
              <p>/pessoa</p>
            </ValueText>
            <ValueBox>
              $0.00
            </ValueBox>
          </TipAmout>

          <ButtonsSubmit>
            <Button isSecondary onClick={calculate}>Calcular</Button>
            <Button isSecondary disabled>Limpar</Button>
          </ButtonsSubmit>
        
        </TipValue>
    </Container>
  )
}

export default ResultScreenSide