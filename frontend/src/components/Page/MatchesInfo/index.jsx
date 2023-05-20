export function MatchesInfo(props) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 mt-3">
      <div>
        <div className="mt-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
            <div className="p-2 sm:p-10 text-center">
              <div
                style={{ height: '350px' }}
                className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white dark:bg-[#2C2C2C]"
              >
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="px-10 max-w-2xl">
                      {props.iconOne}
                    </div>
                    <div className="space-y-10">
                      <div className="font-bold text-xl mb-2 ">
                        {props.data[0].home_team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center">
              <div style={{ height: '350px' }} className={props.classname}>
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">
                        Próximo Encuentro
                      </div>

                      <p id="data" className="text-base">
                        {props.data[0].date}
                      </p>
                      <div className="font-bold text-xl mb-2">
                        {props.data[0].time}
                      </div>

                      <p id="stadium" className="text-base">
                        {props.data[0].discipline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 sm:p-10 text-center">
              <div
                style={{ height: '350px' }}
                className="flex justify-center items-center max-w-sm rounded overflow-hidden shadow-lg hover:bg-white bg-white dark:bg-[#2C2C2C] "
              >
                <div className="space-y-10">
                  <div className="px-6 py-4">
                    <div className="px-10 max-w-2xl">
                      {props.iconTwo}
                    </div>
                    <div className="space-y-5">
                      <div className="font-bold text-xl mb-2">
                        {props.data[0].away_team}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
