import { createContext, useContext, useEffect, useState } from "react";


const AppContext = createContext();

const getInitialDarkTheme = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');

    if (storedDarkMode === null) {
        return prefersDarkMode;
    }

    return storedDarkMode === 'true';
}

const AppProvider = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkTheme());
    const [searchItem, setSearchItem] = useState('monkey');
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme)
    }


    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
    }, [isDarkTheme])

    return (
        <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchItem, setSearchItem }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;