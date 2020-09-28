import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import NavigationItem from '../NavigationItem';

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


NavigationLink.Button = styled(StyledLink)`
    outline: 0;
    border: 0;
    margin: 8px 16px;
    padding: 8px 18px;
    font-size: 14px;
    border-radius: 200px;
    cursor: pointer;

    ${(props) => {
        const style = {
            primary: css`
                background: #e0446d;
                color: white;
            `,
            secondary: css` 
                background-color: #f5f8fd;
                border: 1px solid #e0e3e7;
                color: #008fb4;
            `,
        }[props.variant];

        return style;
    }}
    
`
 
export default NavigationLink; 