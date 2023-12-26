import api from './api';

const getCakeAndCandle = async (cakeId, setCandle) => {
  const response = await api.get(`/cake/${cakeId}`);
  setCandle(response.data.data.candle_list);
};

export default getCakeAndCandle;