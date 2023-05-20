import {
  InfoItem,
  Layout,
  BarChart,
  LineChart,
  PieChart,
  NextReservations,
  NextMatches,
  SteeringCommitteePreview,
} from '@/components/Dashboard';
import useStore from '@/store/globalstore';
import { useEffect } from 'react';

export default function Dashboard() {
  const directiva = useStore((state) => state.directiva);
  const setDirectiva = useStore((state) => state.setDirectiva);
  const setAtletas = useStore((state) => state.setAtletas);
  const setReservas = useStore((state) => state.setReservas);
  const atletas = useStore((state) => state.atletas);
  const reservas = useStore((state) => state.reservas);
  const matches = useStore((state) => state.matches);
  const setMatches = useStore((state) => state.setMatches);
  const Ajedrez = atletas.filter((atleta) => atleta.discipline === 'Ajedrez');
  const futbolInfantil = atletas.filter(
    (atleta) => atleta.discipline === 'Fútbol Infantil'
  );
  const futsal = atletas.filter((atleta) => atleta.discipline === 'Futsal');
  const futsalFemenino = atletas.filter(
    (atleta) => atleta.discipline === 'Futsal Femenino'
  );
  const taekwondo = atletas.filter(
    (atleta) => atleta.discipline === 'Taekwondo'
  );
  const centroEntrenamiento = atletas.filter(
    (atleta) => atleta.discipline === 'Centro de Entrenamiento'
  );
  const entrenamientoArqueros = atletas.filter(
    (atleta) => atleta.discipline === 'Entrenamiento de Arqueros'
  );
  const escuelitaFutbol = atletas.filter(
    (atleta) => atleta.discipline === 'Escuelita de Fútbol'
  );

  useEffect(() => {
    if (atletas.length === 0) setAtletas();
    if (reservas.length === 0) setReservas();
    if (directiva.length === 0) setDirectiva();
    if (matches.length === 0) setMatches();
  }, []);

  return (
    <Layout>
      <div
        className="w-full grid grid-cols-2 gap-2 justify-self-center items-center xl:w-11/12 sm:w-5/6 p-5 pb-16
      sm:justify-items-center
      lg:grid-cols-3
      xl:grid-cols-4
      "
      >
        <InfoItem
          icon={
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
          title={'Jugadores de Escuelita de Fútbol'}
          number={escuelitaFutbol.length}
        />
        <InfoItem
          icon={
            <svg
              fill="#1b418a"
              width="64px"
              height="64px"
              viewBox="0 0 15 15"
              id="fitness-centre"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
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
                  id="daec40ff-71f5-4432-9d75-dcba7b9c1b89"
                  d="M14.5,7V8h-1v2h-1v1H11V8H4v3H2.5V10h-1V8H.5V7h1V5h1V4H4V7h7V4h1.5V5h1V7Z"
                ></path>{' '}
              </g>
            </svg>
          }
          title={'Participantes del Centro de Entrenamientos'}
          number={centroEntrenamiento.length}
        />
        <InfoItem
          icon={
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
          title={'Jugadores de Futsal'}
          number={futsal.length}
        />
        <InfoItem
          icon={
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
          title={'Jugadoras de Futsal Femenino'}
          number={futsalFemenino.length}
        />
        <InfoItem
          icon={
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
                    d="M412.919,275.764l1.261,1.897l-11.238,34.402l-63.576,20.792l-37.112-27.064v-29.754 c-3.14,2.602-6.784,4.596-10.78,5.733v24.021l-37.102,27.064l-63.558-20.783l-11.274-34.412c1.438-2.285,2.902-4.561,4.473-6.748 l0.017-0.026l0.133-0.168c-3.141-3.017-5.638-6.713-7.208-10.858c-3.696,9.738-12.42,17.007-22.838,18.762 c-11.212,21.824-17.563,46.585-17.608,72.803v0.017v0.212c0,35.788,11.741,68.912,31.625,95.544 c19.407,26.146,46.603,46.189,78.236,56.651c15.905,5.328,32.904,8.15,50.485,8.15c17.624,0,34.632-2.823,50.572-8.212 c31.572-10.419,58.812-30.46,78.219-56.616l-0.009,0.017c19.822-26.631,31.563-59.756,31.554-95.535v-0.212v-0.017 c-0.053-31.73-9.36-61.317-25.388-86.167C427.13,270.913,420.444,274.759,412.919,275.764z M190.585,440.75 c-1.764-2.1-3.511-4.217-5.152-6.422l-0.018-0.026c-17.202-23.06-27.337-51.596-27.346-82.647v-0.194 c0.009-2.717,0.176-5.39,0.335-8.072l29.076-21.065l63.602,20.791l14.21,43.464l-39.308,54.172H190.585z M348.24,480.491 c-2.505,0.996-5.019,1.994-7.604,2.84l-0.08,0.026c-13.7,4.631-28.36,7.084-43.7,7.084c-15.28,0-29.966-2.452-43.684-7.04 l-0.08-0.026c-2.575-0.856-5.081-1.853-7.586-2.849l-10.832-33.398l39.343-54.224h45.607l39.167,54.974L348.24,480.491z M435.634,351.461v0.194c0,31.059-10.135,59.597-27.294,82.656l-0.008,0.017c-1.641,2.205-3.388,4.313-5.152,6.422h-36.23 l-38.531-54.075l14.238-43.56l63.602-20.8l29.049,21.065C435.466,346.062,435.634,348.734,435.634,351.461z"
                  />
                  <path
                    className="st0"
                    d="M373.514,119.609l-1.508,2.258l-19.222,19.213c-3.644,3.652-9.545,3.652-13.197,0 c-3.652-3.643-3.652-9.544,0-13.196l13.735-13.735c-6.986-2.188-14.176-4.711-21.445-7.508l-0.264,0.398l-21.965,21.956 c-3.644,3.644-9.554,3.644-13.198,0c-3.652-3.652-3.652-9.553,0-13.214l16.761-16.761c-7.454-3.211-14.838-6.572-22-10.003 c-0.459,1.067-1.094,2.081-1.958,2.955l-21.966,21.957c-3.634,3.643-9.553,3.643-13.205,0c-3.634-3.652-3.634-9.554,0-13.198 l20.13-20.13c-19.416-9.942-35.858-19.477-45.218-25.723c-14.935-9.96-22.062-10.269-27.912-7.463V0h-18.066v60.894 c-12.28,10.974-32.577,28.793-60.982,28.793c-31.977,0-42.95-10.974-55.124-24.876c-3.467-3.961-6.978-6.74-10.356-8.478V0H38.487 v60.488c-2.214,3.688-3.554,8.945-3.554,15.825c0,14.334,0,114.457,0,134.306c0,18.031,7.348,30.566,33.468,32.718l0.874,10.63 c0.326,4.093,3.75,7.251,7.86,7.251h13.109c4.102,0,7.534-3.158,7.86-7.251l0.944-11.503c9.042-0.935,18.19-2.286,28.343-3.652 l0.926,11.291c0.327,4.093,3.759,7.251,7.861,7.251h13.108c4.102,0,7.534-3.158,7.861-7.251l1.2-14.732 c9.518-0.776,20.015-1.385,32.056-1.623c1.703-0.035,3.378-0.009,5.02,0.027l1.341,16.328c0.326,4.093,3.758,7.251,7.86,7.251 h13.109c4.111,0,7.534-3.158,7.86-7.251l1.006-12.253c10.056,1.958,21.136,4.226,35.082,5.91l0.829,10.207 c0.335,4.093,3.767,7.251,7.869,7.251h13.1c4.111,0,7.534-3.158,7.869-7.251l0.644-7.957c10.648,0.336,22.662,0.282,36.406-0.344 l0.68,8.301c0.335,4.093,3.758,7.251,7.868,7.251h13.099c4.102,0,7.534-3.158,7.868-7.251l0.856-10.542 c10.364-1.05,19.954-2.399,28.704-4.067l0.644,7.842c0.335,4.093,3.767,7.251,7.86,7.251h13.108c4.111,0,7.534-3.158,7.869-7.251 l1.288-15.843c44.142-15.243,58.829-40.199,58.829-63.744C477.067,135.928,424.457,131.552,373.514,119.609z M89.572,122.722 c-10.312,0-39.97,0-39.97,0s0-38.664,0-43.181c0-4.516,4.517-7.745,10.321-2.584c2.584,2.302,23.835,21.922,32.224,25.785 C100.528,106.615,99.884,122.722,89.572,122.722z M153.474,203.94l-48.438-65.745h27.073l48.438,65.745H153.474z M208.546,203.94 l-48.438-65.745h27.073l48.438,65.745H208.546z M266.555,203.94l-48.438-65.745h27.081l48.429,65.745H266.555z"
                  />
                </g>
              </g>
            </svg>
          }
          title={'Jugadores de Fútbol Infantil'}
          number={futbolInfantil.length}
        />
        <InfoItem
          icon={
            <svg
              fill="#1b418a"
              viewBox="0 0 24 24"
              id="taekwondo-2"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  id="primary"
                  d="M20.91,12.55,19.54,9.8a2,2,0,0,0-1.47-1.08,2,2,0,0,0-1.74.56l-1.88,1.88L11,7.68l3.95-4a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9,6.86A3,3,0,1,0,5.93,10a1,1,0,0,0-.16.25l-1,3.26a2,2,0,0,0,0,1.09L5.05,16a1,1,0,0,0,1,.76,1,1,0,0,0,1-1.24l-.35-1.45.56-1.74L10,15.18V21a1,1,0,0,0,2,0V15.18a2,2,0,0,0-.58-1.41L8.18,10.52,9.59,9.11,13,12.57a1.86,1.86,0,0,0,1.42.59,2,2,0,0,0,1.42-.58l1.88-1.89,1.37,2.76a1,1,0,0,0,1.35.44A1,1,0,0,0,20.91,12.55Z"
                  style={{ fill: '#1b418a' }}
                />
              </g>
            </svg>
          }
          title={'Taekwondokas'}
          number={taekwondo.length}
        />
        <InfoItem
          icon={
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
          title={'Jugadores de Ajedrez'}
          number={Ajedrez.length}
        />
        <InfoItem
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g id="Calendar / Calendar_Days">
                  <path
                    id="Vector"
                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
                    stroke="#1b418a"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          }
          title={'Jugadores en total'}
          number={atletas.length}
        />
        <InfoItem
          icon={
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 512 512"
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
                <path
                  fill="#1b418a"
                  d="M18 78v414h36V114h404v378h36V78H18zm101 53v48H71.75v18H119v46H71.75v18H119v46H71.75v18H119v46H71.75v18H119v46H71.75v18H209.6c-.4-6-.9-12-1.3-18H201v-23.4h-.8l-17.2.3V435h-46v-46h42c.4-6 .8-12 1.4-18H137v-46h46v22c.2-1.9.4-3.9.6-5.6 1.8-17.1 6.6-35.5 17.4-49.1V261h8.5c-.9-6-1.2-12-.3-18H201v-46h43.4c3.6-1.2 7.5-1.9 11.4-2 4.5-.1 8.9.6 13.2 2h42v46h-8.7c.7 6 .6 12.1-.2 18h8.9v28.6c2.6 2.9 4.8 6 6.6 9.4 5.9 11.7 9.3 23.9 11.4 36.5V325h46v46h-43.1c.2 6 .2 12 .3 18H375v46h-46v-23.4h-18V435h-6l-1.2 18H441v-18h-48v-46h48v-18h-48v-46h48v-18h-48v-46h48v-18h-48v-46h48v-18h-48v-48h-18v48h-46v-48h-18v48h-46v-48h-18v48h-46v-48h-18v48h-46v-48h-18zm18 66h46v46h-46v-46zm192 0h46v46h-46v-46zm-72.1 15.3c-16.7-.4-30.9 17.8-30.9 39.1 0 11.8 4.1 22.2 10 29.4l7.2 8.5-11 2.1c-7.8 1.5-13.4 5.6-18.3 12.2-4.9 6.7-8.6 16-11.2 26.7-4.7 19.4-5.8 43.2-5.9 64.1h25.8l7.1 94.9c17.9 4.1 37.1 3.9 54.5 0l6.2-94.9H315c0-21.2-.3-45.2-4.6-64.8-2.3-10.8-5.9-20.1-10.8-26.7-5-6.6-10.9-10.6-19.6-12l-11.2-1.7 7-8.9c5.8-7.1 9.6-17.4 9.6-28.9 0-22.8-12.4-38.9-28.5-39.1zM137 261h46v46h-46v-46zm192 0h46v46h-46v-46z"
                ></path>
              </g>
            </svg>
          }
          title={'Entrenamiento de Arqueros'}
          number={entrenamientoArqueros.length}
        />
        <NextReservations />
        <BarChart />

        <LineChart />
        <InfoItem
          className="
            xl:row-start-3 xl:col-start-2
          "
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g id="Calendar / Calendar_Days">
                  <path
                    id="Vector"
                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
                    stroke="#1b418a"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          }
          title={'Reservas en total'}
          number={reservas.length}
        />
        <InfoItem
          className="
          xl:col-start-4 xl:row-start-5
          "
          icon={
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#1b418a"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g id="Calendar / Calendar_Days">
                  <path
                    id="Vector"
                    d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"
                    stroke="#1b418a"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </svg>
          }
          title={'Partidos en total'}
          number={20}
        />
        <PieChart />
        <SteeringCommitteePreview />
        <NextMatches />
      </div>
    </Layout>
  );
}
