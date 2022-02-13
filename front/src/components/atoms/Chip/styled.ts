import { animated } from '@react-spring/web';
import styled from 'styled-components';

import { Colors } from '@styles';

export const ChipWrapper = styled(animated.div)<{
  shadow?: boolean;
  border?: boolean;
  clicked?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  ${({ shadow, theme }) => {
    if (shadow) {
      return `
        box-shadow: 0px 0px 10px ${theme.shadow.primary};
      `;
    }
  }}
  ${({ clicked }) => {
    if (clicked) {
      return `
        box-shadow: 0px 0px 4px ${Colors.primary};
      `;
    }
  }}
`;

export const Label = styled.div<{ clicked?: boolean }>`
  align-items: center;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  ${({ clicked, theme }) => {
    if (clicked) {
      return `
        color: ${theme.text.white};
      `;
    } else {
      return `
      color: ${theme.text.primary};
    `;
    }
  }}
`;
