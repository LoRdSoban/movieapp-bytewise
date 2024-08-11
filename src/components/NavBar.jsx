import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaFilm,
  FaTv,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logout, reset } from "../features/auth/authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-teal-500">
          K<span className="text-sm font-normal">onsi</span>M
          <span className="text-sm font-normal">ovie</span>D
          <span className="text-sm font-normal">ekhun</span>
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-teal-500 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links (for larger screens) */}
        <div className="hidden sm:flex sm:items-center sm:space-x-4">
          {[
            { name: "Movies", link: "/movies", icon: <FaFilm /> },
            { name: "TV Shows", link: "/tv-shows", icon: <FaTv /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center px-3 py-2 text-sm font-bold hover:bg-gray-700 rounded"
            >
              <span className="mr-2">{item.icon}</span> {item.name}
            </Link>
          ))}
          {user ? (
            <button
              onClick={onLogout}
              className="flex items-center px-3 py-2 text-sm font-bold hover:bg-gray-700 rounded"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center px-3 py-2 text-sm font-bold hover:bg-gray-700 rounded"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>

              <Link
                to="/register"
                className="flex items-center px-3 py-2 text-sm font-bold hover:bg-gray-700 rounded"
              >
                <FaUser className="mr-2" /> Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Expandable Menu (for mobile screens) */}
      {isMenuOpen && (
        <div className="absolute right-0 top-full w-auto bg-gray-800 shadow-lg z-50">
          <div className="flex flex-col">
            {[
              { name: "Movies", link: "/movies", icon: <FaFilm /> },
              { name: "TV Shows", link: "/tv-shows", icon: <FaTv /> },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center px-4 py-2 text-sm font-bold text-white hover:bg-gray-600"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                <span className="mr-2">{item.icon}</span> {item.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={() => {
                  onLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center px-4 py-2 text-sm font-bold text-white hover:bg-gray-600"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center px-4 py-2 text-sm font-bold text-white hover:bg-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaSignInAlt className="mr-2" /> Login
                </Link>

                <Link
                  to="/register"
                  className="flex items-center px-4 py-2 text-sm font-bold text-white hover:bg-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaUser className="mr-2" /> Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
