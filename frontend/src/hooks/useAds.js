import axios from 'axios';

export function useAds() {
  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/ads/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlerCreate = async (ad) => {
    try {
      const { data } = await axios.post('/ads', ad, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handlerModify = async (ad) => {
    try {
      const { data } = await axios.put(`/ads/${ad.id}`, ad, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
  };
}
