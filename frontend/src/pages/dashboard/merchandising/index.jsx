import { Layout, MessageModal } from '@/components/Dashboard';
import { Warn } from '@/components/Dashboard/Warn/Warn';
import AppContext from '../../../../contexts/AppContext';
import { useMerchandising } from '@/hooks/useMerchandising';
import { useContext, useEffect, useState } from 'react';
import { NewProduct } from '@/components/Dashboard/Forms/NewProduct';
import { EditProduct } from '@/components/Dashboard/Forms/EditProduct';

export default function Merchandising() {
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { showMessageModal } = useContext(AppContext);
  const { handlerDelete, handlerCreate, handlerModify, getProducts, products } = useMerchandising();

  const showModalModify = () => {
    setShowModify(false);
  };
  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(false);
  };


  useEffect(() => {
    !products?.length && getProducts();
  }, []);
  return (
    <Layout>
      <div className="m-4 dark:text-slate-100">
        <div className=" text-end m-2">
          <button
            className="mt-4 mr-4 w-48 h-12 inline-flex justify-around items-center px-3 py-2 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={showModalForm}
          >
            Crear Producto
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height={26}
              width={26}
              className="group-hover:scale-110 transition-all duration-300"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 2C4.84476 2 4.69164 2.03615 4.55279 2.10557L1.10557 3.82918C0.428004 4.16796 0 4.86049 0 5.61803V9.38197C0 10.8687 1.56462 11.8357 2.89443 11.1708L4 10.618V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V10.618L21.1056 11.1708C22.4354 11.8357 24 10.8687 24 9.38197V5.61803C24 4.86049 23.572 4.16796 22.8944 3.82918L19.4472 2.10557C19.3084 2.03615 19.1552 2 19 2H16C14.8954 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2H5ZM4 4.61803V8.38197L2 9.38197L2 5.61803L4 4.61803ZM8 4H6V9V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V9V4H16C16 6.20914 14.2091 8 12 8C9.79086 8 8 6.20914 8 4ZM22 5.61803L20 4.61803V8.38197L22 9.38197V5.61803ZM10 12.5C10 12.2239 10.2239 12 10.5 12C10.7761 12 11 12.2239 11 12.5V14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5V12.5ZM10.5 10C9.11929 10 8 11.1193 8 12.5V14.5C8 15.8807 9.11929 17 10.5 17C11.8807 17 13 15.8807 13 14.5V12.5C13 11.1193 11.8807 10 10.5 10ZM14 10C13.4477 10 13 10.4477 13 11C13 11.5523 13.4477 12 14 12V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V11C16 10.4477 15.5523 10 15 10H14Z"
                  fill="#ffffff"
                ></path>{' '}
              </g>
            </svg>
          </button>
        </div>
        <div className="m-8 grid justify-center lg:grid-cols-3 gap-4">
          {products?.map((product, index) => {
            return (
              <div
                className="max-w-[280px] h-[420px] rounded-lg shadow-lg dark:bg-[#353434b4]"
                key={index}
              >
                <img
                  src={product?.picture?.secure_url}
                  loading="lazy"
                  alt={product.title}
                  className="h-[55%] my-0 mx-auto"
                />

                <div className="px-6 py-3">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {product.description}
                  </p>
                </div>
                <div className="px-6  text-end ">
                  <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                    ${product.price}
                  </span>
                </div>
                <div className="flex my-4 lg:mb-0 justify-around">
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-600"
                    onClick={() => {
                      setShowWarn(product._id);
                    }}
                  >
                    Eliminar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="ml-2"
                      width="30px"
                      height="30px"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      setShowModify({
                        id: product._id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
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
      {showMessageModal && <MessageModal />}
      {showForm && (
        <NewProduct
          showModalForm={showModalForm}
          handlerCreate={handlerCreate}
        />
      )}
      {showWarn && (
        <Warn
          handlerDelete={handlerDelete}
          showModalWarn={showModalWarn}
          setLoading={setLoading}
          showWarn={showWarn}
        />
      )}
      {showModify && (
        <EditProduct
          handlerModify={handlerModify}
          showModalModify={showModalModify}
          ShowModify={showModify}
        />
      )}
    </Layout>
  );
}
