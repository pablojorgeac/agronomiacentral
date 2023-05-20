import axios from 'axios';
import { useState, useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import useStore from '@/store/globalstore';

export function useAthletes() {
  const { atletas, setAtletas, modifyAtletas } = useStore();
  const [loading, setLoading] = useState(false);
  const { setShowMessageModal } = useContext(AppContext);

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/athletes/${id}`, {
        withCredentials: true,
      });
      if (data.msg) {
        const updateAtletas = [...atletas].filter((atle) => atle.id !== id);
        modifyAtletas(updateAtletas);
      }
      setLoading(false);
      setShowMessageModal('Atleta Eliminado con Éxito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerCreate = async (athlete) => {
    try {
      const { data } = await axios.post('/athletes', athlete, {
        withCredentials: true,
      });
      if (data) {
        await modifyAtletas([data.newAthlete, ...atletas]);
      }
      setShowMessageModal('Atleta Añadido con Éxito');
    } catch (error) {
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerModify = async (athlete) => {
    try {
      const { data } = await axios.put(`/athletes/${athlete.id}`, athlete, {
        withCredentials: true,
      });
      if (data) {
        const updateAtletas = [...atletas];
        const { id } = data.athlete;
        const index = updateAtletas.findIndex((atle) => atle.id === id);
        updateAtletas[index] = data.athlete;
        modifyAtletas(updateAtletas);
        setShowMessageModal('Atleta Editado con Éxito');
      }
    } catch (error) {
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const getAthletes = async () => {
    if (atletas.length === 0) {
      setLoading(true);
      await setAtletas();
      setLoading(false);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
    getAthletes,
    loading,
    setLoading,
  };
}
