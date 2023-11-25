import styled from 'styled-components';
import { IcBack } from '../assets';

const AddCandlePage = () => {
  return (
    <div>
      <St.Header>
        <IcBack />
      </St.Header>
    </div>
  );
};

export default AddCandlePage;

const St = {
  Header: styled.header`
    border: 1px solid red;

    padding-left: 1.2rem;
  `,
};
