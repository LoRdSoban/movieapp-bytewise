import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <Link to="/" class="text-2xl font-bold text-teal-500">
          K<span className="text-sm font-normal">onsi</span>M
          <span className="text-sm font-normal">ovie</span>D
          <span className="text-sm font-normal">ekhun</span>
        </Link>
        <div>
          <Link
            to="/movies"
            class="px-4 py-2 text-sm hover:bg-gray-700 rounded"
          >
            Movies
          </Link>
          <Link
            to="/tv-shows"
            class="px-4 py-2 text-sm hover:bg-gray-700 rounded"
          >
            TV Shows
          </Link>
          <Link
            to="/my-profile"
            class="px-4 py-2 text-sm hover:bg-gray-700 rounded"
          >
            My Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
