import axios from 'axios';

const getCandle = async (candleId, cakeName) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/candle?candleId=${candleId}&cakeName=${cakeName}`,
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default getCandle;
