import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getCake from '../../api/getCake';

const SelectCategory = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, setTitle, setCakeId } = props;
  const [tag, setTag] = useState([]);
  const navigator = useNavigate();

  const handleClickedBtn = (e) => {
    setTitle(e.target.innerHTML);
    setCakeId(e.target.id);
  };

  const handleClickAddBtn = () => {
    navigator('/add-tag');
  };

  useEffect(() => {
    getCake(setTag);
  }, []);

  return (
    <St.BottomContainer>
      <St.AddBtn onClick={handleClickAddBtn}>+</St.AddBtn>
      {tag.map((it) => {
        return (
          <St.NameBtn
            key={it.cake_id}
            id={it.cake_id}
            $isClicked={title === it.cake_name}
            onClick={(e) => handleClickedBtn(e)}
          >
            {it.cake_name}
          </St.NameBtn>
        );
      })}
    </St.BottomContainer>
  );
};

const St = {
  BottomContainer: styled.div`
    display: flex;
    justify-content: left;
    align-items: end;

    height: 4rem;

    /* 가로 스크롤만 가능하게 */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    margin-top: 4.6rem;
    margin-left: 13.2rem;

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
    border: 1px solid var(--sub-g5, #d7d7d7);

    ${({ theme }) => theme.fonts.s3};
    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.white : theme.colors.gray2)};
    background-color: ${({ $isClicked, theme }) =>
      $isClicked ? theme.colors.red : theme.colors.white_80};
  `,
};

export default SelectCategory;
