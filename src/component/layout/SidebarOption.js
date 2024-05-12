import './SidebarOption.css';

const SidebarOption = ({title, Icon, number, active, onExpand}) => {
    let yes = false;
    if(active===true){
        yes=true;
    }
    
  return (
    <div className={yes? "sidebarOption actived":"sidebarOption"} onClick={onExpand}>
        <Icon/>
        <label className='optionTitle'>{title}</label>
        <label className='optionNumber'>{number}</label>
    </div>
  )
};
export default SidebarOption;