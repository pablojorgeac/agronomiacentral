import { useAthletes, useForm } from '@/hooks';

export const EditAthlete = ({ setEditModal, row }) => {
  const {
    name,
    discipline,
    email,
    contact,
    date_of_birth,
    emergency_phone,
    emergency_name,
    emergency_email,
    formState,
    onInputChange,
  } = useForm(row);
  const { handlerModify } = useAthletes();
  const handleSubmit = (e) => {
    e.preventDefault();
    handlerModify({ id: row.id, ...formState });
    setEditModal(false);
  };
  return (
    <div className="min-w-min flex flex-col justify-start overflow-y-scroll items-start gap-4 border bg-white dark:border-none dark:shadow-none dark:bg-[#171717]  border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg ">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-3xl font-medium ">Editar Atleta</p>
        <div className="flex">
          <button
            type="button"
            className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => setEditModal(false)}
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
          </button>
        </div>
      </div>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <section className="xl:grid xl:grid-cols-3 gap-4">
          {/* ========= name ========= */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium  text-lg text-left"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] dark:bg-[#1F2123] dark:border-none border border-neutral-400 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={name}
              onChange={onInputChange}
            />
          </div>
          {/* ========= discipline ========= */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium  text-lg text-left"
            >
              Disciplina:
            </label>
            <select
              type="text"
              id="discipline"
              name="discipline"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] dark:bg-[#1F2123] dark:border-none border border-neutral-400  outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={discipline}
              onChange={onInputChange}
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
              <option
                value="Centro de Entrenamiento"
                key="Centro de Entrenamiento"
              >
                Centro de Entrenamiento
              </option>
              <option
                value="Entrenamiento de Arqueros"
                key="Entrenamiento de Arqueros"
              >
                Entrenamiento de Arqueros
              </option>
              <option value="Escuelita de Fútbol" key="Escuelita de Fútbol">
                Escuelita de Fútbol
              </option>
            </select>
          </div>
          {/* ========= email ========= */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium  text-lg text-left"
            >
              Correo electronico:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={email}
              onChange={onInputChange}
            />
          </div>
          {/* ========= contact ========= */}
          <div>
            <label
              htmlFor="contact"
              className="block mb-2 font-medium  text-lg text-left"
            >
              Numero de contacto:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={contact}
              onChange={onInputChange}
            />
          </div>
          {/* ========= date_of_birth ========= */}
          <div>
            <label
              htmlFor="date_of_birth"
              className="block mb-2 font-medium  text-lg text-left"
            >
              Dia de nacimiento:
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={date_of_birth}
              onChange={onInputChange}
            />
          </div>
        </section>
        <hr />
        {/* ========= Emergency info =========  */}
        <section>
          <p className="text-xl font-medium text-[#3264c0]">
            Datos de emergencia
          </p>
          {/* ========= emergency_name ========= */}
          <div>
            <label
              htmlFor="emergency_name"
              className="block mb-2  text-lg text-left"
            >
              Nombre del contacto de emergencia:
            </label>
            <input
              type="text"
              id="emergency_name"
              name="emergency_name"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={emergency_name}
              onChange={onInputChange}
            />
          </div>
          {/* ========= emergency ========= */}
          <div>
            <label
              htmlFor="emergency"
              className="block mb-2 font-medium text-gray-900 text-lg text-left"
            >
              Numero del contacto de emergencia:
            </label>
            <input
              type="text"
              id="emergency"
              name="emergency_phone"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={emergency_phone}
              onChange={onInputChange}
            />
          </div>
          {/* ========= emergency_email ========= */}
          <div>
            <label
              htmlFor="emergency_email"
              className="block mb-2 font-medium text-gray-900 text-lg text-left"
            >
              Correo del contacto de emergencia:
            </label>
            <input
              type="text"
              id="emergency_email"
              name="emergency_email"
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] border border-neutral-400 dark:bg-[#1F2123] dark:border-none outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
              value={emergency_email}
              onChange={onInputChange}
            />
          </div>
        </section>
        <div className="w-full flex items-end">
          <button className="w-full h-[46px] bg-[#1b418a]  p-2.5 rounded-lg text-white text-md">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
