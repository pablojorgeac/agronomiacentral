import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Banner, Contributions, Donation, Publicity } from '..';
import Quincho from '../../../../public/installations-img/Imagen4.jpg';
import Image from 'next/image';
import useStore from '@/store/globalstore';
import { MatchesTable } from '@/components/Dashboard/MatchesTable';
import { useMatches, useDates } from '@/hooks';

export function HomePage() {
  const { matches } = useStore();
  const { getMatches } =useMatches();
  const { nextDates } = useDates();
  const showMatches = nextDates(matches, 5);
  const [donate, setDonate] = useState(false);
  const visibleContributions = () => {
    setDonate(!donate);
  };

  useEffect(() => {
    getMatches();
    function handleScroll() {
      const video = document.querySelector('video');

      if (video) {
        const videoTop = video.getBoundingClientRect().top;
        const videoHeight = video.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const offset = viewportHeight / 2;

        if (
          videoTop < scrollPosition + viewportHeight - offset &&
          videoTop + videoHeight > scrollPosition + offset
        ) {
          video.classList.remove('blur');
        } else if (scrollPosition === videoTop) {
          video.classList.remove('blur');
        } else {
          video.classList.add('blur');
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      <Banner />
      <div className="contenido w-full pt-80 sm:pt-32 md:pt-40 lg:pt-20 text-center dark:bg-gradient-to-b dark:from-[#1f1e1ef5] duration-500 dark:to-[#000000] bg-gradient-to-b from-[#397797] to-blue-950">
        <div className="lg:max-w-5xl m-auto">
          <section className="my-10">
            <article className="mb-7">
              <h2 className="text-4xl text-slate-100 font-bold">
                Algunas de Nuestras Disciplinas
              </h2>
              <article className="flex flex-wrap justify-center gap-1 mt-2">
                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg hover:scale-105 transition ease-in-out">
                  <Link href='/deportes/futbol-infantil'>
                    <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                      <p className="sm:text-3xl text-white font-normal tracking-wide">Fútbol infantil</p>
                    </div>
                    <img
                      src="https://img.freepik.com/fotos-premium/nino-nino-preparandose-tiro-baloncesto-nino-posando-pelota-baloncesto_265223-81031.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
                      alt="Fútbol infantil"
                    />
                  </Link>
                </div>

                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg hover:scale-105 transition ease-in-out">
                  <Link href='/deportes/futsal-femenino'>
                    <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                      <p className="sm:text-3xl text-white font-normal">
                        Futsal Femenino
                      </p>
                    </div>
                    <img
                      src="https://img.freepik.com/foto-gratis/piernas-cultivo-pateando-pelota-sobre-hierba_23-2147817394.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
                      alt="Futsal Femenino"
                    />
                  </Link>
                </div>

                <div className="w-1/3 aspect-w-1 aspect-h-1 sm:w-[33%] sm:h-32 overflow-hidden rounded-lg relative shadow-lg hover:scale-105 transition ease-in-out">
                  <Link href='/deportes/taekwondo'>
                    <div className="w-full h-full bg-gradient-to-r from-neutral-950 to-transparent absolute flex items-end p-2">
                      <p className="sm:text-3xl text-white font-normal">Taekwondo</p>
                    </div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0646/4097/files/Reglas_del_Taekwondo_2048x2048.jpg?v=1657541457"
                      alt="Taekwondo"
                    />
                  </Link>
                </div>
              </article>
            </article>
            <Link
              href="/deportes"
              className="py-4 px-6 mt-4   bg-gray-100 dark:bg-[#171717] hover:fill-slate-100 hover:text-white dark:hover:bg-[#264A72] hover:bg-[#264A72] transition duration-300 ease-in-out text-gray-900 dark:text-slate-100 rounded font-bold text-lg leading-[14px] text-center"
            >
              Ver todas las disciplinas
            </Link>
          </section>
          <section className="my-10">
            <div className="flex">
              <article className="w-1/2 flex flex-col justify-center items-start mx-4">
                <h2 className="text-4xl text-left text-slate-100 font-bold mb-3">
                  Pasa un buen rato en nuestro quincho
                </h2>
                <p className="text-slate-100 text-left">
                  Alquila en el horario de 11hs a 17hs o 19hs a 02hs
                </p>
                <p className="text-slate-100 text-left">
                  Para asados, reuniones familiares y mucho mas!
                </p>
                <Link
                  href="/club/quincho"
                  className="py-4 px-6 mt-4   bg-gray-100 dark:bg-[#171717] hover:fill-slate-100 hover:text-white dark:hover:bg-[#264A72] hover:bg-[#264A72] transition duration-300 ease-in-out text-gray-900 dark:text-slate-100 rounded font-bold text-lg leading-[14px]  text-center"
                >
                  Solicitar Reserva
                </Link>
              </article>
              <article className="w-1/2 h-fit rounded-lg shadow-lg overflow-hidden">
                <Image src={Quincho} alt="Imagen del quincho" />
              </article>
            </div>
          </section>
          <br className="lg:my-5 lg:py-5" />
          <section className='flex gap-1'>
            <article className='m-2'>
              <h2 className="text-4xl text-center text-slate-100 font-bold mb-3">Nuestra Misión</h2>
              <p className="text-slate-100">Ser un club de que ofrezca una variedad de actividades deportivas y recreativas, acordes a  las necesidades del barrio, para fomentar una mejor calidad de vida</p>
            </article>
            <article className='m-2'>
              <h2 className="text-4xl text-center text-slate-100 font-bold mb-3">Nuestra Visión</h2>
              <p className="text-slate-100">Ser reconocidos como una institucion deportiva de referencia en el barrio con una amplia trayectoria pero con una vision de futuro caracterizada por la innovacion y el compromiso constante</p>
            </article>
          </section>
          <br className="lg:my-5 lg:py-5" />
        <hr className="lg:mt-5 lg:pt-5 border-gray-600" />
        </div>

        <br className="lg:my-5 lg:py-5" />
        <div className='overflow-y-auto'>
        {
        showMatches.length===0? <div className="flex flex-row items-center justify-center mt-8">
                  <div></div>
          </div>:
          <>

          <h2 className="text-4xl text-slate-100 font-bold">
                Próximos encuentros deportivos
        </h2>
          <MatchesTable
          matches={showMatches}
        />
         </>
        }

        </div>
        <br className="lg:my-5 lg:py-5 m-4" />
        <Link
                  href="/deportes"
                  className="py-4 px-6 bg-gray-100 dark:bg-[#171717] hover:fill-slate-100 hover:text-white dark:hover:bg-[#264A72] hover:bg-[#264A72] transition duration-300 ease-in-out text-gray-900 dark:text-slate-100 rounded font-bold text-lg leading-[14px]  text-center"
                >
                  Ver todos
        </Link>

        <br className="lg:my-5 lg:py-5" />
        <br className="lg:my-5 lg:py-5" />
        <Donation visibleContributions={visibleContributions} />
        {donate ? (
          <Contributions visibleContributions={visibleContributions} />
        ) : null}
        <br className="lg:my-5 lg:py-5" />
        <hr className="lg:mt-5 lg:pt-5 border-gray-500" />
        <Publicity />
      </div>
    </div>
  );
}
