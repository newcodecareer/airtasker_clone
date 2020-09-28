import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../Modal';
  
const SignUpModal = ({
    onClose,
    onSignIn
}) => {
    return ( 
        <Modal 
        onClose={onClose}
        >
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Body>This is sign Up body</Modal.Body>
            <Modal.Footer>This is Footer</Modal.Footer>
        </Modal>
     );
}

SignUpModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSignUp: PropTypes.func.isRequired,
}
 
export default SignUpModal;