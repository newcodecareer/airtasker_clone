import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink/NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal';

const Layout = styled.div`
    display: flex;
`;

const Divider = styled.div`
    width: 1px;
    border-right: 1px solid #dadada;
`;

const Logo = styled.span`
    color: #545a77;
`;


const Public = () => {
    const [showPostATaskModal, setShowAPostTaskModal] = useState(false);

    const togglePostATaskModal = (event) => {
        event.preventDefault();
        setShowAPostTaskModal(!showPostATaskModal)
    }
    
    return (
        <Layout>
            <NavigationLink.Naked href="/">
                <Logo>LOGO</Logo>
            </NavigationLink.Naked>
            <Divider/>
                <NavigationButton.Button onClick={togglePostATaskModal} variant="primary" href="/aa">
                    Post a task
                </NavigationButton.Button>
                {showPostATaskModal && (
                    <PostATaskModal
                    onClose={togglePostATaskModal}
                    ></PostATaskModal>
                )}
                <NavigationLink.Text indictable={true} href="/bb">
                    Categories
                </NavigationLink.Text>
                <NavigationLink.Text indictable href="/cc">
                    Browse tasks
                </NavigationLink.Text>
                <NavigationLink.Text indictable href="/dd">
                    How it works
                </NavigationLink.Text>
        </Layout>
     );
}
 
export default Public