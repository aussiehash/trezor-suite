import React from 'react';
import Svg, { SvgProps, Polyline, Path } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 256 256" {...props}>
        <Path
            d="M255.305474,128.00232 C255.305474,198.322659 198.301003,255.328677 127.981438,255.328677 C57.6610997,255.328677 0.655854985,198.322659 0.655854985,128.00232 C0.655854985,57.6827553 57.6610997,0.677510574 127.981438,0.677510574 C198.30023,0.677510574 255.305474,57.6827553 255.305474,128.00232"
            fill="#BEBEBE"
        />
        <Path
            d="M231.61774,128.003893 C231.61774,185.237225 185.218227,231.640556 127.981477,231.640556 C70.7455263,231.640556 24.3428157,185.237225 24.3428157,128.003893 C24.3428157,70.7657655 70.7455263,24.3656314 127.981477,24.3656314 C185.219026,24.3656314 231.61774,70.7649663 231.61774,128.003893"
            stroke="#FFFFFF"
            stroke-width="20"
            fill="#BEBEBE"
        />
        <Polyline
            fill="#FFFFFF"
            points="120.53965 162.01629 128.809764 130.875553 148.389511 123.722248 153.259698 105.420955 153.093414 104.966961 133.81994 112.008121 147.706586 59.7191541 108.323577 59.7191541 90.1630453 127.957462 75.0002659 133.496653 69.9900906 152.364085 85.1412689 146.829535 74.437994 187.045511 179.251819 187.045511 185.971239 162.01629 120.53965 162.01629"
        />
    </Svg>
);

export default SvgComponent;