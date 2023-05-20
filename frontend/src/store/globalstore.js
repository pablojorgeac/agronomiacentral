import { create } from 'zustand';
import axios from 'axios';
const useStore = create((set, get) => ({
  atletas: [],
  reservas: [],
  directiva: [],
  dates: [],
  matches: [],

  setAtletas: async () => {
    const { data } = await axios.get('/athletes', {
      withCredentials: true,
      credentials: 'include',
    });
    set((state) => ({ ...state, atletas: data.reverse() }));
  },
  setReservas: async () => {
    try {
      const { data } = await axios.get('/events');
      set((state) => ({ ...state, reservas: data }));
    } catch (error) {}
  },
  setDirectiva: async () => {
    const { data } = await axios.get('/directors');
    set((state) => ({ ...state, directiva: data }));
  },
  editDirectiva: async (props) => {
    try {
      const { data } = await axios.put(`/directors/${props.id}`, props, {
        withCredentials: true,
      });
      get().setDirectiva();
    } catch (error) {
      console.log(error);
    }
  },
  modifyAtletas: (data) =>
    set((state) => ({
      ...state,
      atletas: data,
    })),
  setDates: async () => {
    try {
      const { data } = await axios.get('/dateevents');
      set((state) => ({ ...state, dates: data }));
    } catch (error) {}
  },
  addDate: async (date) => {
    try {
      const { data } = await axios.post('/events', date, {
        withCredentials: true,
      });
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  updateDate: async (date, id) => {
    try {
      const { data } = await axios.put(`/events/${id}`, date, {
        withCredentials: true,
      });
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  deleteDate: async (id) => {
    try {
      const { data } = await axios.delete(`/events/${id}`, {
        withCredentials: true,
      });
      get().setDates();
      get().setReservas();
    } catch (error) {}
  },
  setMatches: async () => {
    try {
      const { data } = await axios.get('/matches');
      set((state) => ({ ...state, matches: data }));
    } catch (error) {}
  },
  modifyMatches: (data) => {
    set((state) => ({
      ...state,
      matches: data,
    }));
  },
}));

export default useStore;
