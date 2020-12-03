import styled from 'styled-components';
import DescriptionBox from '../DescriptionBox';
import PhotoPreview from '../PhotoPreview';
import { StarsStyle } from '../Stars/styles';
import Title from '../Title';

const WrapperBusinessStyle = styled.article`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  & > ${StarsStyle} {
    margin-bottom: 5px;
  }

  & > ${Title} {
    margin-bottom: 15px;
  }

  & > ${PhotoPreview} {
    margin-bottom: 20px;
    width: 100%;
  }

  & > ${DescriptionBox} {
    width: 100%;
  }
`;

export default WrapperBusinessStyle;
