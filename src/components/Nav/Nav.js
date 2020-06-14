import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Toggle from '../Toggle/Toggle';

import NavStyled from './NavStyled';

const Nav = ({ onToggle }) => {
    const { borderColor } = useContext(ThemeContext);

    return (
        <NavStyled borderColor={borderColor}>
            <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
            <Toggle onToggle={onToggle} />
        </NavStyled>
    );
};

Nav.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default Nav;