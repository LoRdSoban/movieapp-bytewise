import { FaStar } from "react-icons/fa";

const MovieCard = ({ movieData }) => {
  return (
    <div className="flex-none relative w-44 bg-gray-800 rounded-lg shadow-md m-2 sm:m-4">
      <img
        loading="lazy"
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movieData.poster_path}`}
        alt={movieData.title ? movieData.title : movieData.name}
        className="rounded-lg w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg p-2 sm:p-4 flex flex-col justify-end">
        <h3 className="text-base sm:text-lg font-bold text-white">
          {movieData.title ? movieData.title : movieData.name}
        </h3>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <FaStar className="text-yellow-400" />
          <p className="text-teal-400 text-sm sm:text-base">
            {movieData.vote_average}
          </p>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">
          {movieData.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
