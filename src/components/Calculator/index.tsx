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
  ValueBox

} from './styles';


function Calculator() {
  return (
    <Container>
      <KeyboardSide>
        <Input 
          type="text"
          placeholder='0'
          title="Bill" 
          icon={AttachMoneyIcon} 
        />

        <SelectTip>
          <Title>Select Tip %</Title>

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
          title="Number of People" 
          icon={PersonIcon} 
        />

      </KeyboardSide>

      <ResultScreenSide>
        <TipValue>
          <TipAmout>
            <ValueText>
              <h2>Tip Amout</h2>
              <p>/person</p>
            </ValueText>
            <ValueBox>
              $0.00
            </ValueBox>
          </TipAmout>
        </TipValue>
      </ResultScreenSide>
    </Container>
  );
}

export default Calculator;