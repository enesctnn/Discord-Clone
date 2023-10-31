import Card from '../../UI/Card/Card';
import { FaUserFriends } from 'react-icons/fa';
import { SiTurborepo } from 'react-icons/si';
import { CiShop } from 'react-icons/ci';
import SideBarFriends from './SideBarFriends';
import SidebarUser from '../User/User-section/SidebarUser';

const SecondarySideBar = () => {
  return (
    <div className="flex flex-col bg-gray-800 fixed top-0 h-screen left-16 min-w-max m-0 z-10 gap-[2px]">
      <div className="flex items-center h-12 shadow-bottom shadow-black px-2 mb-3 min-h-[48px]">
        <button
          type="button"
          className="bg-gray-900 bg-opacity-80 text-gray-500 outline-none pl-[6px] py-1 text-sm rounded-md w-60 text-start cursor-pointer"
        >
          Find or start a conversation
        </button>
      </div>
      <SecondarySideIcon
        isActive={true}
        text="Friends"
        icon={<FaUserFriends size="25" />}
      />
      <SecondarySideIcon text="Nitro" icon={<SiTurborepo size="25" />} />
      <SecondarySideIcon text="Shop" icon={<CiShop size="25" />} />
      <SideBarFriends />
      <SidebarUser />
    </div>
  );
};

export const SecondarySideIcon = ({ icon, text, isActive = false }) => (
  <Card isActive={isActive}>
    <div className="second-bar-icons">
      {icon}
      <div className="select-none">{text}</div>
    </div>
  </Card>
);

export default SecondarySideBar;
