import React from 'react';
import { CANDLE_POSITION } from '../../constants/constant';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';

const Cake = (props) => {
  const [checkedCandlePosition, setCheckedCandlePosition] = useState([0, 1, 0, 1, 1, 0, 1, 0]);
  const [, setIsBurned] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { title, setTitle } = props;

  // 촛불 불러오는 api
  const getCandle = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/cake/16`, {
        headers: 'Content-Type: application/json',
      })
      .then((res) => {
        setTitle(res.data.data.cake_title);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCandle();
    let randomNum = Math.floor(Math.random() * 8 + 1);
    while (
      checkedCandlePosition[randomNum - 1] === 1 ||
      checkedCandlePosition[randomNum - 1] === 0.5
    ) {
      randomNum = Math.floor(Math.random() * 8 + 1);
    }

    if (checkedCandlePosition[randomNum - 1] === 0.5) {
      setIsBurned(true);
    } else {
      setIsBurned(false);
    }

    const temp = [...checkedCandlePosition];
    temp[randomNum - 1] = 1;
    setCheckedCandlePosition(temp);
  }, [title]);

  return (
    <St.Container>
      {checkedCandlePosition.map((it, idx) => {
        if (it === 1)
          return (
            <St.Candle
              key={idx}
              src='../public/candle_on_1.png'
              $left={CANDLE_POSITION[idx].left}
              $bottom={CANDLE_POSITION[idx].bottom}
            />
          );
        if (it === 0.5)
          return (
            <St.Candle
              key={idx}
              src='../public/candle_off_2.png'
              $left={CANDLE_POSITION[idx].left}
              $bottom={CANDLE_POSITION[idx].bottom}
            />
          );
      })}
      <St.Cake src='../public/cake_view9.png' />;
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
    margin-top: 10rem;

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
