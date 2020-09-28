import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
    text-decoration: none;
    padding: 16px;
`;

const Naked = styled.span`
`;

const Text = styled.span`
    color: #545a77;
    &:hover {
        color: #008fb4;
    }
`;

const Button = styled.span`
    background-color: #e0446d;
    border-radius: 200px;
    font-size: 14px;
    padding: 8px 18px;
    color: white;
`;

const NavigationLink = {}

NavigationLink.Naked = ({
    href,
    children 
}) => (
    <Link href={href}>
        {children}
    </Link>
);


NavigationLink.Naked.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

NavigationLink.Text = ({
    href,
    children 
}) => (
    <Link href={href}>
        <Text>{children}</Text>
    </Link>
);

NavigationLink.Text.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

NavigationLink.Button = ({
    href,
    children 
}) => (
    <Link href={href}>
        <Button>{children}</Button>
    </Link>
);

NavigationLink.Button.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
 
export default NavigationLink; 