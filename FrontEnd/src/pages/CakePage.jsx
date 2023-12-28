import styled from 'styled-components';
import Header from '../components/Cake/Header';
import Cake from '../components/Cake/Cake';
import SelectCategory from '../components/Cake/SelectCategory';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CakePage = () => {
  const { state } = useLocation();

  const [title, setTitle] = useState(state ? state.cakeTitle : '학교');
  const [cakeId, setCakeId] = useState(state ? state.clickedCakeId : 0);

  return (
    <St.CakePageContainer>
      <Header title={title} />
      <Cake title={title} cakeId={cakeId} setTitle={setTitle} />
      <SelectCategory title={title} setTitle={setTitle} setCakeId={setCakeId} />
    </St.CakePageContainer>
  );
};

const St = {
  CakePageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100dvh;
    padding-bottom: 3rem;

    overflow: hidden;
  `,
};

export default CakePage;
