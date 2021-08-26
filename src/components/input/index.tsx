import './index.scss';
const InputMask = require('react-input-mask');

export const CustomInput = (props: cardNumber) => {
  const { cardNumber, setCardNumber } = props;
  return (
    <>
      <label>Card Number</label>
      <InputMask
        mask='9999 9999 9999 9999'
        value={cardNumber}
        maskChar={'x'}
        onChange={(e: any) => setCardNumber(e.target.value)}
      >
        {(inputProps: any) => <input className='custominput' {...inputProps} />}
      </InputMask>
    </>
  );
};

export const CardHolder = (props: cardHolder) => {
  const { name, setName } = props;
  return (
    <>
      <label>Card Holder</label>
      <input
        className='custominput'
        type='text'
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
    </>
  );
};

export const CardExpiry = (props: cardExpiry) => {
  const { month, setMonth, year, setYear } = props;

  const monthCard: Array<string> = [];
  for (let i = 1; i <= 12; i++) {
    monthCard.push(i.toString());
  }
  const yearCard: Array<String> = [];
  for (let index = 21; index <= 50; index++) {
    yearCard.push(index.toString());
  }

  return (
    <div>
      <label>Expiry</label>
      <div className='customInput-flex'>
        <select
          value={month}
          className='custominput customButton'
          onChange={(e) => setMonth(e.target.value)}
        >
          <option defaultValue={'0'} disabled></option>
          {monthCard.map((mon, i) => {
            return (
              <option key={i} value={mon}>
                {mon}
              </option>
            );
          })}
        </select>
        <select
          value={year}
          className='custominput customButton'
          onChange={(e) => setYear(e.target.value)}
        >
          <option defaultValue={'0'} disabled></option>
          {yearCard.map((year, i) => {
            return (
              <option key={i} value={year.toString()}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export const CVV = (props: customCVV) => {
  const { cvv, setCVV, setFocus } = props;
  return (
    <div>
      <label>CVV</label>
      <InputMask
        mask='999'
        value={cvv}
        onChange={(e: any) => setCVV(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
        {(inputProps: any) => (
          <input className='custominput ' {...inputProps} />
        )}
      </InputMask>
    </div>
  );
};

interface cardNumber {
  cardNumber: string;
  setCardNumber: (e: String) => void;
}

interface customCVV {
  cvv: string;
  setCVV: (e: String) => void;
  setFocus: (bool: boolean) => void;
}

interface cardExpiry {
  month: string;
  setMonth: (e: String) => void;
  year: string;
  setYear: (e: String) => void;
}

interface cardHolder {
  name: string;
  setName: (e: String) => void;
}
