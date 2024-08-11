import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const HorizontalMoviesList = () => {
  const movies_req = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2Y5NjQwMWU3MmQ5N2VmM2ZhMDA2ZGNjOWJiZDc0MyIsIm5iZiI6MTcyMzMyMDA4NS4yNTY3OTUsInN1YiI6IjY2YjdjNjE4YzE3ODZiYTY3MTNjMGI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2tgqAG4HJ5_0aL918yabIfkx1gmOqUsqdCsuNcWaY",
    },
  };

  const shows_req = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2Y5NjQwMWU3MmQ5N2VmM2ZhMDA2ZGNjOWJiZDc0MyIsIm5iZiI6MTcyMzMyMDA4NS4yNTY3OTUsInN1YiI6IjY2YjdjNjE4YzE3ODZiYTY3MTNjMGI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-H2tgqAG4HJ5_0aL918yabIfkx1gmOqUsqdCsuNcWaY",
    },
  };

  const [movies, setMovies] = useState([]);
  const [activeTab, setActiveTab] = useState("Movies");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.request(movies_req);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTVShows = async () => {
      try {
        const response = await axios.request(shows_req);
        setMovies(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (activeTab === "Movies") {
      fetchMovies();
    } else {
      fetchTVShows();
    }

    // Cleanup function (if needed)
    return () => {
      // Clean up logic if necessary
    };
  }, [activeTab]);

  return (
    <section className="pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
            Trending
          </h2>
          <div className="flex">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-l-lg ${
                activeTab === "Movies"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => toggleTab("Movies")}
            >
              Movies
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-r-lg ${
                activeTab === "TV Shows"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => toggleTab("TV Shows")}
            >
              TV Shows
            </button>
          </div>
        </div>
        <div className="flex overflow-x-scroll space-x-4 no-scrollbar">
          {movies.map((movie, index) => (
            <MovieCard key={index} movieData={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalMoviesList;
