import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

import { Color, lowerTypography } from '@styles';

export const ButtonComplete = styled(AntdButton)`
  display: block;
  margin-top: 16px;
  width: ${props => props.width || '100%'};
  height: 40px;
  color: ${props => (props.type === 'primary' ? Color.white : Color.font)};
  ${lowerTypography.button};
`;
