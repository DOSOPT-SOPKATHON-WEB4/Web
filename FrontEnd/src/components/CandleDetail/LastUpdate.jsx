import styled from 'styled-components';

const LastUpdate = () => {
  const LAST = '2023.05.20';

  return <St.Wrapper>마지막 불붙이기 : {LAST}</St.Wrapper>;
};

export default LastUpdate;

const St = {
  Wrapper: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.c1};
  `,
};
