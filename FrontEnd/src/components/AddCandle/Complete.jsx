import styled from 'styled-components';

const Complete = () => {
  return <St.Wrapper></St.Wrapper>;
};

export default Complete;

const St = {
  Wrapper: styled.section`
    width: 33.5rem;
    height: 25.4rem;

    background-color: ${({ theme }) => theme.colors.red};

    border-radius: 2rem;
  `,
};
