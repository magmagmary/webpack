import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
    role='img'
    {...props}
  >
    <rect width={256} height={256} fill='none' />
    <path
      d='M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z'
      fill={props.fill}
      stroke={props.stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={12}
    />
  </svg>
);

export default SVGComponent;
