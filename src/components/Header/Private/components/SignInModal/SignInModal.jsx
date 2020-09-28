import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../Modal';
  
const SignInModal = ({
    onClose,
    onSignUp
}) => {
    return ( 
        <Modal 
        onClose={onClose}
        >
            <Modal.Header>Sign In</Modal.Header>
            <Modal.Body>This is sign in body</Modal.Body>
            <Modal.Footer>This is Footer</Modal.Footer>
        </Modal>
     );
}

SignInModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSignUp: PropTypes.func.isRequired,
}
 
export default SignInModal;