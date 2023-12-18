import styled from 'styled-components';

const PickDate = () => {
  return (
    <St.Wrapper>
      <div>
        <St.Input type='number' />
        <St.UnderLine />
      </div>
      <St.Dot />
      <div>
        <St.Input type='number' />
        <St.UnderLine />
      </div>
      <St.Dot />
      <div>
        <St.Input type='number' />
        <St.UnderLine />
      </div>
    </St.Wrapper>
  );
};

export default PickDate;

const St = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  `,
  Input: styled.input`
    width: 7.3rem;

    border: none;

    text-align: center;
    ${({ theme }) => theme.fonts.s1};
    color: ${({ theme }) => theme.colors.gray2};

    appearance: none;

    &:focus {
      outline: none;
    }
  `,
  UnderLine: styled.div`
    width: 7.3rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.gray3};
  `,
  Dot: styled.div`
    width: 0.4rem;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-radius: 0.2rem;
  `,
};
