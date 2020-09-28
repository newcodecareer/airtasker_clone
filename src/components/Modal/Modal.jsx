import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NakedButton from '../NakedButton';

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    left: 0;
    right: 0; 
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div`
    position: absolute;
    width: 600px;
    background: white;
    position: relative; 
`;

const Header = styled.div`
    padding: 16px 24px;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid #dadada;
`;


const Close = styled(NakedButton)`
    position: absolute;
    top: 0;
    right: 0;
    padding:16px 24px 0 0;
    display: flex;
    align-items: center;
`;

const Body = styled.div`
    padding: 16px 24px;
`;

const Footer = styled.div`
    padding: 16px 24px;
    border-top: 1px solid #dadada;
`;


  
const Modal = ({
    onClose,
    children,
}) => {
    return ( 
        <Overlay onClick={onClose}>
            <StyledModal onClick={(event) => event.stopPropagation() }>
                {children}
                <Close onClick={onClose}>X</Close>
            </StyledModal>
        </Overlay>
     );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer; 
 
export default Modal;