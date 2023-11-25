import styled from 'styled-components';
import Header from '../components/Cake/Header';
import Cake from '../components/Cake/Cake';
import SelectCategory from '../components/Cake/SelectCategory';
import { useState } from 'react';

const CakePage = () => {
  const [title, setTitle] = useState('');
  return (
    <St.CakePageContainer>
      <Header title={title} />
      <Cake title={title} />
      <SelectCategory setTitle={setTitle} />
    </St.CakePageContainer>
  );
};

const St = {
  CakePageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100dvh;
  `,
};

export default CakePage;
