import * as React from 'react';
import styled from 'styled-components';

const SvgComponent = (props) => (
  <svg width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z'
      fill='#FFF'
      opacity={0.75}
    />
  </svg>
);

const CategoryTvSeriesIcon = styled(SvgComponent)`
  cursor: pointer;
`;

export default CategoryTvSeriesIcon;
