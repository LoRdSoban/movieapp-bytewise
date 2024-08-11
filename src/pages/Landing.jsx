import Hero from "../components/Hero";
import HorizontalMoviesList from "../components/HorizontalMoviesList";
import Spinner from "../components/Spinner";

const Landing = () => {
  return (
    <>
      <Hero />
      <HorizontalMoviesList />

      {/* <!-- Latest Trailers Section --> */}
      <section class="py-8 bg-gray-800">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold mb-4">Latest Trailers</h2>
          <div class="flex overflow-x-scroll space-x-4">
            {/* <!-- Trailer Card --> */}
            <div class="w-64 bg-gray-700 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/256x144"
                alt="Trailer Thumbnail"
                class="rounded-t-lg"
              />
              <div class="p-4">
                <h3 class="text-xl font-bold">Trailer Title</h3>
                <p class="text-gray-400 text-sm">Official Trailer</p>
              </div>
            </div>
            {/* <!-- Repeat Trailer Cards as needed --> */}
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer class="bg-gray-800 py-8">
        <div class="container mx-auto text-center">
          <div class="flex justify-center space-x-4 mb-4">
            <a href="#" class="hover:text-teal-500">
              About TMDB
            </a>
            <a href="#" class="hover:text-teal-500">
              Contact Us
            </a>
            <a href="#" class="hover:text-teal-500">
              API
            </a>
            <a href="#" class="hover:text-teal-500">
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
