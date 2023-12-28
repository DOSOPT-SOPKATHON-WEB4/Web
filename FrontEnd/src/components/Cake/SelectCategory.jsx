import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SelectCategory = (props) => {
  const { title, setTitle, setCakeId, tag } = props;
  const navigator = useNavigate();

  const handleClickedBtn = (e) => {
    setTitle(e.target.innerHTML);
    setCakeId(e.target.id);
  };

  const handleClickAddBtn = () => {
    navigator('/add-tag');
  };

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
    align-items: flex-start;

    width: 100%;
    margin: 4.6rem 0.8rem 0 1.2rem;
    padding-bottom: 0.75rem;

    /* 가로 스크롤만 가능하게 */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  `,

  AddBtn: styled.button`
    flex-shrink: 0;

    width: 4rem;
    height: 4rem;
    margin-right: 0.8rem;

    border: none;
    border-radius: 3rem;

    background-color: ${({ theme }) => theme.colors.gray4};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};
  `,

  NameBtn: styled.button`
    flex-shrink: 0;

    width: 8rem;
    height: 4rem;
    margin-right: 0.8rem;

    border-radius: 10rem;
    border: 1px solid var(--sub-g5, #d7d7d7);

    ${({ theme }) => theme.fonts.s3};
    color: ${({ $isClicked, theme }) => ($isClicked ? theme.colors.white : theme.colors.gray2)};
    background-color: ${({ $isClicked, theme }) =>
      $isClicked ? theme.colors.red : theme.colors.white_80};
  `,
};

export default SelectCategory;
