import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DUMMY = ['시원', 'SOPT', '승희', '다민', '뽀삐'];

const SelectCategory = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  const [, setClickedValue] = useState('');
  const navigator = useNavigate();

  const handleClickedBtn = (e) => {
    setClickedValue(e.target.innerHTML);
  };

  const handleClickAddBtn = () => {
    navigator('/add-tag');
  };

  return (
    <St.BottomContainer>
      <St.AddBtn onClick={handleClickAddBtn}>+</St.AddBtn>
      {DUMMY.map((it, idx) => {
        return (
          <St.NameBtn key={idx} $isClicked={it === title} onClick={(e) => handleClickedBtn(e)}>
            {it}
          </St.NameBtn>
        );
      })}
    </St.BottomContainer>
  );
};

const St = {
  BottomContainer: styled.div`
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;

    /* 가로 스크롤만 가능하게 */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    margin-left: 1.2rem;
    margin-bottom: 3.1rem;

    gap: 0.8rem;
  `,
  AddBtn: styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 3rem;
    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};
  `,

  NameBtn: styled.button`
    width: 8rem;
    height: 4rem;
    border-radius: 10rem;
    border: 1px solid var(--sub-g-5, #d7d7d7);
    ${({ theme }) => theme.fonts.s3};

    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.white : theme.colors.gray2)};
    background-color: ${({ $isClicked, theme }) =>
      $isClicked ? theme.colors.red : theme.colors.white};
  `,
};

export default SelectCategory;
