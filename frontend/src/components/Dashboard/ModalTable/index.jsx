export const ModalTable = ({children}) => {
  return (
    <div className="flex flex-col bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
      {children}
    </div>
  );
};
