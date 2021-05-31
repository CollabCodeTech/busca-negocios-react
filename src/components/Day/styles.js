import styled, { css } from 'styled-components';

const hasBorder = ({ noBorder }) =>
  !noBorder &&
  css`
    border-bottom: 1px dashed #fffcee;
  `;

const fontStyle = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Close = styled.p`
  ${fontStyle};
`;

export const Item = styled.li``;

export const Hours = styled.ol`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
`;

export const Title = styled.h3`
  ${fontStyle};
`;

export const Wrapper = styled.article`
  display: flex;
  min-width: 288px;
  justify-content: space-between;
  padding-bottom: 5px;
  color: ${({ close }) => (close ? '#C37472' : '#FFFCEE')};

  ${hasBorder};
`;
