import api from './api';

const postCandle = async (info) => {
  try {
    const response = await api.post(`/candle`, info);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default postCandle;
