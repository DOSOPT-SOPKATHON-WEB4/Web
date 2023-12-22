import styled from 'styled-components';
import Header from '../components/Cake/Header';
import Cake from '../components/Cake/Cake';
import SelectCategory from '../components/Cake/SelectCategory';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CakePage = () => {
  const { state } = useLocation();
  const { clickedCakeId, cakeTitle } = state;

  const [title, setTitle] = useState(cakeTitle);
  const [cakeId, setCakeId] = useState(clickedCakeId);

  return (
    <St.CakePageContainer>
      <Header title={title} />
      <Cake title={title} cakeId={cakeId} />
      <SelectCategory title={title} setTitle={setTitle} setCakeId={setCakeId} />
    </St.CakePageContainer>
  );
};

const St = {
  CakePageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100dvh;

    overflow-y: hidden;
  `,
};

export default CakePage;
