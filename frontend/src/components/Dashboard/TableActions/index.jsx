import { Box, IconButton, Tooltip } from '@mui/material';

export const TableActions = ({
  row,
  handleDelete,
  handleUpdate,
  setLoading,
}) => {
  return (
    <Box>
      <Tooltip title="Editar Atleta">
        <IconButton
          onClick={() => {
            handleUpdate(row);
          }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.8 12.963L2 18l4.8-.63L18.11 6.58a2.612 2.612 0 00-3.601-3.785L3.8 12.963z"
                data-darkreader-inline-stroke
              />{' '}
            </g>
          </svg>
        </IconButton>
      </Tooltip>
      <Tooltip title="Eliminar Atleta">
        <IconButton
          onClick={() => {
            handleDelete(row);
            setLoading(true);
          }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-darkreader-inline-stroke
              />{' '}
              <path
                d="M6 10L7.70141 19.3578C7.87432 20.3088 8.70258 21 9.66915 21H14.3308C15.2974 21 16.1257 20.3087 16.2986 19.3578L18 10"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-darkreader-inline-stroke
              />{' '}
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                data-darkreader-inline-stroke
              />{' '}
            </g>
          </svg>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
