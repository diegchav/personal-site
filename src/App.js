import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import About from './components/About/About';
import SocialLinks from './components/SocialLinks/SocialLinks';

import AppStyled from './AppStyled';

library.add(faGithub, faLinkedin);

const App = () => (
    <AppStyled>
        <About />
        <SocialLinks />
    </AppStyled>
);

export default App;