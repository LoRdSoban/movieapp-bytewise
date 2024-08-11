const Hero = () => {
  return (
    <section class="bg-cover bg-center h-96 flex-none relative bg-[url('https://via.placeholder.com/1920x600')]">
      <div class="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4">Welcome.</h1>
        <p class="text-lg md:text-xl mb-8">
          Millions of movies, TV shows, and people to discover. Explore now.
        </p>
        <div class="flex-none relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            class="w-full p-4 pr-24 rounded-full bg-gray-800 text-white focus:outline-none"
          />
          <button class="absolute right-0 text-teal-500 hover:bg-gray-700 px-4 py-4 rounded-r-full">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
