import React from 'react';
import styled from 'styled-components';
import { CakeFloor, CandleOn3, Logo } from '../../assets';

const Main1 = () => {
  return (
    <St.MainContainer>
      <St.LogoContianer>
        <Logo />
      </St.LogoContianer>
      <St.IconContainer>
        <St.CandleContainer>
          <CandleOn3 />
        </St.CandleContainer>

        <CakeFloor />
      </St.IconContainer>
    </St.MainContainer>
  );
};

const St = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100dvh;

    background-color: ${({ theme }) => theme.colors.red};
  `,

  LogoContianer: styled.div`
    margin-top: 5.4rem;
  `,

  IconContainer: styled.div`
    position: relative;
    margin-top: 15.84rem;
  `,

  CandleContainer: styled.div`
    position: absolute;
    top: -7.5rem;
    left: 12rem;
  `,
};

export default Main1;
