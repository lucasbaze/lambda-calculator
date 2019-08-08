import React from 'react';
import styled from 'styled-components/macro';
import { colors } from '../../../styles.js';

const StyledNumberButton = styled.button`
    box-sizing: border-box;
    background-color: ${colors.numberColor};
    border: none;
    margin: 10px;
    border-radius: ${props => props.padding * 2 || 5}px;
    padding: ${props => props.padding}px;
    color: white;
    font-size: 2rem;
    box-shadow: 0 4px black;

    :hover {
        border: 1px solid white;
    }
`;

// const NumberButton = props => {
//     return <button>{props.children}</button>;
// };

export default StyledNumberButton;
