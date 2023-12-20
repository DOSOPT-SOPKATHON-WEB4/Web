import styled from 'styled-components';

const Buttons = () => {
  return (
    <St.Wrapper>
      <Btn1 type='button'>촛불에 다시 불 붙이기</Btn1>
      <div>
        <Btn2 type='button'>이미지 저장하기</Btn2>
        <Btn3 type='button'>홈으로 가기</Btn3>
      </div>
    </St.Wrapper>
  );
};

export default Buttons;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;

    & > div {
      display: flex;
      gap: 0.7rem;
    }
  `,
  Btn: styled.button`
    padding: 1.6rem 0rem;
    width: 100%;

    ${({ theme }) => theme.fonts.s3};
    border-radius: 10rem;
    ${({ theme }) => theme.shadow.shadow};
  `,
};

const Btn1 = styled(St.Btn)`
  border: 0.2rem solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
`;
const Btn2 = styled(St.Btn)`
  border: none;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;
const Btn3 = styled(St.Btn)`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.red};
`;
