import { FaFire, FaPoo } from 'react-icons/fa';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';


const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />}/>
            <SideBarIcon icon={<BsPlus size="28" />}/>
            <SideBarIcon icon={<BsFillLightningFill size="28" />}/>
            <SideBarIcon icon={<FaPoo size="28" />}/>
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default SideBar;