import { useEffect, useState } from 'react';
import {
  CreateAd,
  Layout,
  ModalTable,
  Publishing,
  EditAd,
  DeleteAd,
} from '@/components/Dashboard';
import axios from 'axios';

export default function PaginadePubli() {
  const [ads, setAds] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [adToEdit, setAdToEdit] = useState({});

  const getAds = async () => {
    const { data } = await axios.get('/ads');
    setAds(data);
  };
  const handleEdit = (ad) => {
    setAdToEdit({
      id: ad._id,
      name: ad.name,
      contact: ad.contact,
    });
    setEditModal(true);
  };
  const handleDelete = (ad) => {
    setAdToEdit({
      id: ad._id,
      name: ad.name,
      contact: ad.contact,
    });
    setDeleteModal(true);
  };
  useEffect(() => {
    getAds();
  }, []);
  return (
    <Layout>
      <section className="p-3">
        <section className="text-end">
          <button
            onClick={() => setCreateModal(true)}
            className="w-48 h-12 m-0 inline-flex justify-around items-center px-3 text-lg py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Añadir anuncio
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g id="Edit / Add_Plus_Square">
                  {' '}
                  <path
                    id="Vector"
                    d="M8 12H12M12 12H16M12 12V16M12 12V8M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                    stroke="#ffffff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{' '}
                </g>{' '}
              </g>
            </svg>
          </button>
        </section>

        {/* ADS */}
        <section className="w-full h-[calc(100vh-75px)] py-3 flex flex-wrap gap-2 2xl:gap-4 lg:items-center justify-center">
          {/* Publicidad */}
          {ads?.map((ad, index) => (
            <Publishing
              key={ad._id}
              ad={ad}
              number={index + 1}
              img={ad.picture.secure_url}
              name={ad.name}
              tel={ad.contact}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </section>
      </section>
      {editModal && (
        <ModalTable>
          <EditAd setEditModal={setEditModal} getAds={getAds} ad={adToEdit} />
        </ModalTable>
      )}
      {createModal && (
        <ModalTable>
          <CreateAd setCreateModal={setCreateModal} getAds={getAds} />
        </ModalTable>
      )}
      {deleteModal && (
        <ModalTable>
          <DeleteAd
            setDeleteModal={setDeleteModal}
            getAds={getAds}
            id={adToEdit.id}
          />
        </ModalTable>
      )}
    </Layout>
  );
}
