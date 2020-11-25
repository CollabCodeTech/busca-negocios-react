import styled from 'styled-components';
import photo from '../../assets/images/coffee.png';
import { StarsStyle } from '../Stars/styles';

export const Title = styled.h2`
  color: #fffcee;
  font-size: 20px;
  margin-left: var(--gap-smaller);
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 2px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f25a70;
  color: #fffcee;
  font-size: 24px;
  text-transform: uppercase;
  height: 36px;
  border-top: 2px solid #fffcee;
`;

export const Photo = styled.img.attrs({ src: photo })`
  border-bottom: 2px solid #fffcee;
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
`;

export const CardServiceStyle = styled.article`
  border: 5px solid #fffcee;
  border-radius: 14px;
  max-width: 288px;
  width: 100%;
  overflow: hidden;
  padding-bottom: var(--gap-smaller);

  & > ${StarsStyle} {
    margin: var(--gap-smaller) 0 var(--gap-smaller) var(--gap-smaller);
  }
`;
