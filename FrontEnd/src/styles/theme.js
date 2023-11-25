import { css } from 'styled-components';

const colors = {
  purple: '#c274ff',
  pink: '#FF748D',
  yellow: '#FBE738',
  blue: '#558EF0',
  green: '#26B84F',
  red: '#FF5B4F',
  beige: '#F5E7A1',
  black: '#191919',
  white: '#FFFFFF',
  gray1: '#3A3A3A',
  gray2: '#555555',
  gray3: '#6F6F6F',
  gray4: '#A5A5A5',
  gray5: '#D7D7D7',
  gray6: '#F4F4F4',
};
const fonts = {
  H1: css`
    font-family: 'Pretendard Variable';
    font-size: 3.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.085rem;
  `,
  H2: css`
    font-family: 'Pretendard Variable';
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.056rem;
  `,
  s1: css`
    font-family: 'Pretendard Variable';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  s2: css`
    font-family: 'Pretendard Variable';
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.088rem;
  `,
  s3: css`
    font-family: 'Pretendard Variable';
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.08rem;
  `,
  B1: css`
    font-family: 'Pretendard Variable';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.032rem;
  `,
  B2: css`
    font-family: 'Pretendard Variable';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  c1: css`
    font-family: 'Pretendard Variable';
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.052rem;
  `,
  c2: css`
    font-family: 'Pretendard Variable';
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
};
const theme = {
  colors,
  fonts,
};
export default theme;
