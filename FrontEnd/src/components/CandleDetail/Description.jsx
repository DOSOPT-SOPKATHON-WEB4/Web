import styled from 'styled-components';

const Description = () => {
  return <St.Wrapper>Description</St.Wrapper>;
};

export default Description;

const St = {
  Wrapper: styled.section`
    width: 100%;
    height: 20.6rem;

    background-color: ${({ theme }) => theme.colors.gray6};
    border-radius: 2rem;

    ${({ theme }) => theme.shadow.shadow};
  `,
};
