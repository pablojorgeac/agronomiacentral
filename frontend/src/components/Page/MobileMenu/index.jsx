import { useState } from 'react';
import { NavLink } from '..';
import { IconMobileMenu } from './icon';
import Darkmode from '@/components/Darkmode';

export function MobileMenu({ openMenu }) {
  const [clubOpen, setClubOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);

    return (
        <section
            className={`z-40 w-full h-screen text-slate-100  top-0 left-0 fixed transition-all dark:bg-black dark:bg-opacity-90 bg-blue-900 bg-opacity-90 duration-500 [clip-path:circle(0%_at_100%_0%)] ${
                openMenu && '[clip-path:circle(150%_at_100%_0%)]'
            }`}
        >
            <div className="w-full h-full flex flex-col justify-center items-center">
                <ul className="w-3/4">
                    {/* Link Home */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Inicio'} link={'/'} />
                    </div>
                    {/* Link Club */}
                    <div className="flex w-full h-10 justify-between items-center">
                        <NavLink text={'El Club'} link={'/club'} />
                        <button
                            onClick={() => setClubOpen(!clubOpen)}
                            className={`w-[40px] h-[40px] flex justify-center items-center transition-all duration-300 ${
                                clubOpen && 'rotate-180'
                            }`}
                        >
                            <IconMobileMenu />
                        </button>
                    </div>
                    {clubOpen && (
                        <div className="mb-2 ml-5 transition-all duration-100 animate-[openMobileMenu_0.1s_ease] origin-top">
                            <NavLink
                                text={'Comisión Directiva'}
                                link={'/club/comision-directiva'}
                            />
                            <NavLink
                                text={'Historia'}
                                link={'/club/historia'}
                            />
                            <NavLink
                                text={'Instalaciones'}
                                link={'/club/instalaciones'}
                            />
                            <NavLink
                                text={'Disponibilidad Del Quincho'}
                                link={'/club/quincho'}
                            />
                        </div>
                    )}
                    {/* Link Sports */}
                    <div
                        className={`flex w-full h-10 justify-between items-center transition-all duration-200`}
                    >
                        <NavLink text={'Deportes'} link={'/deportes'} />
                        <button
                            onClick={() => setSportsOpen(!sportsOpen)}
                            className={`w-[40px] h-[40px] text-slate-100 flex justify-center items-center transition-all duration-300 ${
                                sportsOpen && 'rotate-180'
                            }`}
                        >
                            <IconMobileMenu/>
                        </button>
                    </div>
                    {sportsOpen && (
                        <div className="mb-2 ml-5 transition-all duration-100 animate-[openMobileMenu_0.1s_ease] origin-top">
                            <NavLink
                                text={'Ajedrez'}
                                link={'/deportes/ajedrez'}
                            />
                            <NavLink
                                text={'Futbol Infantil'}
                                link={'/deportes/futbol-infantil'}
                            />
                            <NavLink
                                text={'Futsal'}
                                link={'/deportes/futsal'}
                            />
                            <NavLink
                                text={'Futsal Femenino'}
                                link={'/deportes/futsal-femenino'}
                            />
                            <NavLink
                                text={'Taekwondo'}
                                link={'/deportes/taekwondo'}
                            />
                            <NavLink
                                text={'Centro De Entrenamiento'}
                                link={'/deportes/centro-de-entrenamiento'}
                            />
                            <NavLink
                                text={'Entrenamiento de Arqueros'}
                                link={'/deportes/entrenamiento-arqueros'}
                            />
                            <NavLink
                                text={'Escuelita de Futbol'}
                                link={'/deportes/escuelita-futbol'}
                            />
                        </div>
                    )}
                    {/* Link Stories */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Testimonios'} link={'/testimonios'} />
                    </div>
                    {/* Link News */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Noticias'} link={'/noticias'} />
                    </div>
                    {/* Link  Bachi */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Bachi Agrono'} link={'/bachi'} />
                    </div>
                    {/* Link Merchandising */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Merchandising'} link={'/merchandising'} />
                    </div>
                    {/* Link Contact */}
                    <div className="h-10 flex items-center ">
                        <NavLink text={'Contáctanos'} link={'/contacto'} />
                    </div>
                    {/* Dark Mode */}
                    <div className="h-10 flex items-center ">
                        <Darkmode />
                    </div>
                </ul>
            </div>
        </section>
    );
}
