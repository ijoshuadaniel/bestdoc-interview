import './index.scss';

const Card = (props: any) => {
  const { children } = props;
  return <div className='card'>{children}</div>;
};

export default Card;
