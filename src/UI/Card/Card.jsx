const Card = ({ children, isUser = false, isActive }) => {
  return (
    <div
      className={`relative px-3 py-1 w-60   ml-2 border-solid rounded-md flex flex-row text-gray-400 items-center group h-12 hover:bg-gray-700 active:bg-gray-600 cursor-pointer ${
        isActive ? 'bg-gray-700' : 'bg-transparent'
      }`}
    >
      {children}
      {isUser && (
        <button className="opacity-0 group-hover:opacity-100 select-none cursor-pointer p-1 ">
          x
        </button>
      )}
    </div>
  );
};

export default Card;
