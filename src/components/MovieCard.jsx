const MovieCard = ({ movieData }) => {
  const { title, backdrop_path, vote_average, release_date } = movieData;
  return (
    <div class="flex-none relative w-44 bg-gray-800 rounded-lg shadow-md m-4">
      <img
        loading="lazy"
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
        alt={title}
        class="rounded-lg w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg p-4 flex flex-col justify-end">
        <h3 class="text-lg font-bold text-white">{title}</h3>
        <p class="text-teal-400">{vote_average}</p>
        <p class="text-gray-400 text-sm">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
