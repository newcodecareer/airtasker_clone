import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../../../../Modal';

const Body = styled.div`
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
`;

const Title = styled.div`
    font-size: 24px;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 4px;
`;

const SubTitle = styled.div`
    font-size: 14px;
    text-align: center;
`;

const PostATaskModal = ({
    onClose,
}) => {
    return (   
        <Modal 
        onClose={onClose}
        >
            <Body>
                <Image src="https://www.airtasker.com/images/taylor/on-boarding.png" alt="On boarding" />
                <Title>Start getting offers in no time</Title>
                &nbsp;
                &nbsp;
                <SubTitle>
                    We're just going to ask a few questions to help you find the right Tasker - it'll only take few seconds
                </SubTitle>
            </Body>
            <Modal.Footer>This is post a task footer</Modal.Footer>
        </Modal>
     );
}

PostATaskModal.propTypes = {
    onClose: PropTypes.func.isRequired,
}
 
export default PostATaskModal;
