import styled from 'styled-components';
import IconClose from '../IconClose';
import IconFilter from '../IconFilter';

export const ServiceFilterStyle = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgba(58, 64, 66, 0.4);
  padding: 8px var(--gap-small);
  cursor: pointer;

  & > ${IconFilter} {
    margin-right: var(--gap-small);
    display: ${({ active }) => (active ? 'none' : 'block')};
  }

  & > ${IconClose} {
    margin-right: var(--gap-small);
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

export const Label = styled.p`
  color: #fffcee;
  font-size: 20px;
`;
