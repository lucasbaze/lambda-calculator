import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles.js';

const Button = styled.button`
    border-radius: 40px;
    background-color: ${props => props.bgColor || colors.numberColor};
    color: white;
    margin: 10px;
    width: ${props => props.width || 70}px;
    height: 70px;
    font-size: 2rem;
    border: none;
    box-shadow: 0 5px black;

    :hover {
        border: 1px solid white;
    }
    :focus {
        background-color: green;
        outline: none;
    }
`;

export default Button;
