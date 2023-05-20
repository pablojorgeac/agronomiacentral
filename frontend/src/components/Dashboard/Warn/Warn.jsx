export function Warn({ handlerDelete, showModalWarn, showWarn, setLoading }) {
  return (
    <div className="flex flex-col bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="rounded-xl border bg-gray-50 border-gray-100 p-4 shadow-xl">
        <div className="flex items-center gap-2 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-red-600 mb-6"
          >
            <path
              fillRule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-900">
            ¿Estás seguro que deseas eliminar este Elemento?
            <br />
            Esta acción es irreversible.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-[#1b418a] m-4 hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handlerDelete(showWarn);
              showModalWarn();
              setLoading(true);
            }}
          >
            Sí
          </button>
          <button
            className="bg-[#1b418a] m-4 hover:hover:bg-[#10306b] text-white font-bold py-2 px-4 rounded"
            onClick={() => showModalWarn()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
