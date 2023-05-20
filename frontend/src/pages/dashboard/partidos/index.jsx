import { Layout } from '@/components/Dashboard';
import MatchesForm from '@/components/Dashboard/Forms/MatchesForm';
import MatchesFormEdit from '@/components/Dashboard/Forms/MatchesFormEdit';
import TableActionsMatches from '@/components/Dashboard/TableActionsMatches';

import { useState, useEffect, useContext } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useMatches } from '@/hooks';
import useStore from '@/store/globalstore';
import { useMatchesActions } from '@/hooks/useMatchesActions';

export default function Matches() {

    const { matches } = useStore(); //
    //showmessagemodaldelete
    const { handlerDelete, getMatches, loading, setLoading } = useMatches() //initial handlerDelete from hooks

    useEffect(()=>{
        getMatches();
    }, [])

    const [editModalMatch, setEditModalMatch] = useState(false);//initial state to edit modal
    const [showModalMatches, setShowModalMatches] = useState(false);//Declare an initial state of the form modal to create matches
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });

    const { row, handleDelete, handleUpdate } = useMatchesActions(setEditModalMatch, handlerDelete);



    const columns = [
        { field: 'name', headerName: 'Nombre del Encuentro', width: 130 },
        { field: 'date', headerName: 'Fecha', width: 130 },
        { field: 'home_team', headerName: 'Equipo Local', width: 130 },
        { field: 'away_team', headerName: 'Equipo Visitante', width: 130 },
        { field: 'discipline', headerName: 'Disciplina', width: 130 },
        {   field: 'actions',
            headerName: 'Acciones',
            type:'actions',
            width:150,

            renderCell:(params)=> <TableActionsMatches
                                setLoading={setLoading}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                {...params}
                                />,

        },

    ];



    const rows = []

    matches.map((match)=>{
        rows.push(match)
    })



  return (
    <Layout>
      <div>
        <section
          className={`w-full min-h-screen flex flex-col justify-self-center justify-center items-center xl:w-11/12 sm:w-5/6 `}
        >
          <article className="flex items-center mb-2">
            <h1 className="text-5xl font-bold text-center">
              Encuentros del Club
            </h1>
            <button
              className="bg-blue-900 text-white active:bg-blue-500 font-bold px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-3"
              type="button"
              onClick={() => setShowModalMatches(true)}
            >
              Crear nuevo encuentro
            </button>
          </article>
          <article className="flex flex-col gap-2 border bg-white dark:invert dark:shadow-none dark:border-none border-neutral-300 shadow-[0px_3px_10px_2px_rgb(0_0_0_/_13%)] px-4 py-2 rounded-lg max-w-full h-2/3">
            <DataGrid
              rows={matches}
              getRowId={(row) => row._id}
              columns={columns}
              slots={{
                toolbar: GridToolbar,
              }}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[5, 10, 25]}
              checkboxSelection

              disableMultipleRowSelection
            />
          </article>
        </section>
      </div>
      {showModalMatches ? (
        <MatchesForm
          showModalMatches={showModalMatches}
          setShowModalMatches={setShowModalMatches}
        />
      ) : null}
      {editModalMatch?(
        <MatchesFormEdit
            editModalMatch={editModalMatch}
            setEditModalMatch={setEditModalMatch}
            row={row}
        />
      ):null}
    </Layout>
  );

}

