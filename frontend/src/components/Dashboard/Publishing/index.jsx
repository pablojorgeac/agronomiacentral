import React from 'react';

export const Publishing = ({ ad, number, name, tel, img, handleEdit, handleDelete }) => {
  return (
    <article className="w-[48%] lg:w-[32%] h-fit 2xl:w-[20%] bg-white dark:bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg">
      <img src={img} alt="" />
      <div className="px-2">
        <p className="text-sm text-neutral-500">Publicidad {number}</p>
        <h3 className="text-lg font-bold">{name}</h3>
        <p>
          <span className="text-lg font-bold">Tel.</span> {tel}
        </p>
      </div>
      <div className="p-2 flex flex-col xl:flex-row gap-2">
        <button onClick={() => handleEdit(ad)} className="text-white bg-[#1b418a] w-full py-1 rounded-lg">
          Editar
        </button>
        <button onClick={() => handleDelete(ad)} className="text-white bg-[#bd3333] w-full py-1 rounded-lg disabled:bg-[#353333] disabled:text-[#353333]" disabled={number <= 3}>
          Eliminar
        </button>
      </div>
    </article>
  );
};
