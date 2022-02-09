import Input from '../Input';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import { 

  Container,
  KeyboardSide,
  SelectTip,
  Title,
  TipButtonsList,
  ResultScreenSide

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
            {/* <Button value='5' >5%</Button> */}
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

      </ResultScreenSide>
    </Container>
  );
}

export default Calculator;