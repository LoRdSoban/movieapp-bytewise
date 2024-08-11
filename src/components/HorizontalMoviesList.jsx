import MovieCard from "./MovieCard";

const HorizontalMoviesList = () => {
  const movies = [
    {
      title: "Deadpool & Wolverine",
      backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
      vote_average: 7.891,
      release_date: "2024-07-24",
    },
    {
      title: "Despicable Me 4",
      backdrop_path: "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
      vote_average: 7.361,
      release_date: "2024-06-20",
    },
    {
      title: "Bad Boys: Ride or Die",
      backdrop_path: "/3q01ACG0MWm0DekhvkPFCXyPZSu.jpg",
      vote_average: 7.663,
      release_date: "2024-06-05",
    },
    {
      title: "Inside Out 2",
      backdrop_path: "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
      vote_average: 7.626,
      release_date: "2024-06-11",
    },
    {
      title: "A Quiet Place: Day One",
      backdrop_path: "/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg",
      vote_average: 6.952,
      release_date: "2024-06-26",
    },
    {
      title: "Saving Bikini Bottom: The Sandy Cheeks Movie",
      backdrop_path: "/r7HV1rKdUus2gJNChswMtpjpPft.jpg",
      vote_average: 6.304,
      release_date: "2024-08-01",
    },
    {
      title: "Prey",
      backdrop_path: "/5W1sQidR2a9e8O1vk2IDhzbT4W7.jpg",
      vote_average: 6.466,
      release_date: "2024-03-15",
    },
    {
      title: "The Convert",
      backdrop_path: "/tqSg1hHiSWhHAhnjDhhevaFGsP0.jpg",
      vote_average: 6.6,
      release_date: "2024-03-14",
    },
    {
      title: "House of Ga'a",
      backdrop_path: "/c3rwwFFVbkyEI6wPtpPd9lvovPW.jpg",
      vote_average: 5.963,
      release_date: "2024-07-26",
    },
    {
      title: "The Garfield Movie",
      backdrop_path: "/1wP1phHo2CROOqzv7Azs0MT5esU.jpg",
      vote_average: 7.209,
      release_date: "2024-04-30",
    },
  ];

  return (
    <section class="pt-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-4 pl-4">Trending</h2>
        <div class="flex overflow-x-scroll space-x-4">
          {movies.map((movie, index) => (
            <MovieCard key={index} movieData={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalMoviesList;
