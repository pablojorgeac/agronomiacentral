import React, { useContext, useEffect, useState } from 'react';
import { QuinchoCalendarDay } from '..';
import { QuinchoCalendarForm } from '../QuinchoCalendarForm';
import AppContext from '../../../../contexts/AppContext';
import { MessageModal } from '@/components/Dashboard';
import useStore from '@/store/globalstore';

export function QuinchoCalendarContainer({ itsAdmin = false }) {
  const getGlobalEvents = useStore((state) => state.setReservas);
  const getGlobalDateEvents = useStore((state) => state.setDates);
  const reservations = useStore((state) => state.reservas);
  const reservationsDates = useStore((state) => state.dates);
  const { showMessageModal } = useContext(AppContext);

  useEffect(() => {
    if (reservations.length === 0 || reservationsDates.length === 0) {
      getGlobalEvents();
      getGlobalDateEvents();
    }
  }, []);

  const months = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre',
  };

  const date = new Date();

  const [month, setMonth] = useState(date.getMonth() + 1);
  const [year, setYear] = useState(date.getFullYear());

  const firstDayofMonth = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  const nextYear = () => {
    setYear(year + 1);
  };

  const prevYear = () => {
    setYear(year - 1);
  };

  const nextMonth = () => {
    if (month === 12) {
      nextYear();
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 1) {
      prevYear();
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  //Declare an initial state of the form modal
  const [showModal, setShowModal] = useState(false);

  //Declare an initial state of the card detail
  const [showCard, setShowCard] = useState(false);

  return (
    <div>
      <>
        <div className="flex items-center mt-4">
          <div classnames="flex ml-6">
            <button>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={prevMonth}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={nextMonth}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <h2 className="ml-2 text-xl font-bold leading-none">
            {months[month]}, {year}
          </h2>
        </div>
        {/* Encabezado del calendario mensual */}
        <div
          key="EncabezadoDias"
          className="grid justify-items-center grid-cols-7 mt-4 border-t-4 border-indigo-500"
        >
          <div key="LUN" className="pl-1 text-sm">
            LUN
          </div>
          <div key="MAR" className="pl-1 text-sm">
            MAR
          </div>
          <div key="MIE" className="pl-1 text-sm">
            MIE
          </div>
          <div key="JUE" className="pl-1 text-sm">
            JUE
          </div>
          <div key="VIE" className="pl-1 text-sm">
            VIE
          </div>
          <div key="SAB" className="pl-1 text-sm">
            SAB
          </div>
          <div key="DOM" className="pl-1 text-sm">
            DOM
          </div>
        </div>
        {/* Contenedor principal */}
        <div
          key="ContenedorPrincipal"
          className="grid flex-grow w-full h-auto grid-cols-7 grid-rows-5 gap-px pt-px mt-1 "
        >
          {Array.from({ length: firstDayofMonth.getDay() - 1 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-full h-full text-sm text-gray-400"
            ></div>
          ))}
          {Array.from({ length: lastDay.getDate() }).map((_, i) => {
            return (
              <div key={i}>
                <div className="flex flex-col items-center justify-center w-full h-full text-sm border border-gray-200 truncate">
                  {i + 1}
                  {reservationsDates.map((dateEv, index) => {
                    return (
                      <QuinchoCalendarDay
                        day={i + 1}
                        key={index}
                        dateCard={dateEv.date}
                        eventArray={reservations.filter(
                          (dateE) => dateE.date === dateEv.date
                        )}
                        showCard={showCard}
                        setShowCard={setShowCard}
                        month={month}
                        year={year}
                        itsAdmin={itsAdmin}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <h3>Indicadores de la reserva</h3>
        <button className="flex items-center flex-shrink-0 h-5 px-1 text-xs">
          <span className="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></span>
          <span className="ml-2 font-medium leading-none truncate">
            Reservas solicitadas
          </span>
        </button>
        <button className="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
          <span className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span className="ml-2 font-medium leading-none truncate">
            Reservas Solicitadas y confirmadas
          </span>
        </button>
        <button className="flex items-center flex-shrink-0 h-5 px-1 text-xs ">
          <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="ml-2 font-medium leading-none truncate">
            Reservas Solicitadas, confirmadas y pagadas
          </span>
        </button>
        {/* MODAL */}
        {!itsAdmin && (
          <button
            className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Solicitar nueva reserva
          </button>
        )}
        {/* Si el estado del modal es true, renderiza el formulario */}
        {showModal ? (
          <QuinchoCalendarForm
            setShowModal={setShowModal}
            itsAdmin={itsAdmin}
            eventsData={reservations}
          />
        ) : null}
        {showMessageModal ? <MessageModal /> : null}
      </>
    </div>
  );
}
