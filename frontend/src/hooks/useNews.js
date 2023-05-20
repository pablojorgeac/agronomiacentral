import axios from 'axios';
import { useContext, useState } from 'react';
import AppContext from '../../contexts/AppContext';

export function useNews() {
  const { newsGlobal, setNewsGlobal, setShowMessageModal } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/posts/${id}`, {
        withCredentials: true,
      });
      data && setNewsGlobal(newsGlobal.filter((tes) => tes._id !== id));
      setLoading(false);
      setShowMessageModal('Noticia Eliminada con Éxito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post('/posts', post, {
        withCredentials: true,
      });
      data && setNewsGlobal([data.newPost, ...newsGlobal]);
      setLoading(false);
      setShowMessageModal('Noticia Creada con Éxito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(`/posts/${post.id}`, post, {
        withCredentials: true,
      });
      if (data) {
        const updateNews = [...newsGlobal];
        const id = data.post._id;
        const index = updateNews.findIndex((n) => n._id === id);
        updateNews[index] = data.post;
        setNewsGlobal(updateNews);
        setLoading(false);
        setShowMessageModal('Noticia Editada con Éxito');
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const stateGlobalNews = async () => {
    try {
      if (newsGlobal.length === 0) {
        setLoading(true);
        const res = await axios.get('/posts');
        const response = res.data;
        setNewsGlobal(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
    stateGlobalNews,
    loading,
    setLoading,
  };
}
