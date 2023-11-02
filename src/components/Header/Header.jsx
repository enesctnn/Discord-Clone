import { RiInboxFill } from 'react-icons/ri';
import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import { FaUserFriends } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-80 w-screen bg-gray-700 shadow-bottom shadow-black flex flex-row justify-between min-w-0 h-12 pl-4 items-center">
      <div className="flex flex-row whitespace-nowrap gap-5 overflow-hidden">
        <div className="flex gap-2 justify-center items-center divide-x-[1px] divide-x-reverse divide-solid divide-gray-600 ">
          <FaUserFriends size="26" className="text-gray-600" />
          <label htmlFor="friends-text&img" className="text-white w-[80px]">
            Friends
          </label>
        </div>
        <button className="header-button active">Online</button>
        <button className="header-button">All</button>
        <button className="header-button">Pending</button>
        <button className="header-button">Blocked</button>
        <button className="add-friend-button">Add Friend+</button>
      </div>
      <div className="absolute flex flex-row whitespace-nowrap h-12 right-[315px] z-20 shadow-left shadow-gray-700 bg-gray-700 top-0 ">
        <HeaderIcon tooltip="Inbox" icon={<RiInboxFill size="23" />} />
        <HeaderIcon
          tooltip="Help"
          icon={<HiMiniQuestionMarkCircle size="23" />}
        />
      </div>
    </header>
  );
};

export const HeaderIcon = ({ icon, tooltip }) => (
  <button className="header-icon group">
    {icon}
    <span className="header-tooltip group-hover:scale-100">{tooltip}</span>
  </button>
);

export default Header;
