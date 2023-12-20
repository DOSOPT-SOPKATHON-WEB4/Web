import axios from 'axios';
import { useEffect } from 'react';

const useGetCandle = (candleId, cakeName, setData) => {
  const getCandle = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/candle?candleId=${candleId}&cakeName=${cakeName}`,
      );
      setData(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCandle();
  }, []);
};

export default useGetCandle;
