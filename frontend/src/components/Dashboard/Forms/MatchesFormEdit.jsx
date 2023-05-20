import { useMatches, useForm } from '@/hooks';

export default function MatchesFormEdit({ setEditModalMatch, row }) {
  //validations
  const {
    name,
    home_team,
    away_team,
    discipline,
    date,
    time,
    formState,
    onInputChange,
  } = useForm(row);

  const { handlerModify } = useMatches();

  const handleSubmit = async (event) => {
    event.preventDefault();
    handlerModify({ _id: row._id, ...formState });
    setEditModalMatch(false);
  };

  return (
    <div className="flex bg-gray-900/80 backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="rounded-xl border bg-gray-50 w-[400px] dark:bg-[#171717] dark:border-none border-gray-100 p-4 shadow-xl">
        <div className="flex">
          <button
            type="button"
            className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => {
              if (setEditModalMatch) {
                setEditModalMatch(false);
              }
            }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="text-gray-900 text-lg dark:text-slate-100"
          >
            Nombre del encuentro:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border w-full rounded-lg dark:bg-[#1F2123] dark:border-none border-gray-200 p-3 text-sm"
            value={name}
            onChange={onInputChange}
          />

          <label
            htmlFor="home_team"
            className="text-gray-900 text-lg dark:text-slate-100"
          >
            Equipo Local:
          </label>
          <input
            type="text"
            id="home_team"
            name="home_team"
            className="border w-full rounded-lg dark:bg-[#1F2123] dark:border-none border-gray-200 p-3 text-sm"
            value={home_team}
            onChange={onInputChange}
          />

          <label
            htmlFor="away_team"
            className="text-gray-900 text-lg dark:text-slate-100"
          >
            Equipo Visitante:
          </label>
          <input
            type="text"
            id="away_team"
            name="away_team"
            className="border w-full rounded-lg dark:bg-[#1F2123] dark:border-none border-gray-200 p-3 text-sm"
            value={away_team}
            onChange={onInputChange}
          />
          <div>
            <label
              htmlFor="discipline"
              className="block mb-2 font-medium text-lg text-left"
            >
              Disciplina:
            </label>
            <select
              type="text"
              id="discipline"
              name="discipline"
              className="block w-full p-3 rounded-lg dark:bg-[#1F2123] dark:border-none bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500  outline-none
                focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={discipline}
              // onChange={"onInputChange"}
            >
              <option value="Ajedrez" key="Ajedrez">
                Ajedrez
              </option>
              <option value="Fútbol Infantil" key="Fútbol Infantil">
                Fútbol Infantil
              </option>
              <option value="Futsal" key="Futsal">
                Futsal
              </option>
              <option value="Futsal Femenino" key="Futsal Femenino">
                Futsal Femenino
              </option>
              <option value="Taekwondo" key="Taekwondo">
                Taekwondo
              </option>
              <option value="Escuelita de Fútbol" key="Escuelita de Fútbol">
                Escuelita de Fútbol
              </option>
            </select>
          </div>

          <label
            htmlFor="date"
            className="block mb-2 font-medium  text-lg text-left"
          >
            Fecha del evento:
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 dark:bg-[#1F2123] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={onInputChange}
          />

          <label
            htmlFor="time"
            className="block mb-2 font-medium text-lg text-left"
          >
            Hora del evento:
          </label>

          <input
            className="appearance-none block w-full bg-gray-200 dark:bg-[#1F2123] dark:border-none border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="time"
            id="time"
            name="time"
            min="09:00"
            max="18:00"
            required
            value={time}
          ></input>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded w-1/8 self-center mt-2"
            // onClick={() => {
            //     if (setEditModalMatch) {
            //         setEditModalMatch(false);
            //   }
            // }}
          >
            Editar
          </button>
        </form>
      </div>
    </div>
  );
}
