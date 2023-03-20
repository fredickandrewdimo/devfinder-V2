import { Link } from "react-router-dom";
import { sun, moon } from "../components/svg";
import { useContext } from "react";
import { AppContext } from "../App";

const Navbar = () => {
  const { handleThemeSwitch, theme } = useContext(AppContext);

  return (
    <div className="w-11/12 md:w-6/12 m-auto py-4 mb-2">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-xl dark:text-white">
          devfinder
        </Link>
        <div className="">
          <button
            onClick={handleThemeSwitch}
            className="text-base flex py-2  px-4 rounded-md hover:text-lightBlue hover:bg-white dark:text-white dark:hover:bg-semiDarkBlue"
          >
            <span className="mr-2">{theme === "dark" ? "Light" : "Dark"}</span>
            {theme === "dark" ? sun : moon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
