import Hero from "../components/Hero";
import HorizontalMoviesList from "../components/HorizontalMoviesList";
import Spinner from "../components/Spinner";

const Landing = () => {
  return (
    <>
      <Hero />
      <HorizontalMoviesList />

      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Latest Trailers</h2>
          <div className="flex overflow-x-scroll space-x-4 no-scrollbar">
            {/* Trailer Card */}
            <div className="w-64 bg-gray-700 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/256x144"
                alt="Trailer Thumbnail"
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Trailer Title</h3>
                <p className="text-gray-400 text-sm">Official Trailer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center px-4">
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <a href="#" className="hover:text-teal-500">
              About TMDB
            </a>
            <a href="#" className="hover:text-teal-500">
              Contact Us
            </a>
            <a href="#" className="hover:text-teal-500">
              API
            </a>
            <a href="#" className="hover:text-teal-500">
              System Status
            </a>
          </div>
          <p>&copy; 2024 TMDB Clone. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Landing;
