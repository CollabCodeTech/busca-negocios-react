import styled from 'styled-components';
import { CardServiceStyle } from '../CardService/styles';

const ServicesStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--gap-medium);
  padding-bottom: calc(50px + var(--gap-medium));

  & > ${CardServiceStyle}:not(:last-child) {
    margin-bottom: var(--gap-medium);
  }
`;

export default ServicesStyles;
