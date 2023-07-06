import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import insta from '../../../../public/contact-img/insta.svg';
import face from '../../../../public/contact-img/face.svg';
import twitter from '../../../../public/contact-img/twitter.svg';
import Image from 'next/image';
import { useDates } from '@/hooks';

export default function Chess({ data }) {
  const { nextDates } = useDates();
  const showMatches = nextDates(
    data.filter((m) => m.discipline === 'Ajedrez'),
    1
  );

  return (
    <Layout
      title="Club De Ajedrez Zugzwang"
      image="https://img.freepik.com/fotos-premium/visualizacion-figurativa-idea-estrategia-empresarial-forma-juego-ajedrez_124507-32323.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <div className="m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
          <img
            src="/sports-img/Ajedrez2.jpeg"
            alt="imagen de ajedrez"
            loading="lazy"
            className="w-full"
          />

          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12">
            La idea de club de ajedrez nació en el 2016 con una comisión
            directiva integrada por {''}
            <em>
              Ezequiel Alfero, Jesuan Letizia, Gabriel Izak, Daniel Astaburuaga
              y Oscar Ponomareff
            </em>
            . Hoy, es una realidad con sus torneos pensados, rápidos y blitz, y
            tradicionales torneos por equipos, mixturado con una escuela de
            ajedrez comandada por la {''}
            <em>maestra internacional y excampeona argentina, Marisa Zuriel</em>
            , quien dicta las clases para nivel intermedio los {''}
            <strong>martes a las 18hs</strong>.
          </p>

          <div className="bg-indigo-100 w-full h-full flex items-center">
            <p className="text-base text-gray-700  leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12 bg-indigo-100">
              En un ambiente familiar y sumamente amistoso, se desarrollan los{' '}
              {''}
              <strong>martes a las 19.30hs</strong> los certámenes de ritmo más
              lento, mientras que los {''}
              <strong>sábados a las 16hs</strong>, están a disposición los de
              ritmo más rápido, donde jugadores de todas las edades combinan{' '}
              {''}
              <em>
                mates, jaques, celadas y todas las actividades relacionadas al
                deporte ciencia
              </em>
              .
            </p>
          </div>

          <img
            src="/sports-img/Ajedrez1.jpeg"
            alt="imagen de ajedrez"
            loading="lazy"
            className="w-full"
          />

          <img
            src="/sports-img/Ajedrez4.jpeg"
            alt="imagen de rey"
            loading="lazy"
            className="w-full"
          />
          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12">
            Por otro lado, la escuela de ajedrez a nivel inicial para niños y
            juveniles, de la mano de {''}
            <em>Horacio Taddeo</em>, gran referente del ajedrez escolar, se
            desarrolla los {''}
            <strong>martes a las 18hs</strong> y, a su vez, {''}
            <em>Zuriel</em> lleva adelante, en el mismo horario, la escuela para
            nivel intermedio.
          </p>

          <div className="bg-indigo-100 w-full h-full flex items-center">
            <p className="text-base text-gray-700 leading-6 py-5 md:p-5 lg:mx-8 xl:p-8 xl:m-8 2xl:px-24 2xl:mx-12">
              El Club De Ajedrez Zugzwang en el año 2019 se afilió a la {''}
              <strong>Federación Metropolitana de Ajedrez</strong> para darle un
              formato legal y serio a su constante desarrollo. Si te gusta el
              ajedrez, este es el lugar ideal para estudiar, aprender, jugar y
              divertirse entre amigos.
            </p>
          </div>

          <img
            src="/sports-img/Ajedrez3.jpeg"
            alt="imagen de ajedrez"
            loading="lazy"
            className="w-full"
          />
        </div>
        <br />
        <p className="pl-2 text-center">
          ¡Visitá nuestras redes sociales para conocer más!
        </p>
        <div className="flex flex-row items-center justify-center gap-4 mt-3 ">
          <a href="https://www.instagram.com/clubzugzwang" target="_blank">
            <Image
              src={insta}
              alt="Instagram"
              className="w-8 invert dark:invert-0"
            />
          </a>
          <a
            href="https://www.facebook.com/CLUBDEAJEDREZUGZWANG"
            target="_blank"
          >
            <Image
              src={face}
              alt="Facebook"
              className="w-8 invert dark:invert-0"
            />
          </a>
          <a href="https://twitter.com/ClubZugzwang" target="_blank">
            <Image src={twitter} alt="Twitter" className="w-8 dark:invert" />
          </a>
        </div>
      </div>
      {showMatches.length === 0 ? (
        <div className="flex flex-row items-center justify-center mt-8">
          <p className="pl-2">
            No hay próximos encuentros programados para esta disciplina
          </p>
        </div>
      ) : (
        <MatchesInfo
          data={showMatches}
          iconOne={
            <svg
              height={60}
              width={60}
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#1b418a"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html: ' .st0{fill:#1b418a;} ',
                  }}
                />
                <g>
                  <path
                    className="st0"
                    d="M256,161.408c44.568,0,80.71-36.13,80.71-80.698C336.71,36.142,300.567,0,256,0 c-44.568,0-80.698,36.142-80.698,80.71C175.302,125.278,211.431,161.408,256,161.408z"
                  />
                  <path
                    className="st0"
                    d="M113.114,431.973h285.783c0,0,16.267-3.756,16.267-22.57c0-28.216-50.702-46.641-63.92-56.664 c-61.577-46.726-57.334-145.58,18.023-145.58v-29.74H142.745v29.74c75.345,0,79.588,98.854,18.01,145.58 c-13.218,10.023-63.92,28.448-63.92,56.664C96.836,428.217,113.114,431.973,113.114,431.973z"
                  />
                  <polygon
                    className="st0"
                    points="113.114,451.8 97.544,478.028 97.544,512 414.456,512 414.456,478.028 398.897,451.8 "
                  />
                </g>
              </g>
            </svg>
          }
          iconTwo={
            <svg
              height={60}
              width={60}
              version="1.1"
              id="_x32_2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              fill="#1b418a"
            >
              <g id="SVGRepo_bgCarrier2" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier2">
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html: ' .st1{fill:#fb923c;} ',
                  }}
                />
                <g>
                  <path
                    className="st1"
                    d="M256,161.408c44.568,0,80.71-36.13,80.71-80.698C336.71,36.142,300.567,0,256,0 c-44.568,0-80.698,36.142-80.698,80.71C175.302,125.278,211.431,161.408,256,161.408z"
                  />
                  <path
                    className="st1"
                    d="M113.114,431.973h285.783c0,0,16.267-3.756,16.267-22.57c0-28.216-50.702-46.641-63.92-56.664 c-61.577-46.726-57.334-145.58,18.023-145.58v-29.74H142.745v29.74c75.345,0,79.588,98.854,18.01,145.58 c-13.218,10.023-63.92,28.448-63.92,56.664C96.836,428.217,113.114,431.973,113.114,431.973z"
                  />
                  <polygon
                    className="st1"
                    points="113.114,451.8 97.544,478.028 97.544,512 414.456,512 414.456,478.028 398.897,451.8 "
                  />
                </g>
              </g>
            </svg>
          }
          classname={
            'bg-indigo-100 dark:bg-[#2C2C2C]  w-full h-full flex items-center'
          }
        />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(

      'https://club-agronomia-central-production-0211.up.railway.app/api/matches'
    );
    const data = await res.json();

    return {
      props: { data: data },
      revalidate: 3600,
    };
  } catch (error) {
    return { error: error.message };
  }
}
