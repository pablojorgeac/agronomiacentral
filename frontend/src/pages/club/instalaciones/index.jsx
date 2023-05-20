import Image from 'next/image';

import { Layout } from '@/components/Page';
import { useSlideInstalations } from '@/hooks';

import Entrada from '../../../../public/installations-img/Imagen1.jpg';
import Cocina from '../../../../public/installations-img/Imagen2.jpg';
import Mesas from '../../../../public/installations-img/Imagen3.jpg';
import Quincho from '../../../../public/installations-img/Imagen4.jpg';
import Salon from '../../../../public/installations-img/Imagen5.jpg';
import Cancha from '../../../../public/installations-img/Imagen7.jpg';
import Cancha2 from '../../../../public/installations-img/Imagen8.jpg';

export default function Instalations() {
  const {
    currentIndex,
    currentIndex2,
    images1,
    images2,
    prevSlide,
    nextSlide,
    prevSlide1,
    nextSlide1,
  } = useSlideInstalations(Entrada, Cocina, Mesas, Cancha, Cancha2);

  return (
    <Layout
      title={'Instalaciones'}
      image={
        'https://easycdn.es/12/i/como-se-construyen-las-pistas-de-futbol-sala-y-cuales-son-sus-caracteristicas-principales_5512.webp'
      }
    >
      <section className="py-10 px-5 w-full h-full">
        {/* ---------------------- BUFFET ----------------------- */}
        <div className="max-w-md  mx-auto bg-white dark:bg-[#353434b4] shadow-md lg:max-w-6xl">
          <div className="lg:flex">
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
            <div className="p-8 lg:w-[158%]">
              <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                BUFFET
              </div>
              <p className="block mt-6 text-lg leading-tight font-medium dark:text-slate-100 text-gray-800">
                Familiar y con aire acondicionado
              </p>
              <p className="mt-6 text-slate-500 dark:text-slate-200 text-justify">
                Si estás buscando un lugar para disfrutar de ricas comidas en un
                ambiente cálido y familiar, nuestro buffet es la opción ideal.
                Estamos abiertos de lunes a sábado desde las 8 de la mañana
                hasta las 12 de la noche y ofrecemos una gran variedad de
                opciones para desayunos, almuerzos y cenas. Además, contamos con
                un espacio completamente climatizado, lo que lo hace perfecto
                para disfrutar de una comida en cualquier momento del año. ¡Te
                esperamos para que vengas a disfrutar!
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------- QUINCHO ----------------------- */}
        <div className="mt-6 max-w-md  mx-auto bg-blue-100 dark:bg-[#353434b4] shadow-md overflow-hidden lg:max-w-6xl">
          <div className="lg:flex">
            <div>
              <Image className="h-full " src={Quincho} alt="Quincho" />
            </div>
            <div className="p-8 lg:w-[180%]">
              <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                QUINCHO
              </div>
              <p className="block mt-6 text-lg leading-tight font-medium dark:text-slate-100 text-gray-800">
                Lugar preparado para distintos tipos de eventos
              </p>
              <p className="mt-6 dark:text-slate-200 text-slate-500 text-justify">
                En nuestra sede, tenemos un quincho cerrado de 50 metros
                cuadrados, equipado con tres parrillas, mesas y sillas,
                televisor, freezer, heladeras y cocina industrial. Perfecto para
                juntadas en familia, almuerzos de trabajo, cumpleaños y todo lo
                que quieras. Vení a conocer nuestras instalaciones en el Club
                Social y Deportivo Agronomía Central en CABA, o escribinos a
                clubagronomiacentral@gmail.com o llamanos al 4524-2225.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------- SALON DE FIESTAS ----------------------- */}
        <div className="mt-6 max-w-md  mx-auto bg-white dark:bg-[#353434b4] shadow-md overflow-hidden lg:max-w-6xl">
          <div className="lg:flex">
            <div>
              <Image className="h-full" src={Salon} alt="Salón de Fiestas" />
            </div>
            <div className="p-8 w-[100%]">
              <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                SALÓN DE FIESTAS
              </div>
              <p className="block mt-6 text-lg leading-tight font-medium dark:text-slate-100 text-gray-800">
                Salón exclusivo para eventos memorables
              </p>
              <p className="mt-6 text-slate-500 dark:text-slate-200 text-justify">
                Festejá tu evento en Agronomía Central, el lugar más destacado y
                con trayectoria en Parque Chas por más de 30 años. Contamos con
                instalaciones adaptables para eventos de hasta 120 personas,
                equipado con barra de tragos, cocina industrial, cabina de DJ y
                mucho más. Ya sea para eventos empresariales, bautismos,
                cumpleaños, casamientos o cualquier otra celebración, nosotros
                lo hacemos posible. Acercate a visitarnos de lunes a viernes de
                18 a 20 hs en Bauness 958 CABA. Si querés más información,
                escribinos a clubagronomiacentral@gmail.com o al 4524-2225.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------- CANCHAS ----------------------- */}
        <div className="my-6 max-w-md  mx-auto bg-blue-100 dark:bg-[#353434b4] shadow-md  lg:max-w-6xl">
          <div className="lg:flex">
            <div className="relative group">
              <Image
                src={images2[currentIndex2]}
                className="  h-full"
                alt="Canchas"
              ></Image>
              <button
                onClick={prevSlide1}
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
                onClick={nextSlide1}
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
            <div className="p-8 w-[100%]">
              <div className=" text-center tracking-wide text-2xl text-blue-500 font-semibold lg:text-left">
                CANCHAS
              </div>
              <p className="block mt-6 text-lg leading-tight font-medium dark:text-slate-100 text-gray-800">
                Canchas en excelente estado listas para disfrutar
              </p>
              <p className="mt-6 text-slate-500 dark:text-slate-200 text-justify">
                En el Club, vas a encontrar dos canchas techadas en excelente
                estado para disfrutar de tu deporte favorito sin importar el
                clima: una principal de fútbol 5, y una auxiliar para
                entrenamientos. Además, podés alquilar la cancha auxiliar junto
                con el quincho para festejos infantiles. ¡Vení y disfrutá de una
                experiencia deportiva única en nuestras cómodas instalaciones!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
