import styled from 'styled-components';
import { IcBack, IcProgressGrey, IcProgressRed } from '../assets';
import { TITLE, DESCRIPTION } from '../constants/addCandle';
import AddDescription from '../components/AddCandle/AddDescription';
import PickDate from '../components/AddCandle/PickDate';
import PickTag from '../components/AddCandle/PickTag';
import AddTitle from '../components/AddCandle/AddTitle';
import PickCandle from '../components/AddCandle/PickCandle';
import Complete from '../components/AddCandle/Complete';
import { useState } from 'react';
import postCandle from '../api/postCandle';

const AddCandlePage = () => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState('');
  const [cakeTitle, setCakeTitle] = useState('');
  const [feel, setFeel] = useState('');
  const [body, setBody] = useState('');

  const info = {
    title: title,
    date: '2023-12-18',
    cake_title: cakeTitle,
    feel: feel,
    body: body,
  };

  const progressArray = new Array(5).fill(false);
  const childrenArray = [
    <PickDate key={0} />,
    <PickTag key={1} cakeTitle={cakeTitle} setCakeTitle={setCakeTitle} />,
    <AddTitle key={2} setTitle={setTitle} />,
    <PickCandle key={3} setFeel={setFeel} />,
    <AddDescription key={4} setBody={setBody} />,
  ];

  return (
    <St.Wrapper>
      <div>
        <St.Header>
          <IcBack onClick={() => setStep(step - 1)} />
          {step !== 5 && (
            <St.ProgressBar>
              {progressArray
                .map((_, idx) => step === idx)
                .map((val, idx) =>
                  val ? <IcProgressRed key={idx} /> : <IcProgressGrey key={idx} />,
                )}
            </St.ProgressBar>
          )}
        </St.Header>
        <St.Title>{TITLE[step]}</St.Title>
        <St.Description>{DESCRIPTION[step]}</St.Description>
      </div>
      {step === 5 ? (
        <Complete title={title} cakeTitle={cakeTitle} feel={feel} body={body} />
      ) : (
        childrenArray[step % 5]
      )}
      {step === 4 ? (
        <St.Button
          type='button'
          onClick={() => {
            postCandle(info);
            setStep((step + 1) % 6);
          }}
        >
          완료
        </St.Button>
      ) : (
        <St.Button
          type='button'
          onClick={() => {
            setStep((step + 1) % 6);
          }}
        >
          {step === 5 ? '케이크 보러가기' : '다음'}
        </St.Button>
      )}
    </St.Wrapper>
  );
};

export default AddCandlePage;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

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
    margin: 0.4rem 0 0 0.6rem;
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
