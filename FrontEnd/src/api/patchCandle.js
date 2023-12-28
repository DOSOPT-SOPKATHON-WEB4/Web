import { useNavigate } from 'react-router-dom';
import api from './api';

const useGetCandle = async (candleId) => {
  const navigate = useNavigate();

  try {
    await api.patch(`/candle?candle=${candleId}`);
    navigate(-1);
  } catch (err) {
    console.log(err);
  }
};

export default useGetCandle;
