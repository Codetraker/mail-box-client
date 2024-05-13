import './MailSection.css';

const MailSection = ({Icon, text, active}) => {
  return (
    <div className={active?'box active':'box'}>
        <div className='icon'><Icon /></div>
        <div className='text'>{text}</div>
    </div>
  )
};

export default MailSection;