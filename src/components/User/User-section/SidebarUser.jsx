import { BiSolidMicrophone } from 'react-icons/bi';
import { MdHeadset } from 'react-icons/md';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdDoDisturbOn } from 'react-icons/md';

import enesImg from '../../../assets/pp/sung.jpg';

const SidebarUser = () => {
  return (
    <div className="bg-gray-900 pl-2 pr-4 py-2 flex flex-row justify-between items-center absolute bottom-0 left-0 w-full text-gray-400 font-bold text-xs">
      <div className="relative cursor-pointer group">
        <img
          src={enesImg}
          alt=""
          className="w-8 h-8 rounded-3xl object-top object-cover "
        />
        <MdDoDisturbOn
          className="absolute text-red-600 -bottom-1 -right-1 bg-gray-900 rounded-3xl border-2 border-gray-900"
          size="16"
        />
      </div>
      <div className="select-none cursor-pointer">
        <div id="user_name">Joekitting</div>
        <div id="status">status</div>
      </div>
      <div className="flex flex-row gap-3">
        <UserPreference
          icon={<BiSolidMicrophone size="18" color="lightgray" />}
        />
        <UserPreference icon={<MdHeadset size="18" color="lightgray" />} />
        <UserPreference
          icon={<IoSettingsSharp size="18" color="lightgray" />}
        />
      </div>
    </div>
  );
};

export const UserPreference = ({ icon }) => <button>{icon}</button>;

export default SidebarUser;
