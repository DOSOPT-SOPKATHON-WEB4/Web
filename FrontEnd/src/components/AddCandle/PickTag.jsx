import styled from 'styled-components';
import getCake from '../../api/getCake';
import { useEffect, useState } from 'react';

const PickTag = ({ cakeTitle, setCakeTitle, setCakeId }) => {
  const [tag, setTag] = useState([]);
  useEffect(() => {
    getCake(setTag);
  }, []);
  return (
    <St.Wrapper>
      {tag
      // 기존 코드대로 하면, 이미 추가해둔 태그가 제대로 화면에 띄워지지 않는 문제 발생 -> filter 조건 수정해줌.
        .filter((el) => el.candle_count < 8)
        .map((el, idx) => (
          <St.Card
            type='button'
            key={idx}
            onClick={() => {
              setCakeTitle(el.cake_name);
              setCakeId(el.cake_id);
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
    display: flex;
    justify-content: center;
    align-self: center;
    gap: 1.2rem;
    flex-wrap: wrap;

    padding: 0 2rem;
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
