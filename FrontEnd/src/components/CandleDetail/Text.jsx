import styled from 'styled-components';
import { IcFace } from '../../assets';

const Text = () => {
  const TAG = '군대';
  const TITLE = '1번캔들';

  return (
    <St.Wrapper>
      <p>
        <span>{TAG}</span> 를 기념한 케이크에요
      </p>
      <p>
        <span>{TITLE}</span> 촛불
      </p>
      <IcFace />
    </St.Wrapper>
  );
};

export default Text;

const St = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;

    margin-top: 1.2rem;

    text-align: center;

    ${({ theme }) => theme.fonts.s2};
    color: ${({ theme }) => theme.colors.gray1};

    & span {
      color: ${({ theme }) => theme.colors.red};
    }
  `,
};
