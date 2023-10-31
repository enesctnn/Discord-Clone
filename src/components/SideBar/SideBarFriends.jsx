import FriendList from './FriendList';

const SideBarFriends = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-56 font-normal mx-auto text-gray-400 select-none hover:text-gray-100">
        <label className="text-xs" htmlFor="direct-messages">
          DIRECT MESSAGES
        </label>
        <button className="text-xl relative group transition-all ">
          +
          <span className="absolute bg-gray-900 whitespace-nowrap text-sm -top-8 -left-8 py-1 px-2 scale-0 duration-75 ease-linear group-hover:scale-100 rounded-md">
            Create DM
          </span>
        </button>
      </div>
      <FriendList />
    </>
  );
};

export default SideBarFriends;
