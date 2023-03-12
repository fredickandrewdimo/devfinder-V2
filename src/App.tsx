import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <div className="App font-mono min-h-screen py-8 bg-darkWhite">
        <Navbar />
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
