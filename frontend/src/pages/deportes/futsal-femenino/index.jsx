import { Layout } from '@/components/Page';
import Image from 'next/image';
import insta from '../../../../public/contact-img/insta.svg';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import { useMatches, useDates } from '@/hooks';
import useStore from '@/store/globalstore';
import { useState, useEffect } from 'react';

export default function FutFem({ data }) {
  const { nextDates } = useDates();
  const showMatches = nextDates(
    data.filter((m) => m.discipline === 'Futsal Femenino'),
    1
  );

  return (
    <Layout
      title="Futsal Femenino"
      image="https://img.freepik.com/foto-gratis/piernas-cultivo-pateando-pelota-sobre-hierba_23-2147817394.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=sph"
    >
      <div className="m-4">
        <div className="grid grid-cols-1 md:grid-row-2 md:grid-cols-3 place-items-center">
          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3">
              En el Club
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 md:text-right row-span-1 col-span-3">
              Se practica en nuestro club desde el año 2016
            </p>
            <svg
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert invert-0"
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"></path>
              </g>
            </svg>
          </div>

          <img
            src="https://img.freepik.com/foto-gratis/mujer-atletica-pateando-futbol_23-2148298864.jpg?size=626&ext=jpg&ga=GA1.1.1228025790.1681327921&semt=ais"
            alt="futsal femenino"
            loading="lazy"
            className="shadow-xl row-span-2"
          />

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <svg
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert invert-0"
              fill="#000000"
              width="64px"
              height="64px"
              viewBox="0 -64 640 640"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
              </g>
            </svg>

            <h3 className="text-lg font-bold dark:text-slate-100 text-gray-800 text-center p-5 row-span-1 col-span-3">
              Campeonas
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 row-span-1 col-span-3">
              En varias oportunidades, en la actualidad
            </p>
          </div>

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <svg
              className="w-8 h-8 row-span-2 col-span-1 place-self-center md:order-3 dark:invert invert-0"
              width="64px"
              height="64px"
              viewBox="-5.5 0 154 154"
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
                  d="M36.9723 124.313C37.3464 117.996 37.6765 112.228 38.0336 106.46C38.327 101.728 40.0197 99.7842 44.721 99.1239C47.4186 98.7452 50.1732 98.7786 52.878 98.4373C53.829 98.3172 55.2054 97.8722 55.5434 97.1699C58.1372 91.7735 60.5388 86.2839 62.9488 80.8008C63.1213 80.1175 63.1981 79.4135 63.1772 78.7091C57.093 76.8799 51.1006 74.6326 46.9978 69.8151C42.8445 64.9346 37.7802 62.9576 31.761 61.6509C23.9358 59.9278 16.6383 56.3524 10.4812 51.2249C6.25376 47.7388 3.05731 43.1657 1.23601 37.9978C-2.52612 27.799 5.19504 11.359 19.8924 11.8959C23.4806 12.0271 27.0773 11.9149 30.6892 11.9149C31.4111 9.33224 31.9362 7.11444 32.6674 4.97018C33.3795 2.88893 34.6213 1.49558 37.1659 1.3991C46.7557 1.03812 56.3349 0.289851 65.926 0.111983C78.1627 -0.114453 90.4074 0.0713539 102.649 0.0785736C111.156 0.0844807 112.256 0.931813 114.388 9.2673C116.93 9.2673 119.513 9.2673 122.095 9.2673C124.064 9.2673 126.033 9.18256 127.994 9.27379C136.78 9.68138 142.926 16.3662 142.129 25.1217C140.479 43.2215 126.744 57.6105 111.091 59.9228C107.08 60.5135 104.987 61.9719 102.901 65.228C98.1226 72.6794 91.2009 77.4726 81.9964 79.477C82.4053 80.8068 82.7236 82.0158 83.1476 83.1867C85.1862 88.8246 88.7376 93.5371 92.4912 98.0953C93.0025 98.7169 94.1511 99.0142 95.0365 99.087C96.9918 99.2511 98.9673 99.1527 100.934 99.2079C105.911 99.3463 107.27 100.586 107.704 105.62C108.107 110.3 108.371 114.991 108.71 119.676C108.764 120.422 108.888 121.163 109.005 122.111C110.595 122.189 112.107 122.197 113.604 122.348C117.702 122.762 119.964 124.819 120.436 128.935C121.158 135.215 121.86 141.507 122.215 147.814C122.478 152.449 120.781 153.768 116.105 153.671C95.7854 153.252 75.4658 152.764 55.1437 152.532C46.8456 152.438 38.5383 152.992 30.2376 153.135C24.2781 153.238 22.5335 150.934 23.3093 144.962C23.8429 140.856 24.0359 136.692 24.196 132.552C24.4369 126.317 25.2462 125.507 31.9408 124.348C33.4064 124.096 34.9547 124.313 36.9723 124.313ZM38.8855 6.83945C38.7167 7.0527 38.5768 7.28727 38.4694 7.53713C38.3525 8.06968 38.2666 8.60863 38.2121 9.15113C36.8456 22.4452 38.3126 35.8778 42.5164 48.5635C46.2575 59.8657 53.8953 67.7778 65.9529 70.6565C82.2589 74.5499 93.6746 68.6652 99.9584 53.087C103.115 45.2602 105.455 37.2312 106.052 28.7638C106.561 21.5539 106.037 14.4038 105.042 6.84209L38.8855 6.83945ZM114.452 130.551L30.1044 131.47C30.5947 136.596 31.0534 141.395 31.4617 145.662L113.01 144.719C113.476 140.142 113.947 135.518 114.452 130.551ZM45.1588 105.708C45.8584 112.186 46.4715 117.85 47.0825 123.526L97.7006 122.501C98.2821 117.22 98.8164 112.397 99.3913 107.153L45.1588 105.708ZM30.4568 18.1882C26.4 18.754 22.7521 19.3158 19.0897 19.7595C15.3912 20.2078 12.9569 22.2634 11.1972 25.4237C8.47279 30.3154 8.9657 35.9592 12.7003 40.7229C16.7407 45.8751 22.2113 48.9855 28.1655 51.3431C30.4319 52.2403 32.7849 52.9183 35.5959 53.8634C31.4676 42.0021 30.6662 30.3836 30.4555 18.1882H30.4568ZM109.971 50.1925C119.671 47.2679 126.045 41.6431 129.872 33.3352C131.257 30.1503 132.161 26.777 132.553 23.326C133.001 19.9019 131.341 17.7471 128.228 17.5292C123.823 17.2168 119.379 17.4498 114.693 17.4498C115.284 28.5683 113.68 39.6944 109.97 50.1925H109.971ZM63.7699 98.333H81.638C79.3258 92.2946 77.0575 86.366 74.6907 80.1839L70.1206 79.9411C68.0072 86.0673 65.9667 91.9678 63.7686 98.333H63.7699Z"
                  fill="#000000"
                ></path>{' '}
              </g>
            </svg>

            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3 md:order-1">
              Liga Laamba
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 md:text-right row-span-1 col-span-3 md:order-2">
              Contamos con 1 division, unica, 3 division y 4 division
              compitiendo en esta liga
            </p>
          </div>

          <div className="row-span-1 p-8 grid grid-cols-4 grid-row-2">
            <svg
              className="w-8 h-8 row-span-2 col-span-1 place-self-center dark:invert "
              width="64px"
              height="64px"
              viewBox="0 0 15 15"
              version="1.1"
              id="soccer"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
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
                  d="M11,1.5C11,2.3284,10.3284,3,9.5,3S8,2.3284,8,1.5S8.6716,0,9.5,0S11,0.6716,11,1.5z M11,11c-0.5523,0-1,0.4477-1,1
	s0.4477,1,1,1s1-0.4477,1-1S11.5523,11,11,11z M12.84,6.09l-1.91-1.91l0,0C10.8399,4.0675,10.7041,4.0014,10.56,4H3.5
	C3.2239,4,3,4.2239,3,4.5S3.2239,5,3.5,5h2.7L3,11.3l0,0c-0.0138,0.066-0.0138,0.134,0,0.2c-0.058,0.2761,0.1189,0.547,0.395,0.605
	C3.6711,12.163,3.942,11.9861,4,11.71l0,0L5,10h2l-1.93,4.24l0,0C5.0228,14.3184,4.9986,14.4085,5,14.5
	c-0.0552,0.2761,0.1239,0.5448,0.4,0.6c0.2761,0.0552,0.5448-0.1239,0.6-0.4l0,0l4.7-9.38l1.44,1.48
	c0.211,0.1782,0.5264,0.1516,0.7046-0.0593C13.0037,6.5523,13.0018,6.2761,12.84,6.09z"
                ></path>{' '}
              </g>
            </svg>
            <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 text-center p-5 row-span-1 col-span-3">
              Practica
            </h3>
            <p className="text-base text-gray-700 dark:text-slate-300  leading-6 py-0 row-span-1 col-span-3">
              El profe a cargo es <em>Fernando</em> y las practicas: {''}
              <strong>lunes y miercoles de 20.00hs a 22.00hs</strong>
              {''} todas las categorias.
            </p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/agronomiacentral.futsalfem"
          target="_blank"
        >
          <div className="flex flex-row items-center justify-center mt-8">
            <Image
              src={insta}
              alt="Instagram"
              className="w-8 invert dark:invert-0"
            />
            <p className="pl-2">Visita nuestro instagram para conocer más!!!</p>
          </div>
        </a>
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
            'w-full h-full flex items-center bg-zinc-200 dark:bg-[#353434b4]'
          }
          iconOne={
            <svg
              fill="#1b418a"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path d="M12,23A11,11,0,1,0,1,12,11.046,11.046,0,0,0,12,23ZM8,20.05a9.029,9.029,0,0,1-2.6-1.956A2,2,0,0,1,8,20.05Zm8,0a2,2,0,0,1,2.6-1.956A8.989,8.989,0,0,1,16,20.05Zm3.369-13.2a9.236,9.236,0,0,1,1.395,3.135A2,2,0,0,1,19.37,6.851Zm-5.745-3.7a1.985,1.985,0,0,1-3.25,0A8.783,8.783,0,0,1,13.625,3.155Zm-9,3.7A2,2,0,0,1,3.235,9.986,8.73,8.73,0,0,1,4.63,6.851ZM5.964,5.344a9.008,9.008,0,0,1,2.459-1.6,3.965,3.965,0,0,0,7.154,0,9.008,9.008,0,0,1,2.459,1.6A3.987,3.987,0,0,0,21,12a8.934,8.934,0,0,1-1.19,4.454,3.976,3.976,0,0,0-5.729,4.293,8.685,8.685,0,0,1-4.162,0A3.976,3.976,0,0,0,4.19,16.454,8.934,8.934,0,0,1,3,12,3.987,3.987,0,0,0,5.964,5.344ZM12,16a4,4,0,1,0-4-4A4,4,0,0,0,12,16Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,10Z" />
              </g>
            </svg>
          }
          iconTwo={
            <svg
              fill="#fb923c"
              width={60}
              height={60}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier2" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path d="M12,23A11,11,0,1,0,1,12,11.046,11.046,0,0,0,12,23ZM8,20.05a9.029,9.029,0,0,1-2.6-1.956A2,2,0,0,1,8,20.05Zm8,0a2,2,0,0,1,2.6-1.956A8.989,8.989,0,0,1,16,20.05Zm3.369-13.2a9.236,9.236,0,0,1,1.395,3.135A2,2,0,0,1,19.37,6.851Zm-5.745-3.7a1.985,1.985,0,0,1-3.25,0A8.783,8.783,0,0,1,13.625,3.155Zm-9,3.7A2,2,0,0,1,3.235,9.986,8.73,8.73,0,0,1,4.63,6.851ZM5.964,5.344a9.008,9.008,0,0,1,2.459-1.6,3.965,3.965,0,0,0,7.154,0,9.008,9.008,0,0,1,2.459,1.6A3.987,3.987,0,0,0,21,12a8.934,8.934,0,0,1-1.19,4.454,3.976,3.976,0,0,0-5.729,4.293,8.685,8.685,0,0,1-4.162,0A3.976,3.976,0,0,0,4.19,16.454,8.934,8.934,0,0,1,3,12,3.987,3.987,0,0,0,5.964,5.344ZM12,16a4,4,0,1,0-4-4A4,4,0,0,0,12,16Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,10Z" />
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
    const res = await fetch('https://acrepo.onrender.com/api/matches');
    const data = await res.json();

    return {
      props: { data: data },
      revalidate: 3600,
    };
  } catch (error) {
    return { error: error.message };
  }
}
