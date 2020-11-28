import styled from 'styled-components';
import { Content as Checkbox } from '../Checkbox/styles';

const MenuFilterStyle = styled.menu`
  background-color: #3a4042;
  padding: var(--gap-medium) var(--gap-smaller);

  & > ${Checkbox}:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
`;

export default MenuFilterStyle;
