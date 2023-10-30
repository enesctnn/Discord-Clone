const SecondarySideBar = () => {
  return (
    <div className="flex flex-col gap-4 bg-gray-800 fixed top-0 h-screen left-16 min-w-max m-0 z-10">
      <div className="flex flex-row items-center h-12 shadow-sm px-2 shadow-black ">
        <button
          type="button"
          className="bg-gray-900 bg-opacity-80 text-gray-500 outline-none pl-1 py-1 text-sm rounded-md w-60 text-start cursor-pointer"
        >
          Find or start a conversation
        </button>
      </div>
    </div>
  );
};

export default SecondarySideBar;
