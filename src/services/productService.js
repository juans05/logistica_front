
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/products';

export const getAllProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/listar`);
      console.log('---------------->',response.data);
      return response.data; // Devuelve los datos directamente
    } catch (error) {
      if (error.response) {
        // La solicitud fue hecha y el servidor respondió con un estado de error
        console.error('Error en la API:', error.response.status);
        console.error('Mensaje de error:', error.response.data.message);
        // Puedes manejar respuestas de error específicas según el status aquí
        switch (error.response.status) {
          case 500:
            console.error('Error interno del servidor');
            break;
          // Añadir más casos si es necesario
          default:
            console.error('Otro error de servidor');
        }
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('No response received:', error.request);
      } else {
        // Algo pasó en la configuración de la solicitud que lanzó un error
        console.error('Error:', error.message);
      }
      // Puedes decidir lanzar el error o devolver un valor por defecto
      throw error; // Lanzar el error para manejarlo más arriba en la cadena de llamadas
      // o devolver un valor específico:
      // return []; // Suponiendo que se esperaba un array de productos
    }
  };
export const getProductById = (id) => axios.get(`${baseUrl}/${id}`);
export const createProduct = (productData) => axios.post(baseUrl, productData);
export const updateProduct = (id, productData) => axios.put(`${baseUrl}/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`${baseUrl}/${id}`);