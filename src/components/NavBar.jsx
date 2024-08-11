import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-500">
          K<span className="text-sm font-normal">onsi</span>M
          <span className="text-sm font-normal">ovie</span>D
          <span className="text-sm font-normal">ekhun</span>
        </Link>
        <div className="flex items-center space-x-4">
          {[
            { name: "Movies", link: "/movies" },
            { name: "TV Shows", link: "/tv-shows" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center px-4 py-2 text-sm font-bold hover:bg-gray-700 rounded"
            >
              {item.name}
            </Link>
          ))}
          {user ? (
            <button
              onClick={onLogout}
              className="flex items-center px-4 py-2 text-sm font-bold hover:bg-gray-700 rounded"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 text-sm font-bold hover:bg-gray-700 rounded"
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>

              <Link
                to="/register"
                className="flex items-center px-4 py-2 text-sm font-bold hover:bg-gray-700 rounded"
              >
                <FaUser className="mr-2" /> Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
