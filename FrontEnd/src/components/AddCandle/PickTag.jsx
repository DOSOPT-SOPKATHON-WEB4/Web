import styled from 'styled-components';
import getCake from '../../api/getCake';
import { useEffect, useState } from 'react';

const PickTag = ({ cakeTitle, setCakeTitle }) => {
  const [tag, setTag] = useState([]);
  useEffect(() => {
    getCake(setTag);
  }, []);
  return (
    <St.Wrapper>
      {tag.map((el, idx) => (
        <St.Card
          type='button'
          key={idx}
          onClick={() => {
            setCakeTitle(el.cake_name);
          }}
          $isSelected={cakeTitle === el.cake_name}
        >
          {el.cake_name}
        </St.Card>
      ))}
    </St.Wrapper>
  );
};

export default PickTag;

const St = {
  Wrapper: styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-self: center;
    gap: 1.2rem;
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

    ${({ theme }) => theme.shadow.shadow};
  `,
};
