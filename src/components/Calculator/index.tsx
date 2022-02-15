import Input from '../Input';
import Button from '../Buttons';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import { 
  Container,
  KeyboardSide,
  SelectTip,
  Title,
  TipButtonsList,
  ResultScreenSide,
  InputCustom,
  TipValue,
  TipAmout,
  ValueText,
  ValueBox,
  ButtonsSubmit
} from './styles';


function Calculator() {
  return (
    <Container>
      <KeyboardSide>
        <Input 
          type="text"
          placeholder='0'
          title="Conta" 
          icon={AttachMoneyIcon} 
        />

        <SelectTip>
          <Title>Selecionar gorgeta %</Title>

          <TipButtonsList>
            <Button>5%</Button>
            <Button>10%</Button>
            <Button>15%</Button>
            <Button>25%</Button>
            <Button>50%</Button>
            <InputCustom type='text' placeholder='Custom'/>
          </TipButtonsList>
        </SelectTip>

        <Input 
          type="text"
          placeholder='0'
          title="Número de pessoas" 
          icon={PersonIcon} 
        />

      </KeyboardSide>

      <ResultScreenSide>
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
            <Button isSecondary disabled>Reset</Button>
          </ButtonsSubmit>
        
        </TipValue>
      </ResultScreenSide>
    </Container>
  );
}

export default Calculator;