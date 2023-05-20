export const InputForm = ({
  title,
  icon,
  placeHolder,
  type,
  name,
  onChange,
  id,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-neutral-800 dark:text-slate-100 text-left"
      >
        {title}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          className="block w-full pl-10 p-2.5 rounded-lg dark:text-slate-300 dark:bg-[#1F2123] bg-[#eff2f7] border border-neutral-400 placeholder-neutral-500 text-neutral-800 outline-none
          focus:outline-none focus:border-[#3264c0] focus:ring-1 focus:ring-[#3264c0] transition-all duration-200"
          placeholder={placeHolder}
          name={name}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
