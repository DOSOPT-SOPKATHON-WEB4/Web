// import { useNavigate } from 'react-router-dom';
import api from './api';

const patchCandle = async (candleId) => {
  // 이 함수 안에 navigate가 있는 경우, 유효하지 않은 훅 호출이라는 에러 발생 -> 여기서 경로 수정하면 안될 듯
  // const navigate = useNavigate();

  try {
    const response = await api.patch(`/candle?candle=${candleId}`);
    console.log(response);
    // navigate(-1);
  } catch (err) {
    console.log(err);
  }
};

export default patchCandle;
