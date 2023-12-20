// import axios from 'axios';
import api from './api';

const getCake = async (setTag) => {
  // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cake`);
  const response = await api.get(`/cake`);
  setTag(response.data.data.cake_list);
};
export default getCake;
