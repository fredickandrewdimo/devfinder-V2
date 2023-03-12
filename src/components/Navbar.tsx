import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 md:w-6/12 m-auto py-4 mb-2">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          devfinder
        </Link>
        <div className="">
          <button className="text-base font">Dark</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
