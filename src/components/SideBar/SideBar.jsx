import { FaBeer, FaAffiliatetheme, FaAndroid } from 'react-icons/fa';
import { DiAtom } from 'react-icons/di';
import { BsDiscord } from 'react-icons/bs';
import ozlmImg from '../../assets/pp/ozslm.webp';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center bg-gray-900 text-white shadow-md z-50">
      <div>
        <SideBarIcon
          text="Discord"
          isActive={true}
          icon={<BsDiscord size="28" color="white" />}
        />
        <div className="group relative transition-all">
          <img src={ozlmImg} className="sidebar-icon" />
          <div className="flex z-50 absolute -top-2 -right-1 rounded-3xl p-1 bg-green-600 border-[3px] border-gray-900">
            <BsFillCameraVideoFill size="12" />
          </div>
          <span className="absolute text-xs bg-gray-900 p-2 rounded-md top-2 left-16 scale-0 group-hover:scale-100 duration-100 origin-left">
            oz_slm
          </span>
        </div>
      </div>
      <div className="w-6 h-[2px] bg-gray-700 rounded-sm"></div>
      <SideBarIcon icon={<FaBeer size="28" color="lightgray" />} />
      <SideBarIcon icon={<FaAffiliatetheme size="28" color="black" />} />
      <SideBarIcon icon={<FaAndroid size="28" />} />
      <SideBarIcon icon={<DiAtom size="28" color="gray" />} />
    </div>
  );
};

export const SideBarIcon = ({
  icon,
  text = 'tooltip 💡',
  isActive = false,
}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    <div className={isActive && 'sidebar-active'}></div>
  </div>
);

export default SideBar;
