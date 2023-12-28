import styled from 'styled-components';
import Header from '../components/Cake/Header';
import Cake from '../components/Cake/Cake';
import SelectCategory from '../components/Cake/SelectCategory';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getCake from '../api/getCake';

const CakePage = () => {
  const { state } = useLocation();

  const [tag, setTag] = useState([]);
  const [title, setTitle] = useState(state ? state.cakeTitle : '');
  const [cakeId, setCakeId] = useState(state ? state.clickedCakeId : 0);

  useEffect(() => {
    getCake(setTag);
  }, []);

  useEffect(() => {
    if (tag.length !== 0) {
      setTitle(tag[0].cake_name);
      setCakeId(tag[0].cake_id);
    }
  }, [tag]);

  return (
    <St.CakePageContainer>
      <Header title={title} />
      <Cake title={title} cakeId={cakeId} setTitle={setTitle} />
      <SelectCategory title={title} setTitle={setTitle} setCakeId={setCakeId} tag={tag} />
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
