import { FaUserFriends } from 'react-icons/fa';
import Card from '../../UI/Card/Card';

const SecondarySideBar = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-800 fixed top-0 h-screen left-16 min-w-max m-0 z-10">
      <div className="flex items-center h-12 shadow-bottom shadow-black px-2">
        <button
          type="button"
          className="bg-gray-900 bg-opacity-80 text-gray-500 outline-none pl-[6px] py-1 text-sm rounded-md w-60 text-start cursor-pointer"
        >
          Find or start a conversation
        </button>
      </div>
      <SecondarySideIcon text="Friends" icon={<FaUserFriends size="29" />} />
    </div>
  );
};

export const SecondarySideIcon = ({ icon, text }) => (
  <Card>
    <div className="second-bar-icons">
      {icon}
      <label htmlFor="info">{text}</label>
    </div>
  </Card>
);

export default SecondarySideBar;
