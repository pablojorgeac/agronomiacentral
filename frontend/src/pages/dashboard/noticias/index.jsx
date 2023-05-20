import { Layout, FormNews, FormModifyNews, ButtonEditNews, ButtonDeleteNews, ButtonCreateNews, Loader, MessageModal } from '@/components/Dashboard';
import { useState, useContext, useEffect } from 'react';
import { Warn } from '@/components/Dashboard/Warn/Warn';
import { useNews } from '@/hooks';
import AppContext from '../../../../contexts/AppContext';

export default function News() {
  const { newsGlobal, showMessageModal } = useContext(AppContext);
  const { handlerDelete, handlerCreate, handlerModify, stateGlobalNews, loading, setLoading } = useNews();

  useEffect(() => {
    stateGlobalNews()
  }, [])

  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);

  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(false);
  };
  const showModalModify = () => {
    setShowModify(false);
  };

  const mainNews = newsGlobal[newsGlobal.length - 1];
  const otherNews = newsGlobal.slice(0, newsGlobal.length - 1).reverse();

  return (
    <Layout>
      <div className="m-4">
        <div className='flex justify-end m-2'>
          <ButtonCreateNews
            showModalForm={showModalForm}
          />
        </div>
        <div className="flex flex-wrap justify-center">
          <div className='shadow-md m-2 mb-4 cursor-pointer hover:scale-105 transition ease-in-out'>
            <div className="sm:grid relative sm:grid-cols-2 sm:max-h-72 overflow-hidden mb-5 p-5">
              <img
                src={mainNews?.picture?.secure_url}
                alt={mainNews?.title}
                loading="lazy"
                className="col-span-1 p-5 sm:order-2"
              />
              <div className="sm:col-span-1 sm:grid sm:grid-row-2 sm:order-1">
                <h3 className="text-3xl place-self-center text-center font-bold  p-5 sm:row-span-1">
                  {mainNews?.title}
                </h3>
                <p className="text-base  leading-6 pt-0 px-5 pb-5 mb-3 sm:row-span-1">
                  {mainNews?.description.slice(0, 280) + '...'}
                </p>
              </div>
            </div>
            <div className='flex justify-around m-2 mb-4'>
              <ButtonEditNews
                setShowModify={setShowModify}
                id={mainNews?._id}
                title={mainNews?.title}
                description={mainNews?.description}
              />
              <ButtonDeleteNews
                setShowWarn={setShowWarn}
                id={mainNews?._id}
              />
            </div>
          </div>
          {otherNews?.map((news) => {
            return (
              <div key={news._id} className="relative max-w-xs m-1 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out p-5">
                <img
                  src={news.picture.secure_url}
                  alt={news.title}
                  loading="lazy"
                  className=""
                />
                <h3 className="text-lg text-center font-bold px-5 pt-5 pb-3">
                  {news.title}
                </h3>
                <p className="text-base leading-6 px-5 pt-0">
                  {news.description.slice(0, 280) + '...'}
                </p>
                <div className='flex justify-around m-2 mb-4'>
                  <ButtonEditNews
                    setShowModify={setShowModify}
                    id={news._id}
                    title={news.title}
                    description={news.description}
                  />
                  <ButtonDeleteNews
                    setShowWarn={setShowWarn}
                    id={news._id}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div >
      {loading && (
        <Loader />
      )}
      {showMessageModal && (
        <MessageModal />
      )}
      {
        showForm && (
          <FormNews
            showModalForm={showModalForm}
            handlerCreate={handlerCreate}
            setLoading={setLoading}
          />
        )
      }
      {
        showWarn && (
          <Warn
            handlerDelete={handlerDelete}
            showModalWarn={showModalWarn}
            showWarn={showWarn}
            setLoading={setLoading}
          />
        )
      }
      {
        showModify && (
          <FormModifyNews
            handlerModify={handlerModify}
            showModalModify={showModalModify}
            ShowModify={showModify}
            setLoading={setLoading}
          />
        )
      }
    </Layout >
  );
}
