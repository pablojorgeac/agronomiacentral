import axios from 'axios';
import AppContext from '../../contexts/AppContext';
import { useContext, useState } from 'react';
export function useMerchandising() {
  const { setShowMessageModal } = useContext(AppContext);
  const [products, setProducts] = useState();
  const getProducts = async () => {

    const { data } = await axios.get('/products');

    return setProducts(data);
  };
  const handlerDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`, {
        withCredentials: true,
      });
      setShowMessageModal('Producto eliminado con éxito');
      getProducts();
    } catch (error) {
      setShowMessageModal(`Ha ocurrido un error: ${error} `);
    }
  };

  const handlerCreate = async (product) => {
    try {
      const { data } = await axios.post('/products', product, {
        withCredentials: true,
      });
      setShowMessageModal('Producto agregado con éxito');
      getProducts();
    } catch (error) {
      setShowMessageModal(`Ha ocurrido un error: ${error} `);
    }
  };

  const handlerModify = async (post) => {
    try {
      const { data } = await axios.put(`products/${post.id}`, post, {
        withCredentials: true,
      });
      setShowMessageModal('Producto actualizado con éxito');
      getProducts();
    } catch (error) {
      setShowMessageModal(`Ha ocurrido un error: ${error} `);
    }
  };

  return {
    handlerDelete,
    handlerCreate,
    handlerModify,
    getProducts,
    products,
  };
}
