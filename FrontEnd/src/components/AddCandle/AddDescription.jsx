import styled from 'styled-components';

const AddDescription = () => {
  return (
    <St.Wrapper>
      <St.Text placeholder='기념일에 어떤 일이 있었나요? ' />
    </St.Wrapper>
  );
};

export default AddDescription;

const St = {
  Wrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 2rem 0 4rem 0;
  `,
  Text: styled.textarea`
    width: 100%;
    height: 100%;

    padding: 3rem 2rem;

    background-color: ${({ theme }) => theme.colors.gray6};
    border: none;
    border-radius: 2rem;
    ${({ theme }) => theme.shadow.shadow};

    ${({ theme }) => theme.fonts.b1};
    color: ${({ theme }) => theme.colors.gray4};

    resize: none;
  `,
};
