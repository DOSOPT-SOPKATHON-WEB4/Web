import styled from 'styled-components';
import { IcMainLogo } from '../assets';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <St.Wrapper>
      <IcMainLogo />
      <St.ButtonContainer>
        <St.Button1 type='button' onClick={() => navigate('/add-candle')}>
          새로운 촛불 켜기
        </St.Button1>
        <St.Button2 type='button'>케이크 보러 가기</St.Button2>
      </St.ButtonContainer>
    </St.Wrapper>
  );
};

export default MainPage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100vh;
    padding: 5.4rem 2rem 2.6rem 2rem;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
  `,
  Button1: styled.button`
    padding: 1.6rem 0rem;
    width: 100%;

    border: none;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.red};

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};

    cursor: pointer;
  `,
  Button2: styled.button`
    padding: 1.6rem 0rem;
    width: 100%;

    border: 0.2rem solid ${({ theme }) => theme.colors.red};
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};

    cursor: pointer;
  `,
};
