import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink';
import NavigationButton from '../NavigationButton';
import SignInModal from './components/SignInModal';
import SignUpModal from './components/SignUpModal';

const Layout = styled.div`
    display: flex;
`;

const MODAL = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP",
    EMPTY: ''
}


const Private = () => {
    const [showModal, setShowModal] = useState('');

    const handleShowModal = (target) => {
        return (event) => {
            event.preventDefault();

            setShowModal(target);
        }
    }

    return (
        <> 
            <Layout>
                <NavigationButton.Text href="/sign-in" onClick={handleShowModal(MODAL.SIGN_IN)}>
                    Sign in
                </NavigationButton.Text>
                <NavigationButton.Text href="/sign-up" onClick={handleShowModal(MODAL.SIGN_UP)}>
                    Sign up 
                </NavigationButton.Text>
                <NavigationLink.Button variant="secondary" href="/enroll">
                    Become a Tasker
                </NavigationLink.Button>
            </Layout>
            {showModal === MODAL.SIGN_IN && (<SignInModal onClose={handleShowModal(MODAL.EMPTY)} onSignUp={handleShowModal(MODAL.SIGN_UP)}/>)}
            {showModal === MODAL.SIGN_UP && (<SignUpModal onClose={handleShowModal(MODAL.EMPTY)} onSignIn={handleShowModal(MODAL.SIGN_IN)}/>)}
        </> 
     );
} 
 
export default Private;