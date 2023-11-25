import styled from 'styled-components';
import {
  IcCandle1,
  IcCandle1Picked,
  IcCandle2,
  IcCandle2Picked,
  IcCandle3,
  IcCandle3Picked,
  IcCandle4,
  IcCandle4Picked,
  IcCandle5,
  IcCandle5Picked,
} from '../../assets';
import { useState } from 'react';

const PickCandle = ({ setFeel }) => {
  const CANDLE = [
    {
      feel: 'A',
      default: <IcCandle1 />,
      picked: <IcCandle1Picked />,
    },
    {
      feel: 'B',
      default: <IcCandle2 />,
      picked: <IcCandle2Picked />,
    },
    {
      feel: 'C',
      default: <IcCandle3 />,
      picked: <IcCandle3Picked />,
    },
    {
      feel: 'D',
      default: <IcCandle4 />,
      picked: <IcCandle4Picked />,
    },
    {
      feel: 'E',
      default: <IcCandle5 />,
      picked: <IcCandle5Picked />,
    },
  ];

  const [selectedCandle, setSelectedCandle] = useState(0);
  return (
    <St.Wrapper>
      {CANDLE.map((candle, idx) =>
        idx === selectedCandle ? (
          <St.Candle key={`${idx}`} $isSelected={idx === selectedCandle}>
            {candle.picked}
          </St.Candle>
        ) : (
          <St.Candle
            key={`${idx}picked`}
            onClick={() => {
              setSelectedCandle(idx);
              setFeel(candle.feel);
            }}
            $isSelected={idx === selectedCandle}
          >
            {candle.default}
          </St.Candle>
        ),
      )}
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
  Candle: styled.div``,
};
