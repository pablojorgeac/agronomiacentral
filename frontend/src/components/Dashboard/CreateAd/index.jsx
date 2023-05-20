import { useState } from 'react';
import { useAds, useFileEncoding, useForm } from '@/hooks';

const initialForm = {
  name: '',
  contact: '',
};

export const CreateAd = ({ setCreateModal, getAds }) => {
  const [picture, setPicture] = useState(null);
  const { name, contact, formState, onInputChange } = useForm(initialForm);
  const { handleFileChange } = useFileEncoding();
  const { handlerCreate } = useAds();

  const onSubmit = async (e) => {
    e.preventDefault();
    await handlerCreate({ ...formState, picture });
    await getAds();
    setCreateModal(false);
  };
  return (
    <div className="min-w-min flex flex-col justify-start  items-start gap-4 border bg-white dark:bg-[#171717] dark:border-none border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg ">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="text-3xl font-medium ">Añadir anuncio</p>
        <div className="flex">
          <button
            type="button"
            className="relative text-gray-400 bg-transparent  hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => setCreateModal(false)}
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
      <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
        <section className="xl:grid xl:grid-cols-1 gap-4">
          {/* ========= name ========= */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium text-lg text-left"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onInputChange}
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] dark:bg-[#1F2123] dark:border-none border border-neutral-400  outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            />
          </div>
          {/* ========= contact ========= */}
          <div>
            <label
              htmlFor="contact"
              className="block mb-2 font-medium text-lg text-left"
            >
              Numero de telefono:
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={contact}
              onChange={onInputChange}
              className="block w-full p-2.5 rounded-lg bg-[#eff2f7] dark:bg-[#1F2123] dark:border-none border border-neutral-400  outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
            />
          </div>
          {/* ========= image ========= */}
          <div>
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-lg text-left"
            >
              Imagen del anuncio:
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setPicture)}
              className="block w-full border dark:bg-[#2d2e30]  dark:border-none border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:hover:bg-blue-100 cursor-pointer file:cursor-pointer file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 hover:bg-blue dark:file:bg-[#1F2123] dark:file:text-slate-100 dark:file:border-none"
            />
          </div>
          <div className="w-[330px] flex justify-center">
            <img src={picture} alt="" />
          </div>
        </section>
        <div className="w-full flex items-end">
          <button className="w-full h-[46px] bg-[#1b418a] p-2.5 rounded-lg text-white text-md">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
