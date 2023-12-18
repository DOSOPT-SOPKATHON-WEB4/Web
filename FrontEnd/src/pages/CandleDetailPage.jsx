import React from 'react';
import Date from '../components/CandleDetail/Date';
import styled from 'styled-components';

const CandleDetailPage = () => {
  return (
    <St.Wrapper>
      <Date />
    </St.Wrapper>
  );
};

export default CandleDetailPage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
  `,
};
