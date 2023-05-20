import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import { useMatches, useDates } from '@/hooks';
import useStore from '@/store/globalstore';
import { useState, useEffect } from 'react';


export default function Escuelita({ data }) {


  const { nextDates } = useDates();
  const showMatches = nextDates(data.filter(m=>m.discipline==='Escuelita de Fútbol'),1)

  return (
    <Layout
      title="Escuelita de Fútbol"
      image="https://img.freepik.com/fotos-premium/pelota-futbol-encuentra-agua-hielo-fondo_853115-1530.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <div className="m-4 grid md:grid-cols-3">
        <div className="md:rounded-l-lg bg-zinc-100 dark:bg-[#353434b4] col-span-1 grid">
          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 place-self-center">
            Todos los <strong>martes y viernes de 17.00hs a 18.00hs </strong>,
            llevamos a cabo en nuestra institución “El Jardín De Futbol”, una
            actividad deportiva para{' '}
            <strong>niños y niñas de 3 a 5 años.</strong> Que tiene como
            objetivo, iniciar a los mas pequeños en el mundo del deporte.
          </p>
          <img
            src="https://img.freepik.com/fotos-premium/nino-pateando-pelota-pie-descalzo-mientras-jugaba-futbol-callejero-campo-hierba-verde_34141-412.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futbol infantil"
            loading="lazy"
            className="md:rounded-bl-lg hidden md:block place-self-center"
          />
        </div>

        <img
          src="https://img.freepik.com/foto-gratis/nino-jugando-pelota-futbol-afuera-junto-otros-ninos_23-2148631501.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
          alt="futbol infantil"
          loading="lazy"
          className=" col-span-1"
        />
        <div className="md:rounded-r-lg bg-zinc-100 dark:bg-[#353434b4] col-span-1 grid">
          <img
            src="https://img.freepik.com/fotos-premium/bola-patadas-nino_236854-1800.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futbol infantil"
            loading="lazy"
            className="md:rounded-tr-lg hidden md:block"
          />
          <p className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 place-self-center">
            Con la incorporación de esta actividad se brinda a los más chiquitos
            un espacio de juegos y conocimientos iniciadores del futbol, que año
            tras año irán adquiriendo{' '}
            <strong>
              {' '}
              nuevos conocimientos y potenciando nuevas sus habilidades
            </strong>
            .
          </p>
        </div>
      </div>

      {
        showMatches.length===0? <div className="flex flex-row items-center justify-center mt-8">
                  <p className="pl-2">No hay próximos encuentros programados para esta disciplina</p>
          </div>:
      <MatchesInfo
        data={showMatches}
        classname={
          'bg-indigo-100 dark:bg-[#2C2C2C]  w-full h-full flex items-center'
        }
        iconOne={   <svg
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
            </svg>}

        iconTwo={   <svg
              width="64px"
              height="64px"
              viewBox="0 0 48 48"
              fill="#fb923c"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier2" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
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
            </svg>}
      />}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://club-agronomia-central-production.up.railway.app/api/matches'
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
