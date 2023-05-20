export function TestimonialItem({ title, text, img, id }) {
  return (
    <div className="max-w-sm shadow-xl bg-gray-100 dark:bg-[#353434b4] dark:border-none border border-gray-300 overflow-hidden group transition-all duration-200">
      <img src={img} alt={title} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-slate-100">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-600 dark:text-slate-300 ">
          {text.slice(0, 280) + '...'}
        </p>
      </div>
    </div>
  );
}
