import { useState } from 'react';

export const useTableActions = (setEditModal, handlerDelete) => {
  const [row, setRow] = useState({});

  const handleDelete = (athlete) => {
    handlerDelete(athlete.id);
  };
  const handleUpdate = (r) => {
    setRow(r);
    setEditModal(true);
  };

  return {
    row,
    handleDelete,
    handleUpdate,
  };
};
