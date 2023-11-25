import styled from 'styled-components';
import Header from '../components/Cake/Header';
import Cake from '../components/Cake/Cake';
import SelectCategory from '../components/Cake/SelectCategory';

const CakePage = () => {
  return (
    <St.CakePageContainer>
      <Header />
      <Cake />
      <SelectCategory />
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
