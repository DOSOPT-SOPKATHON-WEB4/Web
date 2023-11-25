import { useState } from 'react';
import styled from 'styled-components';

const PickTag = ({ cakeTitle, setCakeTitle }) => {
  const TAG = ['시원', 'SOPT', '승희', '다민', '가족', '뽀삐와 산책'];

  return (
    <St.Wrapper>
      {TAG.map((el, idx) => (
        <St.Card
          type='button'
          key={idx}
          onClick={() => {
            setCakeTitle(el);
          }}
          $isSelected={cakeTitle === el}
        >
          {el}
        </St.Card>
      ))}
    </St.Wrapper>
  );
};

export default PickTag;

const St = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    flex-wrap: wrap;
  `,
  Card: styled.button`
    width: 8rem;
    height: 8rem;

    border: none;
    border-radius: 1.2rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};

    background-color: ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.red : theme.colors.gray5};
  `,
};
