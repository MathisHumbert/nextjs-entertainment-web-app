import React from 'react';
import styled from 'styled-components';

const SvgComponent = (props) => (
  <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z'
      stroke='#FFF'
      strokeWidth={1.5}
      fill='none'
    />
  </svg>
);

const EmptyBookmarkIcon = styled(SvgComponent)`
  cursor: pointer;

  path {
    transition: stroke 0.3s linear;
    stroke: ${(p) => (p.isActive ? '#10141E' : '#fff')};
  }
`;

export default EmptyBookmarkIcon;
