import styled from 'styled-components';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: #3a4042;
  padding: 8px var(--gap-small);

  & > ${IconFilter} {
    margin-right: var(--gap-small);
  }
`;

export const Label = styled.p`
  font-family: 'Comfortaa', sans-serif;
  color: #fffcee;
  font-size: 20px;
`;
