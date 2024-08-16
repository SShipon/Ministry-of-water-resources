import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};
