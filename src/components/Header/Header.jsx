import { RiInboxFill } from 'react-icons/ri';
import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';
import { FaUserFriends } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-80 w-screen bg-gray-700 shadow-sm shadow-black flex flex-row justify-between min-w-0 h-12 px-2">
      <div className="flex flex-row whitespace-nowrap gap-5 overflow-hidden">
        <div className="flex gap-2 justify-center items-center">
          <FaUserFriends size="26" className="text-gray-600" />
          <label htmlFor="friends-text&img" className="text-white">
            Friends
          </label>
        </div>
        <button className="header-button">Online</button>
        <button className="header-button">All</button>
        <button className="header-button">Pending</button>
        <button className="header-button">Blocked</button>
        <button className="add-friend-button">Add Friend+</button>
      </div>
      <div className="absolute flex flex-row whitespace-nowrap py-3 right-[315px] z-20 shadow-left shadow-gray-800 bg-gray-700 top-0 ">
        <HeaderIcon tooltip="Inbox" icon={<RiInboxFill size="24" />} />
        <HeaderIcon
          tooltip="Help"
          icon={<HiMiniQuestionMarkCircle size="24" />}
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
