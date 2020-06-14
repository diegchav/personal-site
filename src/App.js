import React from 'react';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import Nav from './components/Nav/Nav';
import Body from './components/Body/Body';

import useToggleTheme from './hooks/use-toggle-theme';

import AppStyled from './AppStyled';

library.add(faGithub, faLinkedin);

const App = () => {
    const [theme, toggleTheme] = useToggleTheme();
    const { backgroundColor } = theme;

    return (
        <ThemeProvider theme={theme}>
            <AppStyled backgroundColor={backgroundColor}>
                <Nav onToggle={toggleTheme} />
                <Body />
            </AppStyled>
        </ThemeProvider>
    );
};

export default App;