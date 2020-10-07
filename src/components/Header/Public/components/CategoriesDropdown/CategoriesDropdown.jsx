import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationLink from '../../../NavigationLink';
import NavigationItem from '../../../NavigationItem';

const Menu = styled.div`
    position: absolute;
    left: 0;
    background-color: white;
    padding: 16px 24px;
    border: 1px solid #dadada;
    border-radius: 4px;
    margin-top: -6px;
    margin-left: 8px;
    display: flex;
`;

//12-4 4
//6-12 6
//12-3 3

const CursorWrapper = styled(NavigationItem)`
    cursor: pointer;
`;

const Wrapper = styled.div`
    position: relative;
    cursor: initial;
`;

const Left = styled.div`
    width:200px;
`;

const Right = styled.div`
    width:200px;
`;

  
const CategiruesDropdown = () => {
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
    const [showContent, setShowContent] = useState('POSTER')

    const toggleCategoriesDropdown = (event) => {
        event.preventDefault();
        setShowCategoriesDropdown(!showCategoriesDropdown);
    }

    const handleContentItemClick = (target) => {
        return (event) => {
            event.preventDefault();
            setShowContent(target);
        }
    } 

    return ( 
        <Wrapper 
          onMouseEnter={toggleCategoriesDropdown} 
          onMouseLeave={toggleCategoriesDropdown}
        >
            <CursorWrapper indictable>    
                <NavigationLink.Text as="span">
                    Categories
                </NavigationLink.Text>
            </CursorWrapper>    
            {showCategoriesDropdown && (
              <Menu>
                  <Left>
                        {showContent === 'POSTER' && (
                            <button onClick={handleContentItemClick("TASKER")}>As a tasker</button>
                        )}
                        {showContent === 'TASKER' && (
                            <button onClick={handleContentItemClick("POSTER")}>As a poster</button>
                        )}
                  </Left>
                  <Right>
                      {showContent === 'POSTER' && (
                          <div>Poster content</div>
                      )}
                      {showContent === 'TASKER' && (
                          <div>Tasker content</div>
                      )}
                  </Right>
              </Menu>
            )}
        </Wrapper>
     );
}
 
export default CategiruesDropdown;
