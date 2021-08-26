import Visa from 'assets/visa.png';
import Chip from 'assets/chip.png';
import './index.scss';

const DebitCard = (props: cardDetails) => {
  const { cardNumber, name, month, year, cvv, focus } = props;

  const getMonth = () => {
    if (month === '') return 'MM';
    if (month.length === 1) {
      return '0' + month;
    }
    return month;
  };

  if (focus) {
    return (
      <div className='debitcard'>
        <div className='debitcard__cvvWrapper'>
          <div className='debitcard__cvvWrapper-cvv'>
            {cvv === '' ? 'XXX' : cvv}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='debitcard'>
      <div className='debitcard__top'>
        <img src={Chip} alt='chip' />
        <img src={Visa} alt='visa' />
      </div>
      <div className='debitcard__bottom'>
        <p className='debitcard__bottom-cardnumber'>
          {cardNumber === '' ? 'xxxx xxxx xxxx xxxx' : cardNumber}
        </p>
        <div className='debitcard__bottom-details'>
          <div className='debitcard__bottom-details-name'>
            <p>Card Holder</p>
            <p>{name === '' ? 'Your Name' : name.toLocaleUpperCase()}</p>
          </div>
          <div className='debitcard__bottom-details-expiry'>
            <p>Expries</p>
            <p>
              {getMonth()}/{year === '' ? 'YY' : year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface cardDetails {
  cardNumber: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
  focus: boolean;
}

export default DebitCard;
