import styled from 'styled-components';
import { IcBack } from '../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateCakePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTitle(location.state.title);
    setIndex(location.state.index);
  }, []);

  return (
    <St.Wrapper>
      <St.BackBox onClick={() => navigate(-1)}>
        <IcBack />
      </St.BackBox>
      <div>
        <St.Title>새로운 케이크가 추가되었어요</St.Title>
        <St.Description>이제, 촛불을 꽂아 추억을 만들어 보세요 </St.Description>
      </div>

      <St.CakeImg>
        {index === 0 ? (
          <img src='src/assets/image/cake_blue.png' />
        ) : index === 1 ? (
          <img src='src/assets/image/cake_red.png' />
        ) : (
          <img src='src/assets/image/cake_green.png' />
        )}
        <h2>{title}</h2>
      </St.CakeImg>
      <St.CakeButton type='button' onClick={() => navigate('/cake')}>
        케이크 보러가기
      </St.CakeButton>
    </St.Wrapper>
  );
};

export default CreateCakePage;

const St = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2.6rem 2rem;

    width: 100%;
    height: 100vh;
  `,
  BackBox: styled.div`
    position: fixed;
    top: 0;
    left: 1.2rem;
  `,
  Title: styled.header`
    margin-top: 3rem;
    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  Description: styled.p`
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.b2};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  CakeImg: styled.div`
    position: relative;

    & > h2 {
      position: absolute;
      bottom: 2.5rem;

      width: 100%;

      text-align: center;
      ${({ theme }) => theme.fonts.s3};
      color: ${({ theme }) => theme.colors.white};
    }

    & > img {
      width: 100%;
    }
  `,
  CakeButton: styled.button`
    width: 100%;
    padding: 1.6rem;

    border-color: ${({ theme }) => theme.colors.red};
    border-radius: 10rem;

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};

    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.shadow.shadow};
  `,
};
