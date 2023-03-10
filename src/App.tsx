import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.js";

import { useEffect, useState } from "react";

function App() {
  // State for theme
  const [theme, setTheme] = useState(null);

  // User default preferred theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Switch theme function
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Theme implementation
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Router>
      <div className="App font-mono min-h-screen py-8 bg-darkWhite dark:bg-darkBlue">
        {/* pass a prop to navbar component */}
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <div className="content w-11/12 md:w-6/12 m-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
