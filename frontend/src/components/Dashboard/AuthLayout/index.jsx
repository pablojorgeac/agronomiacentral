export const AuthLayout = ({ children }) => {
  return (
    <main className="flex w-full min-h-screen dark:bg-[#171717] bg-[#3264c0] flex-col items-center justify-center px-4 text-center">
      <div className="w-full flex flex-col items-center md:w-8/12 sm:w-5/6 space-y-5 bg-white dark:bg-[#353434b4] shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] rounded-lg px-4 py-2 lg:w-2/4 2xl:w-1/3">
        {children}
      </div>
    </main>
  );
};
