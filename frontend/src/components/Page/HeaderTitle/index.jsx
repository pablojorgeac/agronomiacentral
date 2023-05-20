export function HeaderTitle({ image, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-center bg-cover mx-auto max-w-[100%]"
    >
      <div className="w-full h-full bg-gradient-to-r from-blue-950 to-cyan-500/50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left ">
            <h1 className="italic text-slate-100 text-4xl font-bold sm:text-6xl">
              {title}
            </h1>
            <div className="sm:border-4 sm:border-blue-600 sm:mb-8  sm:w-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
