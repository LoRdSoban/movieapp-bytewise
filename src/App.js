import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen w-full bg-gray-900 text-white">
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-shows" element={<TvShows />} />
            <Route path="/my-profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
