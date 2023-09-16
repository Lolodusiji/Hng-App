import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FeatureMovie.css";
import IMD from "/imgs/IMDb.svg";
import Fruit from "/imgs/Fruit.svg";
import Header from "/imgs/headermovie.svg";
import useFetch from "../../../hook/Usefetch";

const FeatureMovie = () => {
  const { data, isLoading, error } = useFetch(
    "top_rated?language=en-US&page=1"
  );
  const [movies, setMovies] = useState([]);
  console.log(data);
  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  // const FeatureMovie = () => {

    // if (isLoading) {
    //   return <div>Loading data, please wait...</div>;
    // } else if (error) {
    //   return <div>Something went wrong</div>;
    // } else {
    //   return movies.slice(0, 10).map((movie, index) => (
    //     <Link key={index} id="Link2" to="/dashboard">
    //       <div className="grid1" data-testid="movie-card">
    //         <img
    //           id="movie-image"
    //           src={Header}
    //           alt=""
    //           data-testid="movie-poster"
    //         />
    //         <p id="date" data-testid="movie-release-date">
    //           USA, {movie.release_year} - Current
    //         </p>
    //         <h4 data-testid="movie-title">{movie.title}</h4>
    //         <div className="flex-general2">
    //           <div className="flex-aside2">
    //             <img src={IMD} alt="" />
    //             <p id="rate">{movie.rating} / 100</p>
    //           </div>
    //           <div className="flex-otherside2">
    //             <img src={Fruit} alt="" />
    //             <p id="percent">{movie.percent}%</p>
    //           </div>
    //         </div>
    //         <h3 id="spec">{movie.genres.join(", ")}</h3>
    //       </div>
    //     </Link>
    //   ));
    // }
  // };

  return (
    <div className="general">
      <div className="flex-feature">
        <h3>Featured Movies</h3>
        <p id="see">See more</p>
      </div>
      <div className="grid-movies">{isLoading?<p>Loading....</p>:movies?.slice(0,10)?.map((movie, index) => (
        <Link key={index} id="Link2" to={`/dashboard/${movie.id}`}>
          <div className="grid1" data-testid="movie-card">
            <img
              id="movie-image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
              data-testid="movie-poster"
            />
            <p id="date" data-testid="movie-release-date">
              USA, {movie.release_year} - Current
            </p>
            <h4 data-testid="movie-title">{movie.title}</h4>
            <div className="flex-general2">
              <div className="flex-aside2">
                <img src={IMD} alt="" />
                <p id="rate">{movie.vote_average} / 100</p>
              </div>
              <div className="flex-otherside2">
                <img src={Fruit} alt="" />
                <p id="percent">{movie.vote_count}%</p>
              </div>
            </div>
            {/* <h3 id="spec">{movie.genres.join(", ")}</h3> */}
          </div>
        </Link>
      ))
}
      </div>
    </div>
  );
};

export default FeatureMovie;
