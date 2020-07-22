import React, { createContext, FunctionComponent, useContext } from 'react';

const ThemeContext = createContext({ red: '#ff0000', green: '#00ff00', blue: '#0000ff' });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FunctionComponent = ({ children }) => (
    <ThemeContext.Provider value={{ red: '#ff0000', green: '#00ff00', blue: '#0000ff' }}>
        {children}
    </ThemeContext.Provider>
);
