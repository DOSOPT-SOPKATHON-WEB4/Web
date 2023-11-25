import React from 'react';
import styled, { css } from 'styled-components';

const BUTTOM_DUMMY = [
  { key: 1, bottom: 12.6, left: 1.2 },
  { key: 2, bottom: 10.3, left: 5.4 },
  { key: 3, bottom: 9.4, left: 11 },
  { key: 4, bottom: 10.3, left: 16.6 },
  { key: 5, bottom: 12.6, left: 20.9 },
];

const TOP_DUMMY = [
  { key: 6, bottom: 21.8, left: 6.8 },
  { key: 7, bottom: 21.4, left: 11 },
  { key: 8, bottom: 21.8, left: 15.2 },
];

const Test = () => {
  let topRandomNum = Math.floor(Math.random() * 3 + 6);
  const pickedTopCandle = TOP_DUMMY.filter((it) => it.key === topRandomNum);

  let bottomRandomNum = Math.floor(Math.random() * 5 + 1);
  const pickedBottomCandle = BUTTOM_DUMMY.filter((it) => it.key === bottomRandomNum);

  return (
    <St.TotalContainer>
      <St.Container>
        <St.Candle
          src='../public/Group.png'
          $left={pickedBottomCandle[0].left}
          $bottom={pickedBottomCandle[0].bottom}
        />

        <St.Candle
          src='../public/Group.png'
          $left={pickedTopCandle[0].left}
          $bottom={pickedTopCandle[0].bottom}
        />

        <St.Cake src='../public/Group1.png' />
      </St.Container>
    </St.TotalContainer>
  );
};

const St = {
  TotalContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100dvh;
  `,

  Container: styled.div`
    position: relative;
    width: 23.4rem;
    height: 25.2rem;
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
};

export default Test;
