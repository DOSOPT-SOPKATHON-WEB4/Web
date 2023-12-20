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
      <Cake title={title} setTitle={setTitle} />
      <SelectCategory title={title} />
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
