import { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from '../../contexts/AppContext';

export function useTestimonials() {
  const [showForm, setShowForm] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showWarn, setShowWarn] = useState(false);
  const [id, setId] = useState(false);
  const [createTestimonial, setCreateTestimonial] = useState(false);
  const [modifyTestimony, setModifyTestimony] = useState(false);
  const [postModify, setPostModify] = useState();
  const [loading, setLoading] = useState(false);
  const { testimonials, setTestiminials, setShowMessageModal } =
    useContext(AppContext);

  const showModalForm = () => {
    setShowForm(!showForm);
  };
  const showModalWarn = () => {
    setShowWarn(!showWarn);
  };
  const showModalModify = () => {
    setShowModify(!showModify);
  };

  const handlerDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/testimonials/${id}`, {
        withCredentials: true,
      });
      data && setTestiminials(testimonials.filter((tes) => tes._id !== id));
      setLoading(false);
      setShowMessageModal('Testimonio Eliminado con Exito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerCreate = async (post) => {
    try {
      const { data } = await axios.post(`/testimonials`, post, {
        withCredentials: true,
      });
      data && setTestiminials([data.newTestimonial, ...testimonials]);
      setLoading(false);
      setShowMessageModal('Testimonio Creado con Exito');
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(`/testimonials/${post.id}`, post, {
        withCredentials: true,
      });
      if (data) {
        const updateTestimonial = [...testimonials];
        const id = data.testimonial._id;
        const index = updateTestimonial.findIndex((tes) => tes._id === id);
        updateTestimonial[index] = data.testimonial;
        setTestiminials(updateTestimonial);
        setLoading(false);
        setShowMessageModal('Testimonio Editado con Exito');
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  const stateGlobalTestimonials = async () => {
    try {
      if (testimonials.length === 0) {
        setLoading(true);
        const res = await axios.get('/testimonials');
        const response = res.data.reverse();
        setTestiminials(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setShowMessageModal('Ha ocurrido un error');
    }
  };

  return {
    showModalForm,
    showModalWarn,
    showModalModify,
    showModify,
    showWarn,
    showForm,
    createTestimonial,
    setCreateTestimonial,
    modifyTestimony,
    setModifyTestimony,
    postModify,
    setPostModify,
    handlerDelete,
    handlerCreate,
    handlerModify,
    id,
    setId,
    stateGlobalTestimonials,
    loading,
    setLoading,
  };
}
