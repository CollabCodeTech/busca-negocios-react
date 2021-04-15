import styled, { css } from 'styled-components';

const hasMantis = ({ mantis }) =>
  mantis &&
  css`
    color: #62c370;
  `;

const Title = styled.h1`
  color: #fffcee;
  font-size: 20px;
  letter-spacing: 0.15;

  ${hasMantis}
`;

export default Title;
