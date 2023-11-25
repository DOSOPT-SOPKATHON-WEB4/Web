import styled from 'styled-components';

const PickTag = () => {
  const TAG = ['시원', 'SOPT', '승희'];
  return (
    <St.Wrapper>
      <St.PickCard type='button'>시원</St.PickCard>
      <St.GreyCard type='button'>SOPT</St.GreyCard>
    </St.Wrapper>
  );
};

export default PickTag;

const St = {
  Wrapper: styled.section``,
  PickCard: styled.button`
    width: 8rem;
    height: 8rem;

    background-color: ${({ theme }) => theme.colors.red};
    border: none;
    border-radius: 1.2rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};
  `,
  GreyCard: styled.button`
    width: 8rem;
    height: 8rem;

    background-color: ${({ theme }) => theme.colors.gray5};
    border: none;
    border-radius: 1.2rem;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.s3};
  `,
};
