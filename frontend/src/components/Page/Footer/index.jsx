import Link from 'next/link';
import { SocialIcons, ItemsContainer } from '..';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white flex flex-wrap justify-evenly">
      <ItemsContainer />
      <div className="grid grid-row-5 text-center p-5 text-gray-400 text-sm py-16">
        <SocialIcons className="row-span-3" />
        <span className="row-span-1 p-0">© 2023 Club Agronomía Central.</span>
        <span className="row-span-1 p-0">Todos los derechos reservados.</span>
        <Link
          href="/auth/login"
          className="text-gray-400 font-bold text-base hover:text-[#3264c0]"
        >
          Iniciar Sesión
        </Link>
      </div>
    </footer>
  );
}
