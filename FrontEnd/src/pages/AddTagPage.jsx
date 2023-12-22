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
              <St.CarouselImg src='src/assets/image/cake_new1_blue.png'></St.CarouselImg>
            </div>
            <div>
              <St.CarouselImg src='src/assets/image/cake_new1_red.png'></St.CarouselImg>
            </div>
            <div>
              <St.CarouselImg src='src/assets/image/cake_new1_green.png'></St.CarouselImg>
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
    margin-left: 10.3rem;
    margin-top: 4rem;

    width: 17rem;
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
