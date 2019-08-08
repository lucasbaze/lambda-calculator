import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles.js';

const Button = styled.button.attrs(props => ({
    width: props.width || 20,
}))`
    width: ${props => props.width}%;
    border-radius: ${props => props.width * 4}px;
    background-color: ${props => props.bgColor || colors.numberColor};
    color: white;
    padding: ${props => props.width / 4}%;
    font-size: 2rem;
    border: none;
    box-shadow: 0 5px black;

    :hover {
        background-color: green;
    }
`;

export default Button;
