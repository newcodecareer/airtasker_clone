import React from 'react';
import styled, { css } from 'styled-components';

const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    color: #292b32;
    font-size: 14px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #bbc2dc;

    ${(props) => props.errorMessage && css`
        color: #e0446d;
        border-color: #e0446d;
    `}
`;
 
export default Input;