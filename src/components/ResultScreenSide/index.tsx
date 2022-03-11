import { useContext, useState } from 'react'
import formatAmout from '../../utils/formatAmout'
import formatCurrency from '../../utils/formatCurrency'
import Button from '../Buttons'
import { CalculateContext } from '../../context/CalculateContext'

import { 
  Container,
  TipValue,
  TipAmout,
  ValueText,
  ValueBox,
  ButtonsSubmit 
} from './styles'

function ResultScreenSide() {
  const [totalTip, setTotalTip] = useState(0)
  const [total, setTotal] = useState('')
  const [isDisable, setIsDisable] = useState(true)

  const { 
    billValue,
    tipValue,
    customTipValue,
    dividedBy 
  } = useContext(CalculateContext)

  function calculateTip() {
    const formatBillValue = formatAmout(billValue)
    const percentageTip = Number(tipValue) / 100;
    const percentageCustomTip = Number(customTipValue) / 100;

    const calculateTip = Number(formatBillValue) * percentageTip
      setTotalTip(calculateTip)

  }

  function calculate() {
    calculateTip()
    setIsDisable(false)
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
              { formatCurrency(totalTip) }
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
            <Button isSecondary disabled={isDisable}>Limpar</Button>
          </ButtonsSubmit>
        
        </TipValue>
    </Container>
  )
}

export default ResultScreenSide