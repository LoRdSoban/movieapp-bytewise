import { FaStar } from "react-icons/fa";
const MovieCard = ({ movieData }) => {
  return (
    <div class="flex-none relative w-44 bg-gray-800 rounded-lg shadow-md m-4">
      <img
        loading="lazy"
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movieData.poster_path}`}
        alt={movieData.title ? movieData.title : movieData.name}
        class="rounded-lg w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg p-4 flex flex-col justify-end">
        <h3 class="text-lg font-bold text-white">
          {movieData.title ? movieData.title : movieData.name}
        </h3>
        <div class="flex items-center space-x-2">
          <FaStar class="text-yellow-400" />
          <p class="text-teal-400">{movieData.vote_average}</p>
        </div>
        <p class="text-gray-400 text-sm">{movieData.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
