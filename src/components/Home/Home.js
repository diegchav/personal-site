import React from 'react';

import About from '../About/About';
import SocialLinks from '../SocialLinks/SocialLinks';

import HomeStyled from './HomeStyled';

const Home = () => (
    <HomeStyled>
        <About />
        <SocialLinks />
    </HomeStyled>
);

export default Home;