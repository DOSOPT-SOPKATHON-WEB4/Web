import React from 'react';
import Date from '../components/CandleDetail/Date';
import styled from 'styled-components';
import Text from '../components/CandleDetail/Text';

const CandleDetailPage = () => {
  return (
    <St.Wrapper>
      <Date />
      <Text />
    </St.Wrapper>
  );
};

export default CandleDetailPage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;

    align-items: center;
  `,
};
