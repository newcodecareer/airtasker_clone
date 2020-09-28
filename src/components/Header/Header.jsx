import React from 'react';
import styled from 'styled-components';
import Public from './Public';
import Private from './Private';

const StyledHeader = styled.div`
    border-bottom: 1px solid #dadada; 
` 

const Container = styled.div`
    width: 1024px;
    margin: 0 auto;
`
const Layout = styled.div`
    display: flex;
`;

const Left = styled.div`

`;

const Right = styled.div`
    margin-left: auto;
`

const Header = () => {
    return (
        <StyledHeader> 
            <Container> 
                <Layout>
                    <Left>
                        <Public />
                    </Left>
                    <Right>
                        <Private />
                    </Right>
                </Layout>
            </Container>
        </StyledHeader>  
     );
}
 
export default Header;