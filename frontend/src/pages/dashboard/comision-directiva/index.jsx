import { Layout } from '@/components/Dashboard';
import image from '../../../../public/directives-img/directive.svg';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import FormDirective from '@/components/Dashboard/Forms/DirectiveForm';
import useStore from '../../../store/globalstore';
import AppContext from '../../../../contexts/AppContext';
import { MessageModal } from '@/components/Dashboard';

export default function SteeringCommittee() {
  const [edit, setEdit] = useState(false);
  const directives = useStore((state) => state?.directiva);
  const setDirectives = useStore((state) => state.setDirectiva);
  const { showMessageModal } = useContext(AppContext);
  useEffect(() => {
    directives.length < 1 && setDirectives();
  }, []);
  const showModalModify = () => {
    setEdit(!edit);
  };

  const presidents = directives?.slice(0, 2);
  const otherDirectives = directives?.slice(2, 5);

  return (
    <Layout>
      {showMessageModal && <MessageModal />}
      {directives ? (
        <div className="my-10 dark:text-slate-100">
          <div className="  flex gap-6 flex-col items-center text-center ">
            {presidents?.map((president, index) => {
              return (
                <div
                  className=" w-[40%] lg:w-[20%] bg-white dark:bg-[#353434b4] shadow-lg flex flex-col items-center rounded-lg pt-2"
                  key={index}
                >
                  <div className="w-20 h-20 flex justify-center items-center bg-[#eff2f7] rounded-full">
                    <Image src={image} alt={president.name} className="h-16 " />
                  </div>
                  <h1>{president.name}</h1>
                  <h2>{president.position}</h2>
                  <div className="py-2">
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        setEdit({
                          id: president._id,
                          name: president.name,
                          position: president.position,
                        });
                      }}
                    >
                      Editar
                      <svg
                        className="ml-2"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        strokeWidth="0.00024000000000000003"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-col items-center lg:flex-row lg:justify-center gap-6 ">
            {otherDirectives?.map((directive, index) => {
              return (
                <div
                  className=" text-center mt-4 w-[40%] lg:w-[20%] bg-white dark:bg-[#353434b4] shadow-lg flex flex-col items-center rounded-lg pt-2"
                  key={index}
                >
                  <div className="w-20 h-20 flex justify-center items-center bg-[#eff2f7] rounded-full">
                    <Image src={image} alt={directive.name} className="h-16 " />
                  </div>
                  <h1>{directive?.name}</h1>
                  <h2>{directive?.position}</h2>
                  <div className="text-center py-2">
                    <button
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() => {
                        showModalModify(),
                          setEdit({
                            id: directive._id,
                            name: directive.name,
                            position: directive.position,
                          });
                      }}
                    >
                      Editar
                      <svg
                        className="ml-2"
                        width="30px"
                        height="30px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        strokeWidth="0.00024000000000000003"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.8787 3.70705C17.0503 2.53547 18.9498 2.53548 20.1213 3.70705L20.2929 3.87862C21.4645 5.05019 21.4645 6.94969 20.2929 8.12126L18.5556 9.85857L8.70713 19.7071C8.57897 19.8352 8.41839 19.9261 8.24256 19.9701L4.24256 20.9701C3.90178 21.0553 3.54129 20.9554 3.29291 20.7071C3.04453 20.4587 2.94468 20.0982 3.02988 19.7574L4.02988 15.7574C4.07384 15.5816 4.16476 15.421 4.29291 15.2928L14.1989 5.38685L15.8787 3.70705ZM18.7071 5.12126C18.3166 4.73074 17.6834 4.73074 17.2929 5.12126L16.3068 6.10738L17.8622 7.72357L18.8787 6.70705C19.2692 6.31653 19.2692 5.68336 18.8787 5.29283L18.7071 5.12126ZM16.4477 9.13804L14.8923 7.52185L5.90299 16.5112L5.37439 18.6256L7.48877 18.097L16.4477 9.13804Z"
                            fill="#ffffff"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
      {edit && <FormDirective edit={edit} showModalModify={showModalModify} />}
    </Layout>
  );
}
