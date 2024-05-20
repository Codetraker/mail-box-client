import { useDispatch, useSelector } from 'react-redux';
import './SidebarOption.css';
import { useNavigate } from 'react-router-dom';

const SidebarOption = ({title, Icon, number, active, onExpand,moveTo}) => {

    const navigate = useNavigate();
    let yes = false;
    if(active===true){
        yes=true;
    }

    const handleClick = () => {
      if (moveTo) {
          if(moveTo==='inbox'){
            navigate('/')
          }else if(moveTo==='sent'){
            navigate('/Sent')
          }
      } else {
          onExpand();
      }
  };

    const sideExtent = useSelector((state)=>state.sidebarVisible.sidebarIsVisible);
  return (
    <div className={yes? "sidebarOption actived":"sidebarOption"} onClick={handleClick} >
        <Icon/>
        {sideExtent && <label className='optionTitle'>{title}</label>}
        {sideExtent && <label className='optionNumber'>{number}</label>}
    </div>
  )
};
export default SidebarOption;