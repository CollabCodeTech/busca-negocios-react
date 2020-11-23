import styled from 'styled-components';
import LogoMain from '../LogoMain';
import IconSearch from '../IconSearch';

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #3c5268;
  padding: 16px 16px 28px;

  & > ${LogoMain}, & > ${IconSearch} {
    width: 24px;
  }
`;

export default HeaderMain;
