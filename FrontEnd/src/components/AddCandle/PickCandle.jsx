import styled from 'styled-components';
import { IcCandle1, IcCandle2, IcCandle3, IcCandle4, IcCandle5, IcCandleFire } from '../../assets';
import { useState } from 'react';

const PickCandle = ({ setFeel }) => {
  const CANDLE = [
    {
      feel: 'A',
      icon: <IcCandle1 />,
    },
    {
      feel: 'B',
      icon: <IcCandle2 />,
    },
    {
      feel: 'C',
      icon: <IcCandle3 />,
    },
    {
      feel: 'D',
      icon: <IcCandle4 />,
    },
    {
      feel: 'E',
      icon: <IcCandle5 />,
    },
  ];

  const [selectedCandle, setSelectedCandle] = useState(0);
  return (
    <St.Wrapper>
      {CANDLE.map((candle, idx) => (
        <St.CandleChoice
          key={idx}
          onClick={() => {
            setSelectedCandle(idx);
            setFeel(candle.feel);
          }}
        >
          <St.CandleFire>{idx === selectedCandle && <IcCandleFire />}</St.CandleFire>
          <div>{candle.icon}</div>
        </St.CandleChoice>
      ))}
    </St.Wrapper>
  );
};

export default PickCandle;

const St = {
  Wrapper: styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3.7rem;
    justify-content: center;
    margin: 0rem 5rem;

    & > svg {
      cursor: pointer;
    }
  `,
  CandleChoice: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
  `,
  CandleFire: styled.div`
    position: absolute;
    top: -0.2rem;
  `,
};
