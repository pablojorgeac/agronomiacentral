import { Layout } from '@/components/Page';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import insta from '../../../../public/contact-img/insta.svg';
import Image from 'next/image';
import { useMatches, useDates } from '@/hooks';
import useStore from '@/store/globalstore';
import { useState, useEffect } from 'react';

export default function FutSal({ data }) {
  // const { matches } = useStore();
  // const { getMatches } = useMatches();
  const { nextDates } = useDates();
  const showMatches = nextDates(
    data.filter((m) => m.discipline === 'Futsal'),
    1
  );

  // useEffect(()=>{
  //   getMatches();
  // }, [])

  return (
    <Layout
      title="Futsal"
      image="https://img.freepik.com/vector-gratis/fondo-futbol-abstracto-degradado_52683-66767.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
    >
      <div className="m-4 grid md:grid-cols-5">
        <p className="text-base text-gray-700 dark:text-slate-100 leading-6 col-span-3 pl-5 ml-3 ">
          El club participa en la modalidad de futsal desde el año 2014. También
          el club cuenta con futsal para mayores de 30 años y futsal seniors
          para mayores de 36 años, donde participa en la liga Laamba
        </p>

        <div className="col-span-3 p-5">
          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3">
            <img
              src="https://img.freepik.com/foto-gratis/jugador-futbol-afortunado_1368-3023.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3 md:order-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5 md:order-1">
              Liga BAFI
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200 leading-6 md:col-span-2 row-span-2 md:row-span-1 px-5 md:order-2">
              Actualmente el club participa en futsal promocional categorías
              2015/2014/2013, en la <strong>liga BAFI</strong>, donde compite
              con otros clubes de gran renombre en la modalidad, como San
              Lorenzo, Boca Juniors, Kimberley, 17 de agosto, entre otros.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3 grid-cols-1">
            <img
              src="https://img.freepik.com/foto-gratis/joven-jugador-juego-tiro-competencia_1368-1902.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5">
              Liga Laamba
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200 leading-6 col-span-2 row-span-2 md:row-span-1 px-5">
              Participa desde 7 división hasta 1 división, el club cuenta con
              dos tiras. Los profes que están a cargo son{' '}
              <em>
                Diego Arbelo, Diego Curuchet, Maximiliano Maccarone, Sebastian
                Oroño, Roman Volpe, Gonzalo y Leandro
              </em>
              , todo supervisado por nuestro coordinador deportivo{' '}
              <em>Maximiliano Maccarone</em> con experiencia dirigiendo futsal
              AFA.
            </p>
          </div>

          <div className="bg-zinc-100 dark:bg-[#353434b4] grid grid-row-4 md:grid-cols-3 md:grid-row-2 m-3">
            <img
              src="https://img.freepik.com/foto-gratis/hombre-jugando-al-futbol_1368-3003.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
              alt="futsal"
              loading="lazy"
              className="place-self-center row-span-1 md:row-span-2 md:p-3 md:order-3"
            />
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 p-5 col-span-2 row-span-1 px-5">
              Practica
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-200  leading-6 md:col-span-2 row-span-2 md:row-span-1 px-5 md:order-2">
              Categorías promo los días{' '}
              <strong>jueves de 17.30hs a 19.30hs</strong> en nuestra sede, 4 y
              5 división{' '}
              <strong>de 19.00hs a 22.00hs en el Colegio San Roque</strong>,
              calle plaza 1154, 1 y 3 división{' '}
              <strong>miércoles y jueves de 20hs a 23hs</strong> en nuestra sede
              y 8 a 1 división <strong>martes y viernes de 20hs a 23hs</strong>.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap col-span-3 md:col-span-2">
          <img
            src="https://img.freepik.com/fotos-premium/jugador-futbol-patea-pelota_43569-260.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futsal"
            loading="lazy"
            className="md:rounded-full place-self-center px-5 md:p-0"
          />
          <div className="flex flex-row items-center justify-center mt-8 lg:mt-0">
            <a href="https://www.instagram.com/agronomiafutsal" target="_blank">
              <Image
                src={insta}
                alt="Instagram"
                className="w-8 invert dark:invert-0"
              />
            </a>
            <p className="pl-2">Visita nuestro instagram para conocer más!!!</p>
          </div>
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
          classname={
            'w-full h-full flex items-center bg-zinc-100 dark:bg-[#353434b4]'
          }
          iconOne={
            <svg
              fill="#1b418a"
              height={60}
              width={60}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#1b418a"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M471.725,86.41H40.275C18.068,86.41,0,104.476,0,126.684v258.631c0,22.208,18.068,40.275,40.275,40.275h431.451 c22.207,0,40.275-18.067,40.275-40.275V126.684C512,104.476,493.932,86.41,471.725,86.41z M478.898,385.316 c0,3.954-3.218,7.172-7.172,7.172H40.275c-3.954,0-7.172-3.218-7.172-7.172V126.684c0-3.954,3.218-7.172,7.172-7.172h431.451 c3.954,0,7.172,3.218,7.172,7.172V385.316z" />
                    {'{'}' '{'}'}
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M447.255,140.546H64.745c-9.141,0-16.551,7.41-16.551,16.551v49.839v98.821v49.146c0,9.141,7.41,16.551,16.551,16.551 h382.51c9.141,0,16.551-7.41,16.551-16.551V157.098C463.806,147.957,456.396,140.546,447.255,140.546z M272.551,227.231 c9.944,5.743,16.656,16.484,16.656,28.769c0,12.285-6.711,23.026-16.656,28.769V227.231z M81.295,223.488h44.121v65.719H81.295 V223.488z M239.448,284.769c-9.944-5.743-16.656-16.484-16.656-28.769c0-12.285,6.712-23.026,16.656-28.769V284.769z M239.448,191.782c-28.581,7.371-49.757,33.367-49.757,64.217s21.176,56.846,49.757,64.217v18.135H81.295v-16.043h60.672 c9.141,0,16.551-7.41,16.551-16.551v-98.821c0-9.141-7.41-16.551-16.551-16.551H81.295v-16.737h158.153V191.782z M430.703,190.038 h-61.616c-9.141,0-16.551,7.41-16.551,16.551v98.821c0,9.141,7.41,16.551,16.551,16.551h61.616v16.39H272.551v-18.135 c28.581-7.371,49.757-33.367,49.757-64.217s-21.176-56.846-49.757-64.217v-18.133h158.153V190.038z M429.76,223.141v65.719 h-44.121v-65.719H429.76z" />
                    {'{'}' '{'}'}
                  </g>
                </g>
              </g>
            </svg>
          }
          iconTwo={
            <svg
              fill="#fb923c"
              height={60}
              width={60}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#1b418a"
            >
              <g id="SVGRepo_bgCarrier2" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier2">
                <g>
                  <g>
                    <path d="M471.725,86.41H40.275C18.068,86.41,0,104.476,0,126.684v258.631c0,22.208,18.068,40.275,40.275,40.275h431.451 c22.207,0,40.275-18.067,40.275-40.275V126.684C512,104.476,493.932,86.41,471.725,86.41z M478.898,385.316 c0,3.954-3.218,7.172-7.172,7.172H40.275c-3.954,0-7.172-3.218-7.172-7.172V126.684c0-3.954,3.218-7.172,7.172-7.172h431.451 c3.954,0,7.172,3.218,7.172,7.172V385.316z" />
                    {'{'}' '{'}'}
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M447.255,140.546H64.745c-9.141,0-16.551,7.41-16.551,16.551v49.839v98.821v49.146c0,9.141,7.41,16.551,16.551,16.551 h382.51c9.141,0,16.551-7.41,16.551-16.551V157.098C463.806,147.957,456.396,140.546,447.255,140.546z M272.551,227.231 c9.944,5.743,16.656,16.484,16.656,28.769c0,12.285-6.711,23.026-16.656,28.769V227.231z M81.295,223.488h44.121v65.719H81.295 V223.488z M239.448,284.769c-9.944-5.743-16.656-16.484-16.656-28.769c0-12.285,6.712-23.026,16.656-28.769V284.769z M239.448,191.782c-28.581,7.371-49.757,33.367-49.757,64.217s21.176,56.846,49.757,64.217v18.135H81.295v-16.043h60.672 c9.141,0,16.551-7.41,16.551-16.551v-98.821c0-9.141-7.41-16.551-16.551-16.551H81.295v-16.737h158.153V191.782z M430.703,190.038 h-61.616c-9.141,0-16.551,7.41-16.551,16.551v98.821c0,9.141,7.41,16.551,16.551,16.551h61.616v16.39H272.551v-18.135 c28.581-7.371,49.757-33.367,49.757-64.217s-21.176-56.846-49.757-64.217v-18.133h158.153V190.038z M429.76,223.141v65.719 h-44.121v-65.719H429.76z" />
                    {'{'}' '{'}'}
                  </g>
                </g>
              </g>
            </svg>
          }
        />
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'ec2-3-21-37-175.us-east-2.compute.amazonaws.com/api/matches'
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
