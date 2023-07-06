import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import { useDates } from '@/hooks';

export default function FutInF({ data }) {
  const { nextDates } = useDates();
  const showMatches = nextDates(
    data.filter((m) => m.discipline === 'Fútbol Infantil'),
    1
  );

  return (
    <Layout
      title="Baby Futbol"
      image="https://img.freepik.com/vector-gratis/balon-futbol-pictograma-red_1284-11698.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <section className="my-4">
        <div className="grid grid-cols-1 grid-rows-12 md:grid-cols-2 place-items-center">
          <img
            src="/sports-img/Baby-Futbol1.jpg"
            alt="futbol infantil"
            loading="lazy"
            className="w-full row-span-1"
          />

          <div className="relative w-full row-span-4">
            <img
              src="/sports-img/Baby-Futbol3.jpg"
              alt="futbol infantil"
              loading="lazy"
              className="hidden md:block w-full row-span-4 z-0"
            />
            <div className="absolute inset-0 md:bg-blue-800 md:opacity-50"></div>
          </div>

          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 p-5 m-3 row-span-1">
            Desde hace más de 40 años, nuestro club compite en baby fútbol,
            primero en la liga argentina y luego en <strong>FAFI</strong> y
            actualmente en <strong> FEFI</strong>. Este deporte es una actividad
            que reúne a niños y sus familiares, quienes disfrutan de hermosas
            jornadas viendo crecer y divertirse a sus seres queridos.
          </p>

          <div className="relative w-full hidden md:block ">
            <img
              src="/sports-img/Baby-Futbol2.jpg"
              alt="futbol infantil"
              loading="lazy"
              className="hidden md:block w-full row-span-1 z-0"
            />
            <div className="absolute inset-0 md:bg-blue-800 md:opacity-50"></div>
          </div>

          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 row-span-1 p-5 m-3">
            Este deporte se realiza con chicos {''}
            <strong>desde los 6 hasta los 13 años</strong>, quienes encuentran
            en él un espacio sano para recrearse y comenzar a practicar deporte,
            además de competir y medir sus habilidades contra otros niños de su
            misma edad.
          </p>

          <div className="relative row-span-1 w-full">
            <img
              src="/sports-img/Baby-Futbol4.jpg"
              alt="futbol infantil"
              loading="lazy"
              className="w-full row-span-1 z-0"
            />
            <div className="absolute inset-0 md:bg-blue-800 md:opacity-50"></div>
          </div>

          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 row-span-1 p-5 m-3">
            Las tiras selectivo matutino y color practican los martes y viernes{' '}
            <strong>de 18.00hs a 19.00</strong>
            categorías 2017/2016/2015, {''}
            <strong>de 19.00hs a 20.00hs</strong> categorías 2014/2013,{' '}
            <strong>de 20.00hs a 21.00hs</strong> {''}
            categorías 2012/2011/2010, las mismas son dictadas por los profes{' '}
            <em>Diego, Gonzalo, Román, Lucas</em>
          </p>

          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 row-span-1 p-5 m-3">
            La tira de letra practica los {''}
            <strong>lunes y miércoles de 17.00hs a 18.00hs</strong>
            categorías 2016/2015 {''}
            <strong>, de 18.00hs a 19.00hs</strong> categorías 2014/2013,{' '}
            <strong>de 19.00hs a 20.00hs</strong> las categorías 2012/2011/2010,
            con los profes {''}
            <em>Juan y Julián</em>.
          </p>

          <img
            src="/sports-img/Baby-Futbol1.jpg"
            alt="futbol infantil"
            loading="lazy"
            className="w-full row-span-1"
          />
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
            classname={
              'w-full h-full flex items-center md:bg-green-300 dark:bg-blue-800 md:opacity-200'
            }
            iconOne={
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path
                    d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"
                    fill="#2F88FF"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                  ></path>{' '}
                  <path
                    d="M19 46C20.6569 46 22 44.6569 22 43C22 41.3431 20.6569 40 19 40C17.3431 40 16 41.3431 16 43C16 44.6569 17.3431 46 19 46Z"
                    fill="#1b418a"
                  ></path>{' '}
                  <path
                    d="M24.38 18.91L20 27L27.31 33.02C27.62 33.26 27.84 33.59 27.97 33.96L31 44"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M20 27L14.51 34.64C13.97 35.43 12.95 35.73 12.07 35.36L4 32"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M42 24H35C34.64 24 34.28 23.91 33.96 23.73L30.75 21.92C26.74 19.57 22.35 17.96 17.78 17.14L14.56 16.57C14.11 16.49 13.64 16.57 13.24 16.79L7 20"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            }
            iconTwo={
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier2" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier2">
                  {' '}
                  <path
                    d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"
                    fill="#fb923c"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                  ></path>{' '}
                  <path
                    d="M19 46C20.6569 46 22 44.6569 22 43C22 41.3431 20.6569 40 19 40C17.3431 40 16 41.3431 16 43C16 44.6569 17.3431 46 19 46Z"
                    fill="#fb923c"
                  ></path>{' '}
                  <path
                    d="M24.38 18.91L20 27L27.31 33.02C27.62 33.26 27.84 33.59 27.97 33.96L31 44"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M20 27L14.51 34.64C13.97 35.43 12.95 35.73 12.07 35.36L4 32"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                  <path
                    d="M42 24H35C34.64 24 34.28 23.91 33.96 23.73L30.75 21.92C26.74 19.57 22.35 17.96 17.78 17.14L14.56 16.57C14.11 16.49 13.64 16.57 13.24 16.79L7 20"
                    stroke="#1b418a"
                    strokeWidth="4"
                    strokeMiterlimit="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{' '}
                </g>
              </svg>
            }
          />
        )}
      </section>
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
