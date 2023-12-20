import styled from 'styled-components';
import { IcFace, IcFaceA, IcFaceB, IcFaceC, IcFaceD, IcFaceE } from '../../assets';

const Text = ({ tag, title, feel }) => {
  const FEEL = {
    A: <IcFaceA />,
    B: <IcFaceB />,
    C: <IcFaceC />,
    D: <IcFaceD />,
    E: <IcFaceE />,
  };
  return (
    <St.Wrapper>
      <p>
        <span>{tag}</span> 를 기념한 케이크에요
      </p>
      <p>
        <span>{title}</span> 촛불
      </p>
      {FEEL[feel]}
    </St.Wrapper>
  );
};

export default Text;

const St = {
  Wrapper: styled.section`
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

    & > svg {
      height: 4.8rem;
      width: 4.8rem;
    }
  `,
};
