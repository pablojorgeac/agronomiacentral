import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components/Page';

import Historia from '../../../public/history-img/HistoryPic2.jpg';
import Directiva from '../../../public/directives-img/directiva.jpg';
import Quincho from '../../../public/installations-img/Imagen4.jpg';
import Instalaciones from '../../../public/installations-img/instalaciones.jpg';

export default function Club() {
  const section = [
    [
      'Comisión Directiva',
      Directiva,
      'Conocé a nuestros directivos',
      'club/comision-directiva',
    ],
    [
      'Historia',
      Historia,
      'Conocé más acerca de la historia del club',
      'club/historia',
    ],
    [
      'Instalaciones',
      Instalaciones,
      'Descubrí en detalle nuestras instalaciones',
      'club/instalaciones',
    ],
    [
      'Quincho',
      Quincho,
      'Consultá si el quincho está disponible',
      'club/quincho',
    ],
  ];
  return (
    <Layout
      title={'Club'}
      image={
        'https://img.freepik.com/foto-gratis/jugadores-futbol-accion-estadio-profesional_654080-1820.jpg?w=1060&t=st=1681512728~exp=1681513328~hmac=a67e09a84ca0bef8f8bd5310774b8bf6600c68d778b8587563603d69eb1942d3'
      }
    >
      <div className="lg:grid grid-cols-4 gap-8 py-10 px-5 lg:px-0 ">
        {section.map(([name, img, description, link], index) => (
          <div
            className=" max-w-sm mx-auto  shadow-lg mb-10 bg-gray-100 dark:bg-[#353434b4] "
            key={index}
          >
            <h3 className="text-lg font-bold text-gray-800 dark:text-white px-5 pt-5 pb-3">
              {name}
            </h3>
            <div className="border-2 border-blue-600 mb-8 mx-5 w-14"></div>
            <Link href={link}>
              <Image src={img} alt={name} className="lg:w-full lg:h-52" />
              <div className="text-center py-4 lg:text-left lg:pl-2">
                <p className="text-slate-500 dark:text-slate-200 font-normal">
                  {description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
