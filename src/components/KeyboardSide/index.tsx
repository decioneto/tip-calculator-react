import { useState, MouseEvent, useContext } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import Input from '../Input';
import { CalculateContext } from '../../context/CalculateContext'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import { 
  Container,
  SelectTip, 
  Title, 
  TipButtonsList, 
  InputCustom,
} from './styles'

function KeyboardSide() {
  const [active, setActive] = useState(false)
  const { 
    billValue,
    setBilLValue,
    setTipValue,
    customTipValue,
    setCustomTipValue,
    dividedBy,
    setDividedBy 
  } = useContext(CalculateContext)

  function buttonSelected(event: MouseEvent<HTMLElement>, isActive: boolean) {
    setActive(isActive)
    setTipValue(String(isActive))
  }

  return (
    <Container>
      <Input 
        type="text"
        placeholder='0'
        title="Conta" 
        icon={AttachMoneyIcon}
        value={billValue}
        onChange={(e) => {setBilLValue(e.target.value)}}
      />

      <SelectTip>
        <Title>Selecionar gorgeta %</Title>

        <TipButtonsList>
          <ToggleButtonGroup
            color='primary'
            onChange={buttonSelected}
            value={active}
            exclusive
          >
            <ToggleButton value="5">5%</ToggleButton>
            <ToggleButton value="10">10%</ToggleButton>
            <ToggleButton value="15">15%</ToggleButton>
            <ToggleButton value="25">25%</ToggleButton>
            <ToggleButton value="50">50%</ToggleButton>
            <InputCustom>
              <input
                type='text' 
                onFocus={() => setActive(false)}
                onChange={(e) => setCustomTipValue(e.target.value)}
                placeholder='Custom'
                value={customTipValue}
              />
            </InputCustom>
          </ToggleButtonGroup>
        </TipButtonsList>
      </SelectTip>

      <Input 
        type="text"
        placeholder='0'
        title="Número de pessoas" 
        icon={PersonIcon} 
      />
    </Container>
  )
}

export default KeyboardSide