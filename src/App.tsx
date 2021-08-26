import { useState } from 'react';
import Card from 'components/card';
import DebitCard from 'components/debitcard';
import { CardExpiry, CardHolder, CustomInput, CVV } from 'components/input';

const App = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [focus, setFocus] = useState(false);

  const showResults = () => {
    let data = {
      cardNumber,
      name,
      month,
      year,
      cvv,
    };
    console.log(data);
  };

  return (
    <div>
      <DebitCard
        cardNumber={cardNumber}
        name={name}
        month={month}
        year={year}
        cvv={cvv}
        focus={focus}
      />
      <Card>
        <CustomInput
          cardNumber={cardNumber}
          setCardNumber={(data: String) => setCardNumber(data.toString())}
        />
        <CardHolder
          name={name}
          setName={(data: String) => setName(data.toString())}
        />
        <div className='flex-sb'>
          <CardExpiry
            month={month}
            setMonth={(data: String) => setMonth(data.toString())}
            year={year}
            setYear={(data: String) => setYear(data.toString())}
          />
          <CVV
            cvv={cvv}
            setCVV={(data: String) => setCVV(data.toString())}
            setFocus={(data: boolean) => setFocus(data)}
          />
        </div>
        <div className='submit-btn' onClick={() => showResults()}>
          Submit
        </div>
      </Card>
    </div>
  );
};

export default App;
