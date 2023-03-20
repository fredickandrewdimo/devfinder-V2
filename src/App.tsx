import Navbar from "./pages/Navbar.js";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState<null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [theme, setTheme] = useState<string | null>(null);

  const handleThemeSwitch: () => void = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        handleThemeSwitch,
        data,
        setData,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
      }}
    >
      <Router>
        <div className="App font-mono min-h-screen py-8 bg-darkWhite dark:bg-darkBlue">
          <Navbar />
          <div className="content w-11/12 md:w-6/12 m-auto ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
