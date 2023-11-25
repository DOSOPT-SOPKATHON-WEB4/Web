import styled from 'styled-components';
import { IcBack, IcProgressGrey, IcProgressRed } from '../assets';
import { useState } from 'react';

const AddCandlePage = () => {
  // 스텝에 따라서 IcProgress 조건부 렌더링 시키기
  const [step, setStep] = useState(0);
  const progressArray = new Array(5).fill(false);

  return (
    <St.Wrapper>
      <div>
        <St.Header>
          <IcBack />
          <St.ProgressBar>
            {progressArray
              .map((_, idx) => step === idx)
              .map((val, idx) =>
                val ? <IcProgressRed key={idx} /> : <IcProgressGrey key={idx} />,
              )}
          </St.ProgressBar>
        </St.Header>
        <St.Title>기록하고 싶은 날짜를 입력해 주세요</St.Title>
      </div>

      <St.Button
        type='button'
        onClick={() => {
          setStep(step + 1);
        }}
      >
        다음
      </St.Button>
    </St.Wrapper>
  );
};

export default AddCandlePage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100vw;
    height: 100vh;
    padding: 0 2rem 2.6rem 2rem;
  `,
  Header: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 4.4rem;

    & > svg {
      position: absolute;
      top: 0;
      left: 0;

      margin-left: 1.2rem;
    }
  `,
  ProgressBar: styled.div`
    display: flex;
    gap: 1.4rem;
  `,
  Title: styled.h1`
    margin: 1.3rem 0 0 0.5rem;
    ${({ theme }) => theme.fonts.s2};
  `,
  Description: styled.p`
    margin: 0%.4 0 0 0.6rem;
    ${({ theme }) => theme.fonts.b2};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  Button: styled.button`
    padding: 1.6rem 0rem;
    width: 100%;

    border: 0.2rem solid ${({ theme }) => theme.colors.red};
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.white};

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.s3};
  `,
};
