import styled, { css } from 'styled-components';

const hasMantis = ({ mantis }) =>
  mantis &&
  css`
    color: #62c370;
  `;

const hasGapLeft = ({ gapLeft }) =>
  gapLeft &&
  css`
    padding-left: 16px;
  `;

const hasGapTop = ({ gapTop }) =>
  gapTop &&
  css`
    padding-top: 20px;
  `;

const hasGapBottom = ({ gapBottom }) =>
  gapBottom &&
  css`
    margin-bottom: 16px;
  `;

const Title = styled.h1`
  color: #fffcee;
  font-size: 20px;
  letter-spacing: 0.15;

  ${hasMantis};
  ${hasGapLeft};
  ${hasGapTop};
  ${hasGapBottom};
`;

export default Title;
