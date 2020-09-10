import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #3a4042;
  padding: 8px 16px;

  & > ${IconFilter} {
    margin-right: 16px;
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', cursive;
  color: #fffcee;
  font-size: 20px;
`;
