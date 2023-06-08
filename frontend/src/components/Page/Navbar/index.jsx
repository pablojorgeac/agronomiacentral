import { useState } from 'react';
import { MobileMenu, NavLink } from '..';
import { clubLinks, sportsLinks } from './links';
import Darkmode from '@/components/Darkmode/index.jsx';
export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="w-full h-14 fixed z-50 dark:bg-black dark:border-none bg-blue-900 backdrop-filter backdrop-blur-lg bg-opacity-50 duration-500 flex justify-between items-center shadow-xl px-3 border-b border-white/30">
      <img src="/logo.png" className="w-12" alt="logo" />
      <p className="text-slate-100 text-lg lg:hidden">Club Agronomía Central</p>

      <ul className="gap-4 hidden lg:flex">
        <NavLink text={'Inicio'} link={'/'} />
        <NavLink text={'El Club'} link={'/club'} sonLinks={clubLinks} />
        <NavLink text={'Deportes'} link={'/deportes'} sonLinks={sportsLinks} />
        <NavLink text={'Testimonios'} link={'/testimonios'} />
        <NavLink text={'Noticias'} link={'/noticias'} />
        <NavLink text={'Bachi Agrono'} link={'/bachi'} />
        <NavLink text={'Merchandising'} link={'/merchandising'} />
        <NavLink text={'Contactanos'} link={'/contacto'} />
      </ul>
      <div
        className={`w-10 h-10 lg:h-auto relative ${
          openMenu ? 'fixed z-50' : 'relative'
        }`}
      >
        <div className="hidden lg:block">
          <Darkmode />
        </div>
        <button
          onClick={handleToggleMenu}
          className={`flex absolute flex-col w-10 h-10 justify-center items-center border-none bg-transparent gap-[0.62rem] lg:hidden `}
        >
          <div
            className={`w-full h-[5px] bg-slate-100 rounded-md transition-all duration-500 origin-left ${
              openMenu && 'rotate-45'
            }
                    `}
          ></div>
          <div
            className={`w-full h-[5px] bg-slate-100 rounded-md transition-all duration-300 origin-left ${
              openMenu && 'opacity-0 -translate-x-2'
            }
                    `}
          ></div>
          <div
            className={`w-full h-[5px] bg-slate-100 rounded-md transition-all duration-500 origin-left ${
              openMenu && '-rotate-45'
            }
                    `}
          ></div>
        </button>
      </div>
      <MobileMenu openMenu={openMenu} />
    </header>
  );
}
