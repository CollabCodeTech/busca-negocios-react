import styled from 'styled-components';
import { Content as Checkbox } from '../Checkbox/styles';

const MenuFilterStyle = styled.menu`
  box-sizing: border-box;
  position: absolute;
  transform: ${({ active }) =>
    active ? 'translateX(0)' : 'translateX(-100%)'};
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #3a4042;
  padding: var(--gap-medium) var(--gap-smaller);
  transition: transform 200ms ease-in-out;

  & > ${Checkbox}:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
`;

export default MenuFilterStyle;
