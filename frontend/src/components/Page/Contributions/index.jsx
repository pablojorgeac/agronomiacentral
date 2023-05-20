import React from 'react';
import {
  initMercadoPago,
  Wallet,
} from '../../../../node_modules/@mercadopago/sdk-react';
import { useContributions } from '@/hooks';
import { WarningAlert, LoadingSmall } from '..';

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_KEY);

export function Contributions({ visibleContributions }) {
  const {
    handleInput,
    handleClick,
    preferenceId,
    contribution,
    disableButton,
    errors,
    stylesButton,
    click,
  } = useContributions();

  return (
    <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="bg-white dark:bg-[#171717] rounded container mx-auto lg:max-w-[500px] w-full md:max-w-[450px] max-w-[343px]  pb-10 relative">
        <button
          onClick={visibleContributions}
          className="absolute right-2 top-2 z-10 px-3 py-3 bg-gray-900/70 hover:bg-gray-900 rounded-full"
          type="button"
        >
          <svg
            className="cursor-pointer"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59093 6.99999L13.0441 2.54687C13.2554 2.3359 13.3743 2.04961 13.3745 1.75099C13.3748 1.45237 13.2564 1.16587 13.0455 0.954529C12.8345 0.743185 12.5482 0.624305 12.2496 0.624041C11.951 0.623778 11.6645 0.742152 11.4531 0.953123L6.99999 5.40625L2.54687 0.953123C2.33553 0.741779 2.04888 0.623047 1.75 0.623047C1.45111 0.623047 1.16447 0.741779 0.953123 0.953123C0.741779 1.16447 0.623047 1.45111 0.623047 1.75C0.623047 2.04888 0.741779 2.33553 0.953123 2.54687L5.40625 6.99999L0.953123 11.4531C0.741779 11.6645 0.623047 11.9511 0.623047 12.25C0.623047 12.5489 0.741779 12.8355 0.953123 13.0469C1.16447 13.2582 1.45111 13.3769 1.75 13.3769C2.04888 13.3769 2.33553 13.2582 2.54687 13.0469L6.99999 8.59374L11.4531 13.0469C11.6645 13.2582 11.9511 13.3769 12.25 13.3769C12.5489 13.3769 12.8355 13.2582 13.0469 13.0469C13.2582 12.8355 13.3769 12.5489 13.3769 12.25C13.3769 11.9511 13.2582 11.6645 13.0469 11.4531L8.59093 6.99999Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex justify-center items-center">
          <img
            className="lg:block md:hidden hidden rounded-t-lg"
            src="/contributions-img/donation1.jpg"
            alt="club kids"
          />
          <img
            className="md:block lg:hidden hidden rounded-t-lg"
            src="/contributions-img/donation2.jpg"
            alt="club kids"
          />
          <img
            className="lg:hidden md:hidden block rounded-t-lg"
            src="/contributions-img/donation3.jpg"
            alt="club kids"
          />
        </div>
        <div className="mt-8">
          <p className="lg:text-4xl text-center font-semibold lg:leading-9 dark:text-slate-200 text-gray-800 lg:mb-4 md:mb-2 md:text-3xl text-2xl mb-2">
            Ingresa tu monto aqui!
          </p>
          <p className="lg:text-base md:text-base text-sm leading-normal text-center dark:text-slate-100 text-gray-600 ">
            "Más que un club, una familia".
          </p>
        </div>
        <div className="flex justify-center items-center mt-8 lg:px-0 md:px-12 px-4">
          <input
            name="price"
            type="number"
            min={1}
            max={100000}
            value={contribution.price}
            onChange={handleInput}
            className=" text-gray-700 dark:text-slate-300 text-lg dark:bg-gray-900 tracking-widest lg:text-left md:text-left text-left leading-none py-4 lg:pl-[150px] md:pl-[260px] pl-4 lg:max-w-[400px] lg:w-full md:w-full w-full bg-white border border-gray-300 outline-0"
            placeholder="AR$ 5.000"
          />
        </div>

        <div className="flex justify-center items-center mt-2">
          {errors.price && (
            <WarningAlert title="Alerta" description={errors.price} />
          )}
        </div>

        <div className="flex justify-center items-center mt-2 w-full lg:px-0 md:px-12 px-4">
          <button
            className={stylesButton()}
            onClick={handleClick}
            disabled={disableButton()}
          >
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="-0.24 -0.24 24.48 24.48"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M4 21h9.62a3.995 3.995 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.043 3.043 0 0 0-2.823.503l-3.185 2.547-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2zm0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a.996.996 0 0 0 .442-.11l.003-.001.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001.01 0 .002-.001.002-.001h.001l.002-.001.003-.001.002-.001.002-.001.003-.001.002-.001c.003 0 .001-.001.002-.001l.003-.002.002-.001.002-.001.003-.001.002-.001h.001l.002-.001h.001l.002-.001.002-.001c.009-.001.003-.001.003-.001l.002-.001a.915.915 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186-4.133 4.823a2.029 2.029 0 0 1-1.52.688H4v-6zM16 2h-.017c-.163.002-1.006.039-1.983.705-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.978 2.978 0 0 0 16.002 2H16zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.977.977 0 0 1 11.979 4c.025.001.502.032 1.067.485.081.065.163.139.247.222l.707.707.707-.707c.084-.083.166-.157.247-.222.529-.425.976-.478 1.052-.484a.987.987 0 0 1 .701.292c.189.189.293.44.293.707z"></path>
              </g>
            </svg>
            Donar
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 w-full lg:px-0 md:px-12 px-4">
          {preferenceId ? (
            <Wallet initialization={{ preferenceId: preferenceId }} />
          ) : click === true ? (
            <LoadingSmall />
          ) : null}
        </div>
      </div>
    </div>
  );
}
