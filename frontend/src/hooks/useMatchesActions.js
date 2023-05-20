import { useState } from 'react';

export const useMatchesActions = (setEditModalMatch, handlerDelete) => {
  const [row, setRow] = useState({});

  const handleDelete = (match) => {

    handlerDelete(match._id);

  };
  const handleUpdate = (r) => {
    setRow(r);
    setEditModalMatch(true); //form edit
  };

  return {
    row,
    handleDelete,
    handleUpdate,
  };
};
