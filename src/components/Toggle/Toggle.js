import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import ToggleStyled from './ToggleStyled';

const Toggle = ({ onToggle }) => {
    const [isToggled, setIsToggled] = useState(false);
    
    const { toggleBackgroundColor, toggleForegroundColor } = useContext(ThemeContext);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        onToggle();
    };

    return (
        <ToggleStyled
            backgroundColor={toggleBackgroundColor}
            foregroundColor={toggleForegroundColor}
            isToggled={isToggled}
            onClick={handleToggle}
        >
            <div className="container">
                <div className="circle"></div>
            </div>
        </ToggleStyled>
    );
};

Toggle.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default Toggle;