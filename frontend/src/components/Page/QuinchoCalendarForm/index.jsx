import { useState, useContext } from 'react';
import { validate } from './CalendarFormValidation';
import { useQuincho } from '@/hooks';
import { Warn } from '@/components/Dashboard/Warn/Warn';
import AppContext from '../../../../contexts/AppContext';
import useStore from '@/store/globalstore';

export function QuinchoCalendarForm({
  setShowModal,
  itsAdmin = false,
  setShowCard,
  showCard,
}) {
  const handlerCreate = useStore((state) => state.addDate);
  const handlerUpdate = useStore((state) => state.updateDate);
  const handlerDelete = useStore((state) => state.deleteDate);
  const reservations = useStore((state) => state.reservas);

  const { setLoading } = useQuincho();

  const { setShowMessageModal } = useContext(AppContext);
  const [showWarn, setShowWarn] = useState(false);
  const [data, setData] = useState({
    client: itsAdmin ? showCard.client : '',
    email: itsAdmin ? showCard.email : '',
    phone: itsAdmin ? showCard.phone : '',
    date: itsAdmin ? showCard.date : '',
    beg_time: itsAdmin ? showCard.beg_time : '',
    end_time: itsAdmin ? showCard.end_time : '',
    description: itsAdmin ? showCard.description : '',
    name: itsAdmin ? showCard.name : 'Event Name',
    state: itsAdmin ? showCard.state : 1,
    amount: itsAdmin ? showCard.amount : 0,
    someChange: false,
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const showModalWarn = () => {
    setShowWarn(false);
    setShowCard(false);
  };

  const handleReservationChange = (event) => {
    const { name, value } = event.target;
    setData({ [name]: value, someChange: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'beg_time') {
      if (value === 'schedule1') {
        setData({ ...data, beg_time: '11:00', end_time: '17:00' });
      } else {
        setData({ ...data, beg_time: '19:00', end_time: '02:00' });
      }
    } else {
      setData({ ...data, [name]: value, someChange: true });
    }
    setErrors(validate(data, reservations, itsAdmin));
  };

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    setErrors(validate(data, reservations, itsAdmin));
    setShowError(false);
    if (Object.keys(errors).length === 0 && data.someChange) {
      if (itsAdmin) {
        try {
          handlerUpdate(data, showCard._id);
          setShowMessageModal('Evento modificado con Éxito');
          setShowModal ? setShowModal(false) : setShowCard(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          handlerCreate(data);
          setShowMessageModal('Evento creado con Éxito');
          setShowModal ? setShowModal(false) : setShowCard(false);
        } catch (error) {
          setShowMessageModal(error);
        }
      }
    } else {
      setShowError(true);
    }
  };

  return (
    
      <div className="flex justify-center items-center fixed inset-0">
        <div>
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#171717] ">
            <div className="flex items-start justify-between px-4 py-2  rounded-t ">
              <h6 className="text-2xl ">Ingresa tus datos</h6>
              <button
                className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  console.log('showModal', setShowModal);
                  if (setShowModal) {
                    setShowModal(false);
                  } else {
                    setShowCard(false);
                  }
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form className="w-full px-4" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-0.5">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="client"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="client"
                    name="client"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={data.client}
                  />
                  {showError && errors.client && (
                    <p className="text-red-400 text-xs">{errors.client}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-0.5">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="email"
                  >
                    email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none  border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="email"
                    name="email"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={data.email}
                  />
                  {showError && errors.email && (
                    <p className="text-red-400 text-xs">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-0.5">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="phone"
                  >
                    Teléfono
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={data.phone}
                  />
                  {showError && errors.phone && (
                    <p className="text-red-400 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-0.5">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="date"
                  >
                    Fecha del evento
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    name="date"
                    type="date"
                    onChange={handleChange}
                    value={data.date}
                  />
                  {showError && errors.date && (
                    <p className="text-red-400 text-xs">{errors.date}</p>
                  )}
                </div>
              </div>

              <div className="flex  -mx-3 mb-0.5">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="grid-password"
                  >
                    Horario de Reserva
                  </label>
                  <div
                    className="relative"
                    
                  >
                    <select
                      id="beg_time"
                      name="beg_time"
                      className="block w-full bg-gray-200 border border-gray-200 dark:bg-[#2C2C2C] dark:border-none py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      
                      defaultValue={
                        itsAdmin
                          ? showCard.beg_time === '11:00'
                            ? 'schedule1'
                            : 'schedule2'
                          : 'default'
                      }
                      onChange={handleChange}
                    >
                      <option value="default" disabled>
                        Seleccione Horario de Reserva
                      </option>
                      <option value="schedule1">11Hs a 17Hs</option>
                      <option value="schedule2">19Hs a 02Hs</option>
                    </select>
                    {showError && errors.beg_time && (
                      <p className="text-red-400 text-xs">{errors.beg_time}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-2">
                  <label
                    className="block uppercase tracking-wide  text-xs font-bold "
                    htmlFor="description"
                  >
                    Descripción del evento
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="off"
                    placeholder=""
                    onChange={handleChange}
                    value={data.description}
                  />
                  {showError && errors.description && (
                    <p className="text-red-400 text-xs">{errors.description}</p>
                  )}
                </div>
                {itsAdmin && (
                  <div className="w-full px-3 mb-2">
                    <label
                      className="block uppercase tracking-wide  text-xs font-bold"
                      htmlFor="grid-state"
                    >
                      Estado de la reserva
                    </label>

                    <select
                      type="text"
                      className=" block w-full bg-gray-200 border border-gray-200 dark:bg-[#2C2C2C] dark:border-none py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
                      id="grid-state"
                      name="state"
                      onChange={handleReservationChange}
                      defaultValue={itsAdmin ? data.state : 0}
                    >
                      <option disabled value={0}>
                        Status de la Reserva
                      </option>
                      <option value={1}>Reserva Solicitada</option>
                      <option value={2}>Reserva Confirmada</option>
                      <option value={3}>Reserva Pagada</option>
                    </select>

                    <label
                      className="block uppercase tracking-wide  text-xs font-bold "
                      htmlFor="amount"
                    >
                      COSTO DE LA RESERVA
                    </label>
                    <input
                      className=" block w-full bg-gray-200 dark:bg-[#2C2C2C] dark:border-none border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white"
                      id="amount"
                      name="amount"
                      type="number"
                      autoComplete="off"
                      placeholder=""
                      onChange={handleChange}
                      value={data.amount}
                    />
                    {showError && errors.amount && (
                      <p className="text-red-400 text-xs">{errors.amount}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center p-4  rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={() => {
                    if (setShowModal) {
                      setShowModal(false);
                    } else {
                      setShowCard(false);
                    }
                  }}
                >
                  Cancelar
                </button>
                <button
                  className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="submit"
                >
                  {!itsAdmin ? 'Solicitar Reserva' : 'Guardar Cambios'}
                </button>
                {itsAdmin && (
                  <button
                    type="button"
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    onClick={() => {
                      setShowWarn(showCard._id);
                    }}
                  >
                    Eliminar Reserva
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        {showWarn && (
          <Warn
            handlerDelete={handlerDelete}
            showModalWarn={showModalWarn}
            showWarn={showWarn}
            setLoading={setLoading}
          />
        )}
      </div>
    
  );
}
