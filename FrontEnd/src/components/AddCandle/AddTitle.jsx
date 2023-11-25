import styled from 'styled-components';

const AddTitle = () => {
  return (
    <St.Wrapper>
      <img src='/src/assets/image/img_title.png' />
      <St.Input type='text' />
    </St.Wrapper>
  );
};

export default AddTitle;
const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      width: 17rem;
      height: 17rem;
    }
  `,
  Input: styled.input`
    width: 17rem;
    padding-bottom: 0.2rem;
    margin-top: 2.1rem;

    border: 0;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray3};

    text-align: center;
    ${({ theme }) => theme.fonts.s3};
    color: ${({ theme }) => theme.colors.gray3};

    &:focus {
      outline: none;
    }
  `,
};
