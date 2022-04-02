import * as React from 'react';
import styled, { css } from 'styled-components';

const SvgComponent = (props) => (
  <svg
    width='2em'
    height='25.6px'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
      fill='#FC4747'
    />
  </svg>
);

const MainLogo = styled(SvgComponent)`
  cursor: ${(p) => (p.pointer || p.nopointer ? 'pointer' : 'default')};
  &:hover {
    path: {
      color: ${(p) => p.hoverColor};
    }
  }
`;
export default MainLogo;
