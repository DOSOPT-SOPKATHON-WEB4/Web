import styled from 'styled-components';
import { IcBack, IcProgressGrey, IcProgressRed } from '../assets';

const AddCandlePage = () => {
  // 스텝에 따라서 IcProgress 조건부 렌더링 시키기
  return (
    <St.Wrapper>
      <St.Header>
        <IcBack />
        <St.ProgressBar>
          <IcProgressRed />
          <IcProgressGrey />
          <IcProgressGrey />
          <IcProgressGrey />
          <IcProgressGrey />
        </St.ProgressBar>
      </St.Header>
    </St.Wrapper>
  );
};

export default AddCandlePage;

const St = {
  Wrapper: styled.section``,
  Header: styled.header`
    border: 1px solid red;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 4.4rem;

    & > svg {
      position: absolute;
      top: 0;
      left: 0;

      margin-left: 1.2rem;
    }
  `,
  ProgressBar: styled.div`
    display: flex;
    gap: 1.4rem;
  `,
};
