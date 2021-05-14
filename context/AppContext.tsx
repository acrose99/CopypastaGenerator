// src/context/state.js
import { createContext, useContext } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const AppContext = createContext(themes.light);

export function AppWrapper({ children }) {
    return (
        <AppContext.Provider value={themes.light}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return AppContext;
}

