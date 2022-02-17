import { useState } from 'react';
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

  function buttonSelected() {
    setActive(!active)
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
            <Button hasFocus>5%</Button>
            <Button hasFocus>10%</Button>
            <Button hasFocus>15%</Button>
            <Button hasFocus>25%</Button>
            <Button hasFocus>50%</Button>
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