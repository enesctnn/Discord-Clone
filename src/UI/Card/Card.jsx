const Card = ({ children, isUser = false }) => {
  return (
    <div className="relative px-3 py-1 w-60 bg-transparent hover:bg-gray-700 active:bg-gray-600 ml-2 border-solid rounded-md flex flex-row justify-between text-gray-400 items-center group">
      {children}
      {isUser && (
        <span className="opacity-0 group-hover:opacity-100 select-none cursor-pointer p-1">
          x
        </span>
      )}
    </div>
  );
};

export default Card;
