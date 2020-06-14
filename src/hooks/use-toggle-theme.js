import { useState } from 'react';

import {
    themeLight,
    themeDark,
    THEME_LIGHT,
    THEME_DARK
} from '../themes';

const useToggleTheme = () => {
    const [currentTheme, setCurrentTheme] = useState(THEME_LIGHT);
    const [theme, setTheme] = useState(themeLight);

    const toggleTheme = () => {
        if (currentTheme === THEME_DARK) {
            setTheme(themeLight);
            setCurrentTheme(THEME_LIGHT);
        } else if (currentTheme === THEME_LIGHT) {
            setTheme(themeDark);
            setCurrentTheme(THEME_DARK);
        }
    };

    return [theme, toggleTheme];
};

export default useToggleTheme;