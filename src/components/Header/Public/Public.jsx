import React from 'react';
import styled from 'styled-components';
import NavigationLink from '../NavigationLink/NavigationLink';
import NavigationButton from '../NavigationButton';
import PostATaskModal from './components/PostATaskModal';
import CategoriesDropdown from './components/CategoriesDropdown';
import ToggleContent from '../../ToggleContent';

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
    return (
        <Layout>
            <NavigationLink.Naked href="/">
                <Logo>LOGO</Logo>
            </NavigationLink.Naked>
            <Divider/>
                <ToggleContent
                  toggle={(toggler) => (
                    <NavigationButton.Button 
                      onClick={toggler} 
                      variant="primary" 
                      href="/aa"
                    >
                        Post a task
                    </NavigationButton.Button>
                  )}
                  content={(toggler)=>(
                      <PostATaskModal onClose={toggler}/>
                  )}
                /> 
                <CategoriesDropdown/>
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