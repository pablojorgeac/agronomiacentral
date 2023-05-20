import { useState } from 'react';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <>
      <header className="fixed top-0 z-[7777] lg:hidden p-2">
        <div
          className={`w-14 h-14 relative flex justify-center items-center ${
            openNavbar
              ? 'fixed z-[51] bg-transparent'
              : 'relative bg-white dark:invert rounded-full shadow-lg'
          } transition-all duration-500`}
        >
          <button
            onClick={handleNavbar}
            className={`flex absolute flex-col w-10 h-10 justify-center items-center border-none bg-transparent gap-[0.62rem] lg:hidden`}
          >
            <div
              className={`w-full h-[5px] rounded-md transition-all duration-500 origin-left ${
                openNavbar ? 'rotate-45 bg-white' : 'bg-neutral-800'
              }
                    `}
            ></div>
            <div
              className={`w-full h-[5px] rounded-md transition-all duration-300 origin-left ${
                openNavbar
                  ? 'opacity-0 -translate-x-2 bg-white'
                  : 'bg-neutral-800'
              }
                    `}
            ></div>
            <div
              className={`w-full h-[5px] rounded-md transition-all duration-500 origin-left ${
                openNavbar ? '-rotate-45 bg-white' : 'bg-neutral-800'
              }
                    `}
            ></div>
          </button>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-[15rem_1fr] bg-[#f1f5f9] duration-500 dark:text-slate-100 dark:bg-[#000000] ">
        <Navbar openNavbar={openNavbar} handleNavbar={handleNavbar} />
        <div className="w-full grid lg:max-h-screen lg:overflow-y-auto">
          {children}
        </div>
      </main>
    </>
  );
};
