import React from 'react';
import styled from 'styled-components';
import { IcBack } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <St.Header>
      <IcBack onClick={() => navigate('/main')} />
      <St.HeaderContents>
        {title === '' ? (
          <St.Description>케이크를 선택해주세요</St.Description>
        ) : (
          <>
            <St.Title>{title}</St.Title>
            <St.Description>을(를) 기념한 케이크에요</St.Description>
          </>
        )}
      </St.HeaderContents>
    </St.Header>
  );
};

const St = {
  Header: styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;
    margin-left: 1.2rem;

    gap: 1rem;
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
