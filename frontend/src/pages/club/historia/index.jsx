import Image from 'next/image';

import { Layout } from '@/components/Page';
import { useHistoryLine } from '@/hooks';

import HistoryPic1 from '../../../../public/history-img/HistoryPic1.jpg';
import HistoryPic2 from '../../../../public/history-img/HistoryPic2.jpg';
import HistoryPic3 from '../../../../public/history-img/HistoryPic3.jpg';
import HistoryPic6 from '../../../../public/history-img/HistoryPic6.jpg';
import HistoryPic7 from '../../../../public/history-img/HistoryPic7.jpg';
import HistoryPic8 from '../../../../public/history-img/HistoryPic8.jpg';
import HistoryPic9 from '../../../../public/history-img/HistoryPic9.jpg';
import HistoryPic11 from '../../../../public/history-img/HistoryPic11.jpg';
import HistoryPic13 from '../../../../public/history-img/HistoryPic13.jpg';

export default function History() {
  const { inform, clickedButton, handleClick, handlerNext, handlerPrev } =
    useHistoryLine();
  return (
    <Layout title="Nuestra Historia" image={HistoryPic7}>
      <>
        <div className="mt-8">
          {inform[clickedButton] ? (
            <p className="md:hidden ml-20 mr-20 text-center text-gray-700 bg-cyan-500 animate-[openMobileMenu_0.5s_ease] ">
              {inform[clickedButton]}
            </p>
          ) : null}
          <ul className="grid grid-cols-9 gap-4 justify-center flex-nowrap">
            <button
              className="text-5xl dark:text-slate-100"
              onClick={handlerPrev}
            >
              {'<'}
            </button>
            {/* ---------------------------------------Boton 1------------------------------------------------ */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="Inicio de nuestra historia">
                <button
                  onClick={handleClick}
                  value="1"
                  className={
                    clickedButton !== '1'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '1' ? (
                <p className=" hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  Inicio de nuestra historia
                </p>
              ) : null}
            </div>
            {/*----------------------------------------- Boton 2--------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="La casa propia">
                <button
                  onClick={handleClick}
                  value="2"
                  className={
                    clickedButton !== '2'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '2' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  La casa propia
                </p>
              ) : null}
            </div>
            {/* ---------------------------------------- BOTON 3 -------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="Nuevas Instalaciones">
                <button
                  onClick={handleClick}
                  value="3"
                  className={
                    clickedButton !== '3'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '3' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  Nuevas instalaciones
                </p>
              ) : null}
            </div>
            {/* ---------------------------------------- BOTON 4 -------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="A travez de los años">
                <button
                  onClick={handleClick}
                  value="4"
                  className={
                    clickedButton !== '4'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '4' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  A través de los años
                </p>
              ) : null}
            </div>
            {/* ---------------------------------------- BOTON 5 -------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="Inicio del Baby futbol">
                <button
                  onClick={handleClick}
                  value="5"
                  className={
                    clickedButton !== '5'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '5' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  Inicio del Baby Fútbol
                </p>
              ) : null}
            </div>
            {/* ---------------------------------------- BOTON 6 -------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="Obras y Tradiciones">
                <button
                  onClick={handleClick}
                  value="6"
                  className={
                    clickedButton !== '6'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '6' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  Obras y tradiciones
                </p>
              ) : null}
            </div>
            {/* ---------------------------------------- BOTON 7 -------------------------------------------- */}
            <div className="flex flex-col items-center place-self-center">
              <abbr title="En la Actualidad">
                <button
                  onClick={handleClick}
                  value="7"
                  className={
                    clickedButton !== '7'
                      ? 'bg-gray-700 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                      : 'bg-cyan-500 w-4 h-4 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
                  }
                ></button>
              </abbr>
              {clickedButton === '7' ? (
                <p className="hidden md:flex text-center text-gray-700 bg-cyan-500 rounded-xl animate-[openMobileMenu_0.5s_ease] origin-top shadow-[0px_5px_10px_#000000a5]">
                  En la actualidad
                </p>
              ) : null}
            </div>
            <button
              className="text-5xl dark:text-slate-100"
              onClick={handlerNext}
            >
              {'>'}
            </button>
          </ul>
        </div>
        {/* -------------------------------------------INFO A RENDERIZAR--------------------------------------- */}
        <div className="">
          <div className="flex flex-col">
            {/* <h1 className='text-lg underline mt-2'>Algo de Nuestra Historia: </h1> */}
            {clickedButton === '1' && (
              <div>
                <div className="md:flex">
                  <p className="text-justify dark:text-slate-100 text-gray-700 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                    En un cuartito de la calle Chorroarín 632, alrededor de una
                    mesa de pino y a la luz de una lámpara a kerosene, un grupo
                    de jóvenes del barrio se reunieron el 11 de diciembre de
                    1928 para fundar un club deportivo.
                  </p>
                  <p className="text-justify dark:text-slate-100 text-gray-700 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                    Así nació el Club Social y Deportivo Agronomía Central.
                    Durante dos años, el grupo fundador llevó con orgullo el
                    prestigio de la institución por todas las canchas de fútbol
                    improvisadas en los terrenos baldíos de la ciudad.
                  </p>
                  <p className="text-justify dark:text-slate-100 text-gray-700 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                    En 1930, se fusionaron con el Club Villa Modelo y, para
                    dirigir los destinos de la nueva entidad, se eligió a la
                    Comisión Directiva integrada por los señores Mirabelli,
                    Collazo, Gama de Santis, Repetto, Plácido, Felice,
                    Staricanelli, Turconi, Gentile, Florentino, Bruneli, Borghi
                    y Amore.
                  </p>
                </div>
                <div className="md:grid md:grid-cols-2 gap-6 items-center dark:text-slate-100 text-gray-700">
                  <Image src={HistoryPic1} alt="PicAlgoHitoria1" className="h-auto w-full object-contain" />
                  <Image src={HistoryPic2} alt="PicAlgoHitoria1" className="lg:h-[326px]" />
                </div>
              </div>
            )}
            {/* <h1 className='text-lg underline mt-2'>La casa propia:</h1> */}
            {clickedButton === '2' && (
              <div className="">
                <p className="text-justify dark:text-slate-100 text-gray-700 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                  Hasta 1933, el club ocupó una casita en la esquina de las
                  calles Chorroarín y Andonaegui. Luego, otros deportes
                  comenzaron a seducir a los asociados y, poco a poco, el
                  baloncesto y el tenis fueron desplazando al fútbol. Al mismo
                  tiempo, la actividad social en la institución ganó impulso con
                  la incorporación de las primeras socias. El local pronto se
                  quedó pequeño y fue necesario mudarse a la finca de la calle
                  Bucareli 964 y, luego, a la de Bauness 931. La Comisión
                  Directiva que asumió el cargo en 1930 tras la fusión con el
                  Club Villa Modelo tomó una decisión importante en 1936:
                  adquirir la casa propia. Las autoridades del club compraron un
                  amplio terreno en la calle Bauness 958 y construyeron un
                  edificio que constaba de dos salas donde se instalaron las
                  oficinas de la secretaría y la biblioteca, un amplio hall en
                  el que se llevaban a cabo los juegos de salón y una habitación
                  larga donde se encontraban los billares.
                </p>
              </div>
            )}
            {/* <h1 className='text-lg underline'>Nuevas instalaciones:</h1> */}
            {clickedButton === '3' && (
              <div className="md:grid md:grid-cols-3 text-gray-700 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                <Image src={HistoryPic3} alt="PicNuevasInst" className="h-auto w-full object-contain" />
                <p className="text-justify dark:text-slate-100 text-gray-700">
                  En cuanto a la construcción, habían preparado una gran terraza
                  que se utilizaba como buffet en los días cálidos y templados.
                  Se habían habilitado canchas de básquet, tenis, pelota y
                  bochas en tres lotes contiguos. Además, las instalaciones
                  propias incluían dos amplias pistas de baile y, en ese
                  momento, se estaba proyectando una cancha cerrada de pelota
                  que también serviría como salón de baile. Durante ese período,
                  la comisión directiva estaba encabezada por el señor Alfonso
                  Rodríguez, con el secretario Carlos Pozzi, el prosecretario
                  Zamora Casas y el tesorero Osvaldo Borghi como sus
                  colaboradores.
                </p>

                <Image src={HistoryPic6} alt="PicNuevasInst2" className="h-auto w-full object-contain" />
              </div>
            )}
            {clickedButton === '4' && (
              <div className="md:grid grid-cols-2 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                <figure className='my-4'>
                  <Image src={HistoryPic7} alt="PicEquipo" className="h-[316px]" />
                  <figcaption className="text-justify dark:text-slate-100 text-gray-700 my-4">
                    A lo largo de los años, en el club, fueron desarrollándose
                    distintas disciplinas, entre las que se destacan dos en
                    especial: el básquet, donde el club llegó a jugar en la liga
                    de la capital, y el fútbol.
                  </figcaption>
                </figure>
                <figure className='my-4 lg:translate-y-3'>
                  <Image src={HistoryPic8} alt="PicEquipo2" className="h-[316px]" />
                  <figcaption className="text-justify dark:text-slate-100 text-gray-700 my-4">
                    El club también se caracterizó por celebrar los carnavales
                    con distintas murgas de los barrios y sus famosos
                    campeonatos de baile. Además, se organizaban torneos de Papi
                    Fútbol, donde se inscribían equipos de las cercanías.
                  </figcaption>
                </figure>
              </div>
            )}
            {/* <h1 className='text-lg underline'>Inicio del Baby Futbol</h1> */}
            {clickedButton === '5' && (
              <div className="flex flex-col items-center text-gray-700 dark:text-slate-100 gap-6 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                <p>
                  En 1983, "el turco" Balouz y Jose Rucci se acercaron al club
                  con la idea de comenzar a jugar al Baby Fútbol, donde
                  participarían chicos de entre 6 y 13 años. A partir de ahí, se
                  dio inicio a lo que hoy continúa de manera ininterrumpida
                  después de 40 años.
                </p>
                <Image src={HistoryPic9} alt="PicBabyFutbol" className='h-auto w-full object-contain' />
              </div>
            )}
            {/* <h1 className='text-lg underline'>Obras y Tradiciones:</h1> */}
            {clickedButton === '6' && (
              <div className="md:grid grid-cols-2 gap-6 justify-items-center items-center m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                <figure>
                  <Image src={HistoryPic11} alt="PicObras" className='' />
                  <figcaption className="text-justify dark:text-slate-100 text-gray-700 py-4">
                    Juntada de un vagón de ropa para los afectados por la
                    inundación en Santa Fe.
                  </figcaption>
                </figure>
                <figure className='lg:-translate-y-3 '>
                  <Image src={HistoryPic13} alt="PicObras" className='lg:h-[316px]' />
                  <figcaption className="text-justify dark:text-slate-100 text-gray-700 py-4">
                    Tradición del partido de fin de año entre solteros y
                    casados.
                  </figcaption>
                </figure>
              </div>
            )}
            {/* <h1 className='text-lg underline'>En la Actualidad:</h1> */}
            {clickedButton === '7' && (
              <p className="text-justify dark:text-slate-100 text-gray-700 m-1 p-2 md:p-4 md:items-center lg:p-6 xl:p-8">
                Actualmente, el club ha crecido notablemente y ofrece no solo
                fútbol sino también ajedrez, touch ball y taekwondo. Además,
                cuenta con un quincho con capacidad para 50 personas, un buffet
                económico y un salón de fiestas para 120 personas. Todo esto no
                hubiera sido posible sin la ayuda constante de las diferentes
                generaciones que han pasado por el club, siempre trabajando sin
                recibir compensación para lograr un crecimiento constante.
                Gracias a esto, hoy en día somos lo que somos.
              </p>
            )}
          </div>
        </div>
      </>
    </Layout>
  );
}
