import api from './api';

const getCandle = async (cakeId, setCandle) => {
  const response = await api.get(`/cake/${cakeId}`);
  setCandle(response.data.data.candle_list);
};

export default getCandle;
