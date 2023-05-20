import { useEffect, useState } from 'react';
import { Administrative } from '..';
import useStore from '../../../store/globalstore';

export const SteeringCommitteePreview = () => {
  const directives = useStore((state) => state.directiva);
  return (
    <>
      <div
        className="w-full col-span-2 min-h-[192px]  flex flex-col justify-start  items-start gap-4 border bg-white border-neutral-300 dark:bg-[#2C2C2C] dark:border-none dark:text-slate-100 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg 
        sm:h-[220px] 
        lg:w-[200px] lg:h-full lg:col-span-1 lg:row-span-2
        xl:w-full xl:h-full xl:col-start-4 xl:row-start-4 xl:row-span-1"
      >
        <p className="text-lg text-center  font-medium">Comisión directiva</p>
        <div className="w-full grid grid-cols-2 gap-2 lg:grid-cols-1 xl:overflow-y-auto">
          {directives?.map((directive, index) => {
            return (
              <Administrative
                name={directive.name}
                position={directive.position}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
