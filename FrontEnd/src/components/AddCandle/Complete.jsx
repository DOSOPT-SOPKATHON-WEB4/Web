import styled from 'styled-components';
import {
  IcCandle1Complete,
  IcCandle2Complete,
  IcCandle3Complete,
  IcCandle4Complete,
  IcCandle5Complete,
  IcRound,
} from '../../assets';

const Complete = ({ title, cakeTitle, feel, body }) => {
  let candle;
  switch (feel) {
    case 'A':
      candle = <IcCandle1Complete key={0} />;
      break;
    case 'B':
      candle = <IcCandle2Complete key={1} />;
      break;
    case 'C':
      candle = <IcCandle3Complete key={2} />;
      break;
    case 'D':
      candle = <IcCandle4Complete key={3} />;
      break;
    case 'E':
      candle = <IcCandle5Complete key={4} />;
  }
  return (
    <St.Wrapper>
      <IcRound />
      {candle}
      <St.Text>{title}</St.Text>
    </St.Wrapper>
  );
};

export default Complete;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    height: 25.4rem;

    background-color: ${({ theme }) => theme.colors.red};

    border-radius: 2rem;

    & > svg:nth-child(2) {
      position: absolute;
      margin-bottom: 2rem;

      background-color: ${({ theme }) => theme.colors.gray6};
    }
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.s3};
    color: ${({ theme }) => theme.colors.white};
  `,
};
