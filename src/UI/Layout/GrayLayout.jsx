const GrayLayout = ({ children }) => {
  return (
    <div className="fixed z-50 w-screen h-screen bg-black bg-opacity-50">
      {children}
    </div>
  );
};

export default GrayLayout;
