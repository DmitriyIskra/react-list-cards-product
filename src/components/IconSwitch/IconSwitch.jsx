import './css/IconSwitch.css';

export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    const viewIcon = ['view_list', 'view_module'];

    const handler = (e) => {       
        const type = e.target.dataset.type;

        if(type === 'view_list') {
            onSwitch(viewIcon[1]);
            return;
        }

        onSwitch(viewIcon[0]);
    }
    
    return (
        <div className='wrapperIcon'>
            <div className={"icon" + ' ' + icon} data-type={icon} onClick={handler}></div>
        </div>
    )
}
