import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidersToShow: 1,
  slidersToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  draggable: true,
};

const AddTagPage = () => {
  return (
    <>
      <St.AddTag>태그 추가</St.AddTag>
      <St.TagContainer>
        태그를 입력해주세요
        <St.TagContainerInput placeholder='태그 이름 입력' />
      </St.TagContainer>
      <St.CarouselContainer>
        <St.CarouselBox {...settings}>
          <h2> Single Item</h2>

          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </St.CarouselBox>
      </St.CarouselContainer>
    </>
  );
};

export default AddTagPage;

const St = {
  AddTag: styled.header``,
  TagContainer: styled.section``,
  TagContainerInput: styled.input`
    &::placeholder {
    }
  `,
  CarouselBox: styled(Slider)`
    .carousel-item {
      width: 50%;
      height: 50%;
    }
  `,
  CarouselContainer: styled.div`
    width: 60rem;
  `,
};
