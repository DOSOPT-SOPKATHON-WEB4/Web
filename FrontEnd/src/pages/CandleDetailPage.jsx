import React, { useState } from 'react';
import Date from '../components/CandleDetail/Date';
import styled from 'styled-components';
import Text from '../components/CandleDetail/Text';
import Description from '../components/CandleDetail/Description';
import LastUpdate from '../components/CandleDetail/LastUpdate';
import useGetCandle from '../api/getCandle';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CandleDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const candleId = 1; // 추후 수정
  const cakeName = searchParams.get('cakeName');

  useGetCandle(candleId, cakeName, setData);

  const resetCandle = () => {
    navigate(-1);
    // 다시 돌아갔을 땐 촛불이 reset되어야함. 해당 부분 아름이와 논의
    // 돌아갈 때마다 촛불 위치가 변하는 이슈
  };

  return (
    data && (
      <St.Wrapper>
        <Date date={data.date} />
        <Text tag={data.tag} title={data.title} feel={data.feel} />
        <div>
          <Description body={data.body} />
          <LastUpdate last={data.last_fire} />
        </div>
        <St.Btn type='button' onClick={resetCandle}>
          촛불에 다시 불 붙이기
        </St.Btn>
      </St.Wrapper>
    )
  );
};

export default CandleDetailPage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;

    width: 100vw;
    height: 100vh;
    padding: 2.8rem 2rem;

    & > div {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 2.2rem;
    }
  `,
  Btn: styled.button`
    padding: 1.6rem 0rem;
    width: 100%;

    ${({ theme }) => theme.fonts.s3};
    color: ${({ theme }) => theme.colors.white};

    border: none;
    border-radius: 10rem;
    ${({ theme }) => theme.shadow.shadow};
    background-color: ${({ theme }) => theme.colors.red};
  `,
};
