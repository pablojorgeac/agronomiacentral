import Image from 'next/image';

import { Layout } from '@/components/Page';
import { useSlideInstalations } from '@/hooks';

import clase1 from './/../../../public/bachi-img/Imagen1.jpg';
import clase2 from './/../../../public/bachi-img/Imagen2.jpg';
import clase3 from './/../../../public/bachi-img/Imagen3.jpg';
import clase4 from './/../../../public/bachi-img/Imagen4.jpg';
import clase5 from './/../../../public/bachi-img/Imagen5.jpg';

export default function Bachi() {
  const {
    currentIndex,
    currentIndex2,
    images1,
    images2,
    prevSlide,
    nextSlide,
    prevSlide1,
    nextSlide1,
  } = useSlideInstalations(clase1, clase2, clase3, clase4, clase5);

  return (
    <Layout
      title={'Bachillerato Agronomía central'}
      image={
        'https://easycdn.es/12/i/como-se-construyen-las-pistas-de-futbol-sala-y-cuales-son-sus-caracteristicas-principales_5512.webp'
      }
    >
      <section className="py-10 px-5 w-full h-full">
        {/* ---------------------- BACHILLERATO AGRONOMÍA ----------------------- */}
        <div className="max-w-md  mx-auto bg-white dark:bg-[#353434b4] shadow-md lg:max-w-6xl">
          <div className="lg:flex">
            <div className="p-8 lg:w-[158%]">
                <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                    BACHILLERATO EN AGRONOMÍA CENTRAL
                </div>

                <p className="mt-6 text-slate-500 dark:text-slate-200 text-justify">


                El club cuenta ya hace 6 años con un bachillerato para adultos,
                 que funciona en el 2 piso del club con aulas propias, en el mismo
                  se puede comenzar o retomar los estudios todas las personas mayores
                  de 18 años, las clases se dictan de lunes  a viernes de 19hs a 22hs.
                   Titulos oficiales en 3 años de cursada nocturna.
                Para informes bachiagrono@gmail.com o en la secretaria del club de 17.30 a 20.00.
                </p>
            </div>
            <div className="relative group">
              <Image
                src={images1[currentIndex]}
                className=" h-full"
                alt="Buffet"
              ></Image>

              <button
                onClick={prevSlide}
                className="absolute left-1 top-[50%] rounded-full p-1 bg-slate-200 text-white hover:bg-slate-400"
              >
                <svg
                  className="h-5 w-5 -rotate-180 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className=" absolute top-[50%] right-1 rounded-full  p-1 bg-slate-200 text-white hover:bg-slate-400"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>


      </section>
    </Layout>
  );
}
