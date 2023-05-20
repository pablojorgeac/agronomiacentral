export const InfoItem = ({ icon, title, number, className = '' }) => {
    return (
        <div className={`min-h-[192px] sm:h-[200px] sm:w-[250px] lg:w-full xl:w-full flex flex-col justify-start  items-start gap-4 border dark:bg-[#2C2C2C] dark:border-none bg-white border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg ${className}`}>
            <div className="w-20 h-20 flex justify-center items-center bg-[#eff2f7]  rounded-full">
                {icon}
            </div>
            <div className="h-[88px]]">
                <p className="text-neutral-800 dark:text-slate-100 text-4xl font-bold">{number}</p>
                <p className="text-neutral-800 dark:text-slate-100 text-sm sm:text-base font-medium line-clamp-2">
                    {title}
                </p>
            </div>
        </div>
    );
};
