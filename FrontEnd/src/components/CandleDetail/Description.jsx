import styled from 'styled-components';

const Description = () => {
  return <St.Wrapper>Description</St.Wrapper>;
};

export default Description;

const St = {
  Wrapper: styled.section`
    text-align: center;

    width: 100%;
    height: 100%;

    padding: 1.6rem 2rem;

    background-color: ${({ theme }) => theme.colors.gray6};
    border-radius: 2rem;

    ${({ theme }) => theme.fonts.b1};
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.shadow.shadow};
  `,
};
