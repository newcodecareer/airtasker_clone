import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../../Modal';

const PostATaskModal = ({
    onClose,
}) => {
    return ( 
        <Modal 
        onClose={onClose}
        >
            <Modal.Body>This is post a task body</Modal.Body>
            <Modal.Footer>This is Footer</Modal.Footer>
        </Modal>
     );
}

PostATaskModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
 
export default PostATaskModal;
