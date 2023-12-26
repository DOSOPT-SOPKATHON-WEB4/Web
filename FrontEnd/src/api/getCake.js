import api from './api';

const getCake = async (setTag) => {
  const response = await api.get(`/cake`);
  setTag(response.data.data.cake_list);
};
export default getCake;
