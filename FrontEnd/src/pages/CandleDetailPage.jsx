import React, { useState } from 'react';
import Date from '../components/CandleDetail/Date';
import styled from 'styled-components';
import Text from '../components/CandleDetail/Text';
import Description from '../components/CandleDetail/Description';
import LastUpdate from '../components/CandleDetail/LastUpdate';
import Buttons from '../components/CandleDetail/Buttons';
import useGetCandle from '../api/getCandle';
import { useSearchParams } from 'react-router-dom';

const CandleDetailPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const candleId = 1; // 추후 수정
  const cakeName = searchParams.get('cakeName');

  useGetCandle(candleId, cakeName, setData);

  return (
    data && (
      <St.Wrapper>
        <Date date={data.date} />
        <Text tag={data.tag} title={data.title} feel={data.feel} />
        <div>
          <Description body={data.body} />
          <LastUpdate last={data.last_fire} />
        </div>
        <Buttons />
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
};
