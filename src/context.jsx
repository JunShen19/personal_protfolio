import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    "(prefers-color-schema:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return preferDarkMode || storedDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [navbarHeight, setNavbarHeight] = useState(0);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const getNavbarHeight = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const height = navbar.offsetHeight;
      console.log(height);
      setNavbarHeight(height);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, navbarHeight }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
