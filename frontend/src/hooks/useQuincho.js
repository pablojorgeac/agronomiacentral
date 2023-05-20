import axios from 'axios';
import { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';

export function useQuincho() {
  const { setReservations, setReservationsDates } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const getGlobalEvents = async () => {
    try {
      const { data } = await axios.get('/events');
      setReservations(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getGlobalDateEvents = async () => {
    try {
      const { data } = await axios.get('/dateevents');
      setReservationsDates(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (event) => {
    try {
      const { data } = await axios.post('/events', event);
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handlerUpdate = async (event, id) => {
    try {
      const { data } = await axios.put(`/events/${id}`, event, {
        withCredentials: true,
      });
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/events/${id}`, {
        withCredentials: true,
      });
      getGlobalDateEvents();
      getGlobalEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
    getGlobalEvents,
    getGlobalDateEvents,
    handlerCreate,
    handlerUpdate,
    loading,
    setLoading,
  };
}
