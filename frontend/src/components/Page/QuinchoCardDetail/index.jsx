export function QuinchoCardDetail({ detail, setShowCard, showCard }) {
  const eventstates = {
    1: 'flex-shrink-0 w-2 h-2 border border-gray-500 bg-gray-500 rounded-full',
    2: 'flex-shrink-0 w-2 h-2 border border-yellow-500 bg-yellow-500 rounded-full',
    3: 'flex-shrink-0 w-2 h-2 border border-green-500 bg-green-500 rounded-full',
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border-solid border-red-300">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#171717] dark:border-none outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <p className="text-1xl font=semibold mr-6">
              Información del Evento
            </p>
            <span className="ml-2 font-medium leading-none truncate" />
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setShowCard(false)}
            >
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-red-400 py-0 rounded-full" />
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <span class={`dark:text-black ${eventstates[showCard.state]}`}>
              {showCard.state === 1
                ? 'Solicitada'
                : showCard.state === 2
                ? 'Confirmada'
                : 'Pagada'}
            </span>
            <p>Nombre del evento: {showCard.description}</p>
            <p>Fecha del evento: {showCard.date.slice(0, 10)}</p>
            <p>Hora de Inicio: {showCard.beg_time}</p>
            <p>Hora de Finalización: {showCard.end_time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
