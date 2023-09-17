import React, { useEffect, useState } from "react";
import Logo from "/imgs/tv.svg";
import IMD from "/imgs/IMDb.svg";
import Fruit from "/imgs/Fruit.svg";
import Play from "/imgs/Play.svg";
import Header from "/imgs/headermovie.svg";
import useFetch from "../../../hook/Usefetch";
import "./Herosection.css";
// import Menu from "/imgs/Menu.svg"

const Herosection = () => {
  const { data, isLoading, error } = useFetch("top_rated?language=en-US&page=1");
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div>
      <div className="generalcontainer">
        {isLoading ? (
          <p>Loading....</p>
        ) : (
          movies?.slice(0, 1)?.map((movie, index) => (
            <div className="group1_content" key={movie.id}>
              <div className="group1" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
                <div className="nav">
                  <div className="logo-cont">
                    <a id="link1" href="#">
                      <img src={Logo} alt="" />
                      <h3>MovieBox</h3>
                    </a>
                  </div>
                  <div className="searchbox">
                    <form>
                      <input
                        type="text"
                        id="search"
                        name="q"
                        placeholder="Enter your search term..."
                      />
                    </form>
                  </div>
                  <div className="link">
                        <ul>
                            <li><a id="link2" href="#">Sign in</a></li>
                            {/* <img src={Menu} alt="" id="menu"/> */}
                        </ul>
                    </div>
                </div>
                <div className="movie_content">
                  <h2>{movie.title}</h2>
                  <div className="flex-general">
                    <div className="flex-aside">
                      <img src={IMD} alt="" />
                      <p>86.0 / 100</p>
                    </div>
                    <div className="flex-otherside">
                      <img src={Fruit} alt="" />
                      <p>97%</p>
                    </div>
                  </div>
                  <div className="movie-info">
                    <p>{movie.overview}</p>
                  </div>
                  <button id="watch">
                    <img src={Play} alt=""></img>
                    WATCH TRAILER
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Herosection;
