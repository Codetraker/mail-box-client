import './SidebarOption.css';

const SidebarOption = ({title, Icon, number, active, onExpand, sideExtent}) => {
    let yes = false;
    if(active===true){
        yes=true;
    }
    
  return (
    <div className={yes? "sidebarOption actived":"sidebarOption"} onClick={onExpand}>
        <Icon/>
        {sideExtent && <label className='optionTitle'>{title}</label>}
        {sideExtent && <label className='optionNumber'>{number}</label>}
    </div>
  )
};
export default SidebarOption;