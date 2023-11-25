import styled from 'styled-components';
import { IcCandle1, IcCandle2, IcCandle3, IcCandle4, IcCandle5 } from '../../assets';
import { useState } from 'react';

const PickCandle = () => {
  const CANDLE = [
    <IcCandle1 key={1} />,
    <IcCandle2 key={2} />,
    <IcCandle3 key={3} />,
    <IcCandle4 key={4} />,
    <IcCandle5 key={5} />,
  ];

  const [selectedCandle, setSelectedCandle] = useState('');
  return (
    <St.Wrapper>
      <IcCandle1 />
      <IcCandle2 />
      <IcCandle3 />
      <IcCandle4 />
      <IcCandle5 />
    </St.Wrapper>
  );
};

export default PickCandle;

const St = {
  Wrapper: styled.section`
    display: flex;
    gap: 3.7rem;
    justify-content: center;
    margin: 0rem 5rem;

    & > svg {
      cursor: pointer;
    }
  `,
};
