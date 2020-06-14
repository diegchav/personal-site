import React from 'react';

import NavStyled from './NavStyled';

const Header = () => (
    <NavStyled>
        <img className="logo" src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" />
    </NavStyled>
);

export default Header;