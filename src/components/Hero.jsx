import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="bg-cover bg-center h-96 flex-none relative bg-[url('../assets/hero.png')]">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Welcome {user && user.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          Millions of movies, TV shows, and people to discover. Explore now.
        </p>
        <div className="flex-none relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="w-full p-3 md:p-4 pr-20 md:pr-24 rounded-full bg-gray-800 text-white focus:outline-none"
          />
          <button className="absolute right-0 text-teal-500 hover:bg-gray-700 px-3 md:px-4 py-3 md:py-4 rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
