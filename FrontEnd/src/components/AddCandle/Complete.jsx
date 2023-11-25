import styled from 'styled-components';
import { IcComplete } from '../../assets';

const Complete = ({ title }) => {
  return (
    <St.Wrapper>
      <IcComplete />
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

    width: 33.5rem;
    height: 25.4rem;

    background-color: ${({ theme }) => theme.colors.red};

    border-radius: 2rem;
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.s3};
    color: ${({ theme }) => theme.colors.white};
  `,
};
