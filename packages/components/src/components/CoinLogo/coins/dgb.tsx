import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;
const Circle = styled.circle``;
const Path = styled.path``;

interface SvgProps {
    width: number;
    height: number;
}

const SvgComponent = (props: SvgProps) => (
    <Svg viewBox="0 0 256 256" {...props}>
        <Circle
            stroke="#0066CC"
            stroke-width="20"
            fill="#002352"
            cx="127.941818"
            cy="127.941818"
            r="117.709091"
        />
        <Path
            d="M56.3781818,94.7781818 L146.56,94.7781818 C146.56,94.7781818 177.687273,94.4872727 156.16,134.632727 C156.16,134.632727 140.450909,166.050909 101.469091,165.469091 L122.501818,111.831273 C123.01038,110.531735 122.850975,109.065596 122.075016,107.905717 C121.299057,106.745838 120.004719,106.038969 118.609455,106.013091 L90.9963636,105.541818 L56.0872727,190.487273 C56.0872727,190.487273 67.7236364,191.650909 74.1236364,191.069091 L70.6327273,199.796364 L87.1272727,199.796364 C88.0540807,199.796364 88.8835005,199.22078 89.2101818,198.353455 L92.16,190.487273 L99.1418182,189.905455 L95.0690909,199.796364 L111.127273,199.796364 C112.322316,199.796364 113.395342,199.064125 113.832727,197.952 L118.347636,186.414545 C118.347636,186.414545 167.220364,178.269091 189.329455,138.705455 C189.329455,138.705455 219.002182,92.7418182 184.093091,76.4509091 C177.289294,73.3320758 170.014392,71.3658863 162.565818,70.6327273 L166.673455,60.5905455 C166.925575,59.9728727 166.853354,59.2701846 166.480866,58.7167074 C166.108378,58.1632302 165.4846,57.8327242 164.817455,57.8327242 L149.76,57.8327242 L145.105455,70.0509091 L138.705455,70.0509091 L142.318545,60.5614545 C142.554071,59.942199 142.469819,59.2467027 142.093243,58.701597 C141.716666,58.1564914 141.095986,57.8327242 140.433455,57.8327242 L125.306182,57.8327242 L120.651636,70.0509091 L73.6465455,70.0509091 C71.0676553,70.0432618 68.6971233,71.4660291 67.4909091,73.7454545 L56.3781818,94.7781818 Z"
            fill="#FFFFFF"
        />
    </Svg>
);

export default SvgComponent;