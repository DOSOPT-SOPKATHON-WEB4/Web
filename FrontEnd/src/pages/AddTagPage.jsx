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
    afterChange: (current) => {
      setSlideIndex(current);
    },
  };
  const navigate = useNavigate();

  const handleAddTag = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/cake`, {
        title: slideTitle,
        theme: slideIndex === 0 ? 'BLUE' : slideIndex === 1 ? 'RED' : 'GREEN',
      });
      response && navigate('/add-cake', { state: { title: slideTitle, index: slideIndex } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <St.Wrapper>
        <St.Back
          onClick={() => {
            navigate(-1);
          }}
        >
          <IcBack />
        </St.Back>
        <St.AddCakeContainer>
          <St.Text>
            <St.Title>케이크 추가하기</St.Title>
            <St.Description>케이크 이름을 입력해주세요</St.Description>
          </St.Text>

          <St.TagContainerInput
            value={slideTitle}
            onChange={(e) => {
              setSlideTitle(e.target.value);
            }}
            placeholder='입력해주세요'
          />
        </St.AddCakeContainer>
        <St.SelectThemeContainer>
          <St.ThemeTitle>케이크 테마를 선택해주세요</St.ThemeTitle>

          <St.CarouselBox {...settings}>
            <div>
              {window.innerHeight < 800 ? (
                <St.CarouselImg src='src/assets/image/cake_new1_se.png'></St.CarouselImg>
              ) : (
                <St.CarouselImg src='src/assets/image/cake_new_blue.png'></St.CarouselImg>
              )}
            </div>
            <div>
              {window.innerHeight < 800 ? (
                <St.CarouselImg src='src/assets/image/cake_new1_se2.png'></St.CarouselImg>
              ) : (
                <St.CarouselImg src='src/assets/image/cake_new_red.png'></St.CarouselImg>
              )}
            </div>
            <div>
              {window.innerHeight < 800 ? (
                <St.CarouselImg src='src/assets/image/cake_new1_se3.png'></St.CarouselImg>
              ) : (
                <St.CarouselImg src='src/assets/image/cake_new_green.png'></St.CarouselImg>
              )}
            </div>
          </St.CarouselBox>
        </St.SelectThemeContainer>

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
  Back: styled.div`
    position: fixed;
    top: 0;
    left: 1.2rem;
  `,
  AddCakeContainer: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-bottom: 6rem;
  `,
  Text: styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    margin-top: 5.6rem;
  `,
  Title: styled.p`
    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  Description: styled.p`
    ${({ theme }) => theme.fonts.b2};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  TagContainerInput: styled.input`
    height: 3.1rem;
    margin: 4rem 8.3rem;

    ${({ theme }) => theme.fonts.s3};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray3};
    border: none;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray3};
  `,
  SelectThemeContainer: styled.section`
    display: flex;
    flex-direction: column;

    height: 100%;
  `,
  ThemeTitle: styled.p`
    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  CarouselBox: styled(Slider)`
    height: 100%;
    margin-top: 2.6rem;

    .slick-slide {
      display: flex;
      justify-content: center;
      height: min-content;
    }
    .slick-dots {
      position: static;
      margin-top: 1.6rem;
    }
    .slick-dots li button:before {
      color: ${({ theme }) => theme.colors.gray5};
      opacity: 1;

      font-size: 1rem;
    }

    .slick-dots li.slick-active button:before {
      color: ${({ theme }) => theme.colors.red};
      opacity: 1;
    }
  `,
  CarouselImg: styled.img`
    width: 30rem;

    @media screen and (max-height: 700px) {
      width: 22rem;
    }
  `,

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
