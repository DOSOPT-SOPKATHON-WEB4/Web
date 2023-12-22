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
    beforeChange: (current) => {
      return setSlideIndex(current);
    },
  };
  const navigate = useNavigate();

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
      <St.Wrapper>
        <St.BackBox
          onClick={() => {
            navigate(-1);
          }}
        >
          <IcBack />
        </St.BackBox>
        <St.AddTagContainer>케이크 추가하기</St.AddTagContainer>
        <St.AddTagWrapper>케이크 이름을 입력해주세요</St.AddTagWrapper>
        <St.TagContainerInput
          value={slideTitle}
          onChange={(e) => {
            setSlideTitle(e.target.value);
          }}
          placeholder='입력해주세요'
        />
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
      </St.Wrapper>
    </>
  );
};

export default AddTagPage;

const St = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    height: 100vh;
    padding: 0 2rem 2.6rem 2rem;
  `,

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
  `,
  TagContainerInput: styled.input`
    height: 3.1rem;
    margin-left: 10.3rem;
    margin-top: 4rem;

    width: 17rem;
    ${({ theme }) => theme.fonts.s3};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};
    border: none;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray3};
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
    text-align: center;

    padding: 1.6rem 0rem;
    width: 100%;

    border: none;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};

    ${({ theme }) => theme.shadow.shadow};
  `,
};
