import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavigationItem from '../NavigationItem';
import Button from '../../Button';

const StyledLink = styled.a`
    text-decoration: none;
`;

const Link = ({
    href,
    children,
    className,
    indictable
}) => (
    <NavigationItem 
        as={StyledLink} 
        indictable={indictable}
        href={href} 
        className={className}  
        >{children}
    </NavigationItem>
);

Link.defaultProps = { 
    className: '',
    indictable: false,
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    indictable: PropTypes.bool,
};

const NavigationLink = {}

NavigationLink.Naked = Link;


NavigationLink.Naked.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


NavigationLink.Text = styled(Link)`
    color: #545a77;
    &:hover {
        color: #008fb4;
    }
`;

const NavigationLinkButton = styled(Button)`
    margin: 8px 16px;
`;


NavigationLink.Button = ({
    href,
    children,
    variant,
}) => (
    <NavigationLinkButton as={StyledLink} href={href} variant={variant}>
        {children}
    </NavigationLinkButton>
)

NavigationLink.Button.defaultProps = {
    variant: "primary",
}

NavigationLink.Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary'])
}
 
export default NavigationLink; 