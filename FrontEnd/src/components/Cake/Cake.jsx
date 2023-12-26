import React from 'react';
import { CANDLE_POSITION } from '../../constants/constant';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import getCakeAndCandle from '../../api/getCakeAndCandle';
import { IcTalk } from '../../assets';

const Cake = (props) => {
  const [candle, setCandle] = useState([]);
  const [isBurned, setIsBurned] = useState(false);
  const { title, cakeId } = props;
  let checkBurnedCandle = [];

  const setCandleColor = (feel, dday) => {
    dday >= 365 ? checkBurnedCandle.push(1) : checkBurnedCandle.push(0);

    switch (feel) {
      case 'A':
        return dday >= 365
          ? '/src/assets/image/candle_off_A.png'
          : '/src/assets/image/candle_on_A.png';
      case 'B':
        return dday >= 365
          ? '/src/assets/image/candle_off_B.png'
          : '/src/assets/image/candle_on_B.png';
      case 'C':
        return dday >= 365
          ? '/src/assets/image/candle_off_C.png'
          : '/src/assets/image/candle_on_C.png';
      case 'D':
        return dday >= 365
          ? '/src/assets/image/candle_off_D.png'
          : '/src/assets/image/candle_on_D.png';
      case 'E':
        return dday >= 365
          ? '/src/assets/image/candle_off_E.png'
          : '/src/assets/image/candle_on_E.png';
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
    checkBurnedCandle.includes(1) ? setIsBurned(true) : setIsBurned(false);
  }, [checkBurnedCandle]);

  useEffect(() => {
    cakeId !== 0 && getCakeAndCandle(cakeId, setCandle);

  }, [title]);

  return (
    <St.Container>
      {candle.map((it, idx) => {
        return (
          <St.CandleWrapper key={it.id}>
            {it.dday >= 365 && (
              <>
                <St.IconWrapper
                  $left={CANDLE_POSITION[idx + 1].left - 2.2}
                  $bottom={CANDLE_POSITION[idx + 1].bottom + 7.8}
                >
                  <IcTalk />
                </St.IconWrapper>

                <St.Message
                  $left={CANDLE_POSITION[idx + 1].left - 1}
                  $bottom={CANDLE_POSITION[idx + 1].bottom + 9.1}
                >
                  D+ {it.dday}
                </St.Message>
              </>
            )}
            <St.Candle
              src={setCandleColor(it.feel, it.dday)}
              $left={CANDLE_POSITION[idx + 1].left}
              $bottom={CANDLE_POSITION[idx + 1].bottom}
            />
          </St.CandleWrapper>
        );
      })}
      <St.Cake src={setCakeColor(cakeId)} />
      {isBurned && <St.Toast>사라져가는 촛불이 있어요, 촛불을 눌러서 다시 살려주세요!</St.Toast>}
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

  CandleWrapper: styled.div`
    display: flex;
    flex-direction: column;

    gap: 1rem;
  `,

  IconWrapper: styled.div`
    position: absolute;
    bottom: ${({ $bottom }) => css`
      ${$bottom}rem
    `};
    left: ${({ $left }) => css`
      ${$left}rem
    `};
  `,

  Message: styled.p`
    position: absolute;
    bottom: ${({ $bottom }) => css`
      ${$bottom}rem
    `};
    left: ${({ $left }) => css`
      ${$left}rem
    `};

    ${({ theme }) => theme.fonts.c1};
    color: ${({ theme }) => theme.colors.white};
  `,

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
