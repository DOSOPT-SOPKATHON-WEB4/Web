import React from 'react';
import { CANDLE_POSITION } from '../../constants/constant';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import getCakeAndCandle from '../../api/getCakeAndCandle';

const Cake = (props) => {
  // const [checkedCandlePosition, setCheckedCandlePosition] = useState([0, 1, 0, 1, 1, 0, 1, 0]);
  const [candle, setCandle] = useState([]);
  const { title, cakeId } = props;

  const setCandleColor = (feel) => {
    switch (feel) {
      case 'A':
        return '/src/assets/image/candle_on_A.png';
      case 'B':
        return '/src/assets/image/candle_on_B.png';
      case 'C':
        return '/src/assets/image/candle_on_C.png';
      case 'D':
        return '/src/assets/image/candle_on_D.png';
      case 'E':
        return '/src/assets/image/candle_on_E.png';
      default:
        break;
    }
  };

  const setCakeColor = (cakeId) => {
    switch (cakeId % 3) {
      case 0:
        return '/src/assets/image/cake_1.png';
      case 1:
        return '/src/assets/image/cake_2.png';
      case 2:
        return '/src/assets/image/cake_3.png';
      default:
        return '/src/assets/image/cake_1.png';
    }
  };

  useEffect(() => {
    cakeId !== 0 && getCakeAndCandle(cakeId, setCandle);

    // let randomNum = Math.floor(Math.random() * 8 + 1);
    // while (checkedCandlePosition[randomNum - 1] === 1) {
    //   randomNum = Math.floor(Math.random() * 8 + 1);
    // }

    // const temp = [...checkedCandlePosition];
    // temp[randomNum - 1] = 1;
    // setCheckedCandlePosition(temp);
  }, [title]);

  return (
    <St.Container>
      {candle.map((it, idx) => {
        return (
          <St.Candle
            key={it.id}
            src={setCandleColor(it.feel)}
            $left={CANDLE_POSITION[idx + 1].left}
            $bottom={CANDLE_POSITION[idx + 1].bottom}
          />
        );
      })}
      <St.Cake src={setCakeColor(cakeId)} />
      {/* <St.Toast>사라져가는 촛불이 있어요, 촛불을 눌러서 다시 살려주세요!</St.Toast> */}
    </St.Container>
  );
};

const St = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24.3rem;

    position: relative;
    width: 32rem;
    height: 28.2rem;
  `,

  Cake: styled.img``,

  Candle: styled.img`
    position: absolute;
    bottom: ${({ $bottom }) => css`
      ${$bottom}rem
    `};
    left: ${({ $left }) => css`
      ${$left}rem
    `};
  `,

  Toast: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -20rem;

    padding: 0.8rem;
    border-radius: 1.2rem;
    color: ${({ theme }) => theme.colors.g3};
    ${({ theme }) => theme.fonts.c1};
    border: 1px solid var(--sub-g-5, #d7d7d7);
    background: var(--sub-g-6, #f4f4f4);
  `,
};

export default Cake;
