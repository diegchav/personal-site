import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';

import AppStyled from './AppStyled';

library.add(faGithub, faLinkedin);

const App = () => (
    <AppStyled>
        <Nav />
        <Body />
    </AppStyled>
);

export default App;