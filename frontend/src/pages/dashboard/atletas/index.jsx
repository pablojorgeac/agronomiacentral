import { useState, useEffect, useContext } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import AppContext from '../../../../contexts/AppContext';
import {
  CreateAthlete,
  EditAthlete,
  Layout,
  ModalTable,
  TableActions,
  Loader,
  MessageModal,
} from '@/components/Dashboard';
import { useAthletes, useTableActions } from '@/hooks';
import useStore from '@/store/globalstore';
import { LogarithmicScale } from 'chart.js';

export default function Athletes() {
  const { atletas } = useStore();
  const { showMessageModal } = useContext(AppContext);
  const { handlerDelete, getAthletes, loading, setLoading } = useAthletes();

  useEffect(() => {
    getAthletes();
  }, []);

  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  const { row, handleDelete, handleUpdate } = useTableActions(
    setEditModal,
    handlerDelete
  );

  const columns = [
    { field: 'name', headerName: 'Nombre', width: 130, align: 'left' },
    {
      field: 'discipline',
      headerName: 'Disciplina',
      width: 130,
      align: 'left',
    },
    {
      field: 'email',
      headerName: 'Correo electrónico',
      width: 150,
      align: 'left',
    },
    {
      field: 'contact',
      headerName: 'Número de contacto',
      type: 'number',
      width: 170,
      align: 'left',
    },
    {
      field: 'emergency_name',
      headerName: 'Nombre contacto de emergencia',
      type: 'number',
      width: 170,
      align: 'left',
    },
    {
      field: 'emergency_phone',
      headerName: 'Número de emergencia',
      type: 'number',
      width: 170,
      editable: true,
      align: 'left',
    },
    {
      field: 'emergency_email',
      headerName: 'Correo de emergencia',
      type: 'number',
      width: 170,
      align: 'left',
    },
    {
      field: 'date_of_birth',
      headerName: 'Fecha de nacimiento',
      width: 170,
      align: 'left',
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 150,
      align: 'left',
      renderCell: (params) => (
        <TableActions
          setLoading={setLoading}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          {...params}
        />
      ),
    },
  ];
  return (
    <Layout>
      <section className={`w-full min-h-screen m-4`}>
        <article className="p-5">
          <h1 className="md:text-xl lg:text-3xl font-bold text-left pl-20 pb-5">
            Administrar todos los atletas
          </h1>
          <button
            onClick={() => setCreateModal(true)}
            className="h-[36px] bg-[#1b418a] flex items-center p-2.5 pl-30 rounded-lg text-white text-md leading-none"
          >
            <svg
              fill="#ffffff"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              strokeWidth="0.00024000000000000003"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g data-name="Layer 2">
                  <g data-name="person-add">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M21 6h-1V5a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2z"></path>
                    <path d="M10 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"></path>
                    <path d="M16 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1"></path>
                  </g>
                </g>
              </g>
            </svg>
            AÑADIR ATLETA
          </button>
        </article>
        <article className="xl:max-w-5xl gap-2 border bg-white dark:invert dark:border-none dark:shadow-none border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg h-full sm:h-auto">
          <DataGrid
            rows={atletas}
            columns={columns}
            slots={{
              toolbar: GridToolbar,
            }}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection={false}
            disableRowSelection={true}
            wrapperClassName="sm:w-full lg:w-10/12 xl:w-9/12 mx-auto"
          />
        </article>
      </section>
      {loading && <Loader />}
      {showMessageModal && <MessageModal />}
      {editModal && (
        <ModalTable>
          <EditAthlete row={row} setEditModal={setEditModal} />
        </ModalTable>
      )}
      {createModal && (
        <ModalTable>
          <CreateAthlete setCreateModal={setCreateModal} />
        </ModalTable>
      )}
    </Layout>
  );
}
