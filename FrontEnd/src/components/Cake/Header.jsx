import React from 'react';
import styled from 'styled-components';
import { IcBack } from '../../assets';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;

  return (
    <St.Header>
      <IcBack />
      <St.HeaderContents>
        <St.Title>{title}</St.Title>
        <St.Description>을(를) 기념한 케이크에요</St.Description>
      </St.HeaderContents>
    </St.Header>
  );
};

const St = {
  Header: styled.header`
    display: flex;
    align-items: center;
    
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1.2rem;
  `,

  HeaderContents: styled.div`
    display: flex;
    justify-content: center;

    margin-top: 0.9rem;

    gap: 1rem;

    ${({ theme }) => theme.fonts.s2};
  `,

  Title: styled.p`
    color: ${({ theme }) => theme.colors.red};
  `,

  Description: styled.p`
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default Header;
