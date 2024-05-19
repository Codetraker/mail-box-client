import { useDispatch, useSelector } from 'react-redux';
import './SidebarOption.css';


const SidebarOption = ({title, Icon, number, active, onExpand}) => {
    let yes = false;
    if(active===true){
        yes=true;
    }

    const sideExtent = useSelector((state)=>state.sidebarVisible.sidebarIsVisible);
  return (
    <div className={yes? "sidebarOption actived":"sidebarOption"} onClick={onExpand}>
        <Icon/>
        {sideExtent && <label className='optionTitle'>{title}</label>}
        {sideExtent && <label className='optionNumber'>{number}</label>}
    </div>
  )
};
export default SidebarOption;