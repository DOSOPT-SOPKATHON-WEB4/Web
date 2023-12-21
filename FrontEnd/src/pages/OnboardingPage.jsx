import React from 'react';
import styled from 'styled-components';
import { CakeFloor, CandleOn3, Logo } from '../assets';
import { useNavigate } from 'react-router-dom';

const OnboardingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/main');
  };

  return (
    <St.MainContainer onClick={handleStart}>
      <St.LogoContainer>
        <Logo />
      </St.LogoContainer>
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

    cursor: pointer;
  `,

  LogoContainer: styled.div`
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

export default OnboardingPage;
