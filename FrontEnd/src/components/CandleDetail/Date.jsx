import styled from 'styled-components';

const Date = () => {
  const DATE = '2023-09-20';
  const dates = DATE.split('-');

  return (
    <St.Wrapper>
      {dates.map((dateText, idx) => (
        <>
          <div key={idx}>
            <St.Text>{dateText}</St.Text>
            <St.UnderLine />
          </div>
          {idx !== dateText.length && <St.Dot />}
        </>
      ))}
    </St.Wrapper>
  );
};

export default Date;

const St = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  `,
  Text: styled.p`
    width: 100%;
    margin: 0.5rem 0rem;

    text-align: center;
    ${({ theme }) => theme.fonts.s1};
    color: ${({ theme }) => theme.colors.gray2};
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
