import { useEffect } from 'react';
import api from './api';

const useGetCandle = (candleId, cakeName, setData) => {
  const getCandle = async () => {
    try {
      const response = await api.get(
        `/candle?candleId=${candleId}&cakeName=${cakeName}`,
      );
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCandle();
  }, []);
};

export default useGetCandle;
