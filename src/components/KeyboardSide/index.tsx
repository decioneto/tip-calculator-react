import { useState, useRef, MouseEvent } from 'react';
import Input from '../Input';
import Button from '../Buttons';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import { 
  Container,
  SelectTip, 
  Title, 
  TipButtonsList, 
  InputCustom 
} from './styles'

function KeyboardSide() {
  const [active, setActive] = useState(false)
  const arrayValues = [5, 10, 15, 25, 50]

  function buttonSelected(button: MouseEvent) {
    setActive(!active)
    console.log(button.target)
  }

  return (
    <Container>
      <Input 
        type="text"
        placeholder='0'
        title="Conta" 
        icon={AttachMoneyIcon} 
      />

      <SelectTip>
        <Title>Selecionar gorgeta %</Title>

        <TipButtonsList>
          {arrayValues.map(value => (
            <Button 
              key={value}
              className={active ? 'active' : ''}
              value={value}
              onClick={buttonSelected}
            >
              {`${value}%`}
            </Button>
          ))}          
          <InputCustom type='text' placeholder='Custom'/>
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