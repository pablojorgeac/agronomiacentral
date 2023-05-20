import { PreviewItem } from '..';
import useStore from '@/store/globalstore';
import Link from 'next/link';
import { useDates } from '@/hooks';

export const NextMatches = () => {
  const { nextDates } = useDates();
  const matches = useStore((state) => state.matches);
  const showMaches = nextDates(matches, 5);

  return (
    <div
      className="col-span-2 w-full h-full flex flex-col dark:bg-[#2C2C2C] dark:border-none
            dark:text-slate-100 bg-white border border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 pb-4 rounded-lg relative  
        sm:h-full sm:w-full
        lg:col-span-3
        xl:w-full xl:col-span-2 xl:justify-between
        "
    >
      <p>Próximos partidos</p>
      <div className="w-full grid grid-cols-3 my-1 text-blue-700 dark:text-slate-100 ">
        <p>Evento</p>
        <p>Deporte</p>
        <p>Fecha</p>
      </div>
      <section className="w-full h-auto flex flex-col gap-2 ">
        {showMaches.map((match, index) => (
          <PreviewItem
            columnOne={match.name}
            columnTwo={match.discipline}
            columnThree={match.date}
            key={index}
          />
        ))}
      </section>
      <Link
        href="/dashboard/partidos"
        className="mt-2 py-2 rounded-lg text-center text-white cursor-pointer transition-all duration-500 bg-[#1b418a] hover:bg-[#10306b]"
      >
        Ver todas
      </Link>
    </div>
  );
};
