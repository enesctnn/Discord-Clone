import { FaBeer, FaAffiliatetheme, FaAndroid } from 'react-icons/fa';
import { DiAtom } from 'react-icons/di';
const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col items-center bg-gray-900 text-white shadow-md ">
      <SideBarIcon icon={<FaBeer size="28" color="lightgray" />} />
      <SideBarIcon icon={<FaAffiliatetheme size="28" color="black" />} />
      <SideBarIcon icon={<FaAndroid size="28" />} />
      <SideBarIcon icon={<DiAtom size="28" color="gray" />} />
    </div>
  );
};

export const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
