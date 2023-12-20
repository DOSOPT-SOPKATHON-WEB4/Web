import styled from 'styled-components';

const LastUpdate = ({ last }) => (
  <St.Wrapper>마지막 불붙이기 : {last.replaceAll('-', '.')}</St.Wrapper>
);

export default LastUpdate;

const St = {
  Wrapper: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.c1};
  `,
};
