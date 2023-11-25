import axios from 'axios';

const postCandle = async (info) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/candle`, info);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default postCandle;
