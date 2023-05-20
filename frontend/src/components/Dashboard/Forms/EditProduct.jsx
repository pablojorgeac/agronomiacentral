import { useFileEncoding } from '@/hooks';
import { useState } from 'react';

export function EditProduct({ ShowModify, showModalModify, handlerModify}) {
  const { handleFileChange } = useFileEncoding();

  const [product, setProduct] = useState(ShowModify);

  const imagenChange = (event) => {
    handleFileChange(event, setPicture);
  };

  const setPicture = (encodedFile) => {
    setProduct({
      ...product,
      picture: encodedFile,
    });
  };



  const handlerChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    handlerModify(product);
    showModalModify()
  };
  
const disableButton = product !== ShowModify ? false : true;

  const stylesButton = () => {
    if (disableButton) {
      return 'font-semibold self-center text-gray-900 py-2 px-4 rounded w-1/8 border-2 border-gray-300 bg-gray-100 dark:bg-gray-800 dark:text-slate-100 dark:border-none transition duration-300 ease-in-out';
    } else {
      return "bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded w-1/8 self-center";
    }
  };

  return (
    <div className="flex bg-gray-900/80  backdrop-blur-sm justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="rounded-xl border dark:bg-[#171717] dark:border-none bg-gray-50 w-[400px] border-gray-100 p-4 shadow-xl">

        <div className='flex'>
          <button type="button" className="relative text-gray-400 bg-transparent   hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={showModalModify}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handlerSubmit}>
          <label className="text-gray-900 text-lg dark:text-slate-100">Titulo:</label>
          <input
            name="title"
            type="text"
            className="border w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#1F2123] dark:text-slate-100 dark:border-none"
            placeholder="Titulo"
            onChange={handlerChange}
            value={product.title}
          />
          <label className="text-gray-900 text-lg dark:text-slate-100">Imagen:</label>
          <input
            name="picture"
            type="file"
            accept="image/*"
            className="block w-full border dark:bg-[#2d2e30] dark:text-slate-100 dark:border-none border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:hover:bg-blue-100 cursor-pointer file:cursor-pointer file:border-0 dark:file:bg-[#1F2123] dark:file:text-slate-100 dark:file:border-none file:bg-gray-100 file:mr-4 file:py-3 file:px-4 hover:bg-blue"
            placeholder="Imagen"
            onChange={imagenChange}
          />
          <label className="text-gray-900 text-lg dark:text-slate-100">Descripcion:</label>
          <input
            name="description"
            type="text"
            className="border w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#1F2123] dark:text-slate-100 dark:border-none"
            placeholder="Descripcion"
            onChange={handlerChange}
            value={product.description}
          />
          <label className="text-gray-900 text-lg dark:text-slate-100">Precio:</label>
          <input
            name="price"
            type="number"
            className="border w-full rounded-lg border-gray-200 dark:bg-[#1F2123] dark:text-slate-100 dark:border-none p-3 text-sm"
            placeholder="Precio"
            onChange={handlerChange}
            value={product.price}
          />
          <button
            type="submit"
            disabled={disableButton}
            className={stylesButton()}
          >
            Modificar
          </button>
        </form>
      </div>
    </div>
  );
}