import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    & ~ & {
        margin-top: 16px;
    }
`;

const Label = styled.label`
    display: flex;
    font-size: 14px;
    color: #292b32;
    margin-bottom: 8px;

    ${(props)=>props.error && css`
        color: #e0446d;
    `} 
`;

const ErrorMessage = styled.div`
    margin-top: 4px;
    color: #e0446d;
`;

const FormItem = ({
    label,
    htmlFor,
    children,
    errorMessage,
}) => {
    return ( 
        <Wrapper> 
            {label && <Label htmlFor={htmlFor} error={errorMessage}>{label}</Label>}
            {children}
            {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
        </Wrapper>
     );
}

FormItem.defaultProps = {
    label: undefined,
    htmlFor: undefined,
    errorMessage: undefined,
}

FormItem.propTypes = {
    label: PropTypes.string,
    htmlFor: PropTypes.string,
    children: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
}
 
export default FormItem;