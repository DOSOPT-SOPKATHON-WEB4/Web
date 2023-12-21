import styled from 'styled-components';
import { IcBack } from '../assets';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const CreateCakePage = () => {
  const params = useParams();
  const [createTitle, setCreateTitle] = useState('');

  useEffect(() => {
    const response = async () => {
      try {
        const information = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/cake/${params.createTitle}`,
        );
        setCreateTitle(information.data.title);
      } catch (e) {
        console.log(e);
      }
    };
    response();
  }, [params.createTitle]);

  return (
    <St.AddTag>
      <St.BackBox>
        <IcBack />
      </St.BackBox>
      <St.AddTagContainer>새로운 케이크가 추가되었어요</St.AddTagContainer>
      <St.AddTagWrapper>이제, 촛불을 꽂아 추억을 만들어 보세요 </St.AddTagWrapper>

      <St.CakeImg src='src/assets/image/create_cake.png'></St.CakeImg>
      <section>{createTitle}</section>
      <St.CakeButton type='button'>케이크 보러가기</St.CakeButton>
    </St.AddTag>
  );
};

export default CreateCakePage;

const St = {
  AddTag: styled.main`
    width: 100vw;
  `,

  BackBox: styled.div`
    margin-left: 1.2rem;
  `,
  AddTagContainer: styled.header`
    margin-top: 1.2rem;
    margin-left: 2rem;
    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  AddTagWrapper: styled.p`
    margin-top: 0.8rem;
    margin-left: 2.2rem;
    ${({ theme }) => theme.fonts.b2};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  CakeImg: styled.img`
    width: 33.5rem;
    height: 25.4rem;
    margin-left: 2rem;
    margin-top: 5.6rem;
  `,
  CakeButton: styled.button`
    width: 33.4rem;
    height: 5.6rem;
    margin-left: 2rem;
    margin-top: 12.4rem;
    border-color: ${({ theme }) => theme.colors.red};
    border-radius: 10rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10rem;
    ${({ theme }) => theme.shadow.shadow};
  `,
};
