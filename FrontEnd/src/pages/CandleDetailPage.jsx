import React from 'react';
import Date from '../components/CandleDetail/Date';
import styled from 'styled-components';
import Text from '../components/CandleDetail/Text';
import Description from '../components/CandleDetail/Description';
import LastUpdate from '../components/CandleDetail/LastUpdate';
import Buttons from '../components/CandleDetail/Buttons';

const CandleDetailPage = () => {
  const candleId = 1;
  const cakeName = '승희';

  return (
    <St.Wrapper>
      <Date />
      <Text />
      <div>
        <Description />
        <LastUpdate />
      </div>
      <Buttons />
    </St.Wrapper>
  );
};

export default CandleDetailPage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
