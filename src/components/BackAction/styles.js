import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconArrow from '../IconArrow';

const BackActionStyle = styled(Link)`
  display: flex;
  align-items: center;
  color: #fffcee;
  font-size: 24px;
  text-decoration: none;

  & > ${IconArrow} {
    margin-right: 10px;
  }
`;

export default BackActionStyle;
