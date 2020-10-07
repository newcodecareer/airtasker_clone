import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleContent = ({ toggle, content }) => {
    const [show,setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }
    return ( 
        <>
            {toggle(toggleShow)}
            {show && content(toggleShow)}
        </>
     );
}

ToggleContent.propTypes = {
    toggle: PropTypes.func.isRequired,
    content: PropTypes.func.isRequired,
}

export default ToggleContent;
