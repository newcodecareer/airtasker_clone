import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from '../NavigationLink';
import NavigationItem from '../NavigationItem';
import NakedButton from '../../NakedButton';


const NavigationButton = {};

NavigationButton.Text = ({
    onClick,
    onMouseLeave,
    onMouseEnter,
    children,
    indictable
}) => {
    return ( 
        <NavigationItem indictable={indictable}>
            <NavigationLink.Text 
              as={NakedButton} 
              onClick={onClick}
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
            > 
                {children}
            </NavigationLink.Text>
        </NavigationItem>
     );  
}

NavigationButton.defaultProps = {
    indicatable: false,
    onClick: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
}

NavigationButton.Text.propTypes = {
    indicatable: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    children: PropTypes.node.isRequired
}

NavigationButton.Button = ({
    onClick,
    children
}) => (
    <NavigationLink.Button as="button" variant="primary" onClick={onClick}>
        {children}
    </NavigationLink.Button>
)

NavigationButton.Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

 
export default NavigationButton;