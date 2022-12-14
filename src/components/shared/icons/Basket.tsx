import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' {...props}>
    <path
      style={{
        lineHeight: 'normal',
        textIndent: 0,
        textAlign: 'start',
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
        textTransform: 'none',
        isolation: 'auto',
        mixBlendMode: 'normal',
      }}
      d='M 1 0.99414062 L 1 1.9941406 L 3 1.9941406 C 3.2164521 1.9941406 3.3994354 2.1344087 3.46875 2.3378906 L 4.4023438 10.667969 C 4.4873763 11.422819 5.1353675 12 5.8945312 12 L 6 12 L 11 12 L 12 12 L 12 11 L 5.8945312 11 C 5.635695 11 5.4254518 10.81379 5.3964844 10.556641 L 5.3339844 10 L 11.679688 10 C 12.391488 10 13.010213 9.4928251 13.150391 8.7949219 L 14.109375 4 L 4.6601562 4 L 4.4472656 2.09375 L 4.4316406 2.0488281 C 4.2372134 1.4236698 3.654895 0.99414063 3 0.99414062 L 1 0.99414062 z M 11 12 A 1 1 0 0 0 10 13 A 1 1 0 0 0 11 14 A 1 1 0 0 0 12 13 A 1 1 0 0 0 11 12 z M 6 12 A 1 1 0 0 0 5 13 A 1 1 0 0 0 6 14 A 1 1 0 0 0 7 13 A 1 1 0 0 0 6 12 z M 4.7734375 5 L 12.890625 5 L 12.169922 8.5976562 C 12.122099 8.8357531 11.921886 9 11.679688 9 L 5.2226562 9 L 4.7734375 5 z'
      fontWeight={400}
      fontFamily='sans-serif'
      overflow='visible'
    />
  </svg>
);
export default SVGComponent;
