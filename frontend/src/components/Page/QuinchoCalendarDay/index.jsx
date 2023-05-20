import { QuinchoCalendarForm } from '../QuinchoCalendarForm';
import { QuinchoCardDetail } from '../QuinchoCardDetail';

export function QuinchoCalendarDay(props) {
  const eventstates = {
    1: 'flex-shrink-0 w-2 h-2 border border-gray-500 bg-gray-500 rounded-full',
    2: 'flex-shrink-0 w-2 h-2 border border-yellow-500 bg-yellow-500 rounded-full',
    3: 'flex-shrink-0 w-2 h-2 border border-green-500 bg-green-500 rounded-full',
  };
  return (
    <div>
      <div className="relative flex flex-col ">
        <div className="relative flex flex-col ">
          {parseInt(props.dateCard.slice(5, 7)) === props.month &&
          parseInt(props.dateCard.slice(0, 4)) === props.year &&
          parseInt(props.dateCard.slice(8, 10)) === props.day ? (
            <>
              {props.eventArray.length > 0
                ? props.eventArray.map((detail, index) => {
                    return (
                      <div key={index}>
                        <div className="flex flex-col px-1 py-1 overflow-auto">
                          <button
                            className="flex items-center flex-shrink-0 h-5 px-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700"
                            onClick={() => props.setShowCard(detail)}
                          >
                            <span className={eventstates[detail.state]}></span>
                            <span className=" hidden md:flex ml-2 font-light leading-none">
                              {detail.beg_time}
                            </span>
                            <span className=" hidden md:flex ml-2 font-medium leading-none truncate">
                              {detail.description.slice(0, 15)}
                            </span>
                          </button>
                        </div>
                        {props.showCard && !props.itsAdmin ? (
                          <QuinchoCardDetail
                            setShowCard={props.setShowCard}
                            showCard={props.showCard}
                          />
                        ) : props.showCard && props.itsAdmin ? (
                          <QuinchoCalendarForm
                            setShowCard={props.setShowCard}
                            itsAdmin={props.itsAdmin}
                            eventArray={props.eventArray}
                            showCard={props.showCard}
                          />
                        ) : null}
                      </div>
                    );
                  })
                : null}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
