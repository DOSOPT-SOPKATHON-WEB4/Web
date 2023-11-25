import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IcBack } from '../assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddTagPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideTitle, setSlideTitle] = useState('');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      return setSlideIndex(current);
    },
  };
  const navigate = useNavigate();

  console.log(slideIndex);
  const handleAddTag = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/cake`, {
        title: slideTitle,
        theme: slideIndex === 0 ? 'BLUE' : slideIndex === 1 ? 'RED' : 'GREEN',
      });
      response && navigate('/add-cake');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <St.AddTag>
        <St.BackBox>
          <IcBack />
        </St.BackBox>
        <St.AddTagContainer>케이크 추가하기</St.AddTagContainer>
        <St.AddTagWrapper>케이크 이름을 입력해주세요</St.AddTagWrapper>
        <St.AddTagLayout>
          <St.TagContainerInput
            value={slideTitle}
            onChange={(e) => {
              setSlideTitle(e.target.value);
            }}
            placeholder='뽀삐케이크'
          />
          <St.AddTagBox></St.AddTagBox>
        </St.AddTagLayout>
        <St.SelectTheme>케이크 테마를 선택해주세요</St.SelectTheme>

        <St.CarouselBox {...settings}>
          <div>
            <St.CarouselImg src='src/assets/image/cake_new1_blue.png'></St.CarouselImg>
          </div>
          <div>
            <St.CarouselImg src='src/assets/image/cake_new1_red.png'></St.CarouselImg>
          </div>
          <div>
            <St.CarouselImg src='src/assets/image/cake_new1_green.png'></St.CarouselImg>
          </div>
        </St.CarouselBox>

        <St.Button type='button' onClick={handleAddTag}>
          다음
        </St.Button>
      </St.AddTag>
    </>
  );
};

export default AddTagPage;

const St = {
  AddTag: styled.main``,

  BackBox: styled.div`
    margin-top: 1.3rem;
    margin-left: 1.2rem;
  `,
  AddTagContainer: styled.header`
    margin-top: 2.5rem;
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

  AddTagLayout: styled.div`
    width: 17rem;
    height: 3.1rem;
    margin-left: 10.3rem;
    margin-top: 4rem;
  `,

  AddTagBox: styled.div`
    margin-top: 0.5rem;
    height: 0.2rem;
    width: 17rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: 0.9rem;
  `,
  TagContainerInput: styled.input`
    width: 17rem;
    ${({ theme }) => theme.fonts.s3};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};
    border: none;
    &::placeholder= {
    }
  `,
  SelectTheme: styled.p`
    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};
    margin-top: 6rem;
    margin-left: 2rem;
  `,
  CarouselBox: styled(Slider)`
    .slick-list {
      margin: 0 auto;
    }
    .slick-dots {
      bottom: -1.6rem;
    }
  `,
  CarouselImg: styled.img`
    margin-top: 1.5rem;
    margin-left: 7.3rem;
    width: 22.9rem;
    height: 20rem;
  `,
  CarouselContainer: styled.div``,

  Button: styled.button`
    margin-left: 2rem;
    margin-top: 3.7rem;
    padding: 2rem 11.7rem;
    width: 33.5rem;
    height: 5.6rem;
    text-align: center;
    border: none;
    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10rem;
    ${({ theme }) => theme.shadow.shadow};
  `,
};
