import React, { useEffect, useId, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../LandingPage/Component/Sidebar";
import Trailer from "/imgs/trailer.svg";
import Star from "/imgs/Rating.svg";
import Ticket from "/imgs/Two tickets.svg";
import List from "/imgs/List.svg";
import useFetch, { useID } from "../../hook/Usefetch";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const {id} = useParams () 
  const { data, isLoading, error } = useID(id);
  const [banner, setBanner] = useState({});
  console.log(data);
  useEffect(() => {
    if (data) {
      setBanner(data);
    }
    console.log(banner);
  }, [data]);

  
      return  (
        <div className="movie-details">
          <Sidebar />
          <div className="trailer">
            <img id="trailer" src={`https://image.tmdb.org/t/p/original${banner?.poster_path}`} alt="" />
          </div>
          <div className="flex-details">
            <div className="left">
              <ul className="details">
                <li className="title" data-testid="movie-title">
                  <h5>{banner.title}</h5>
                </li>
                <li data-testid="movie-release-date">
                  {/* <p>2020</p> */}
                  {new Date(banner.release_date).getFullYear()}
                </li>
                <li data-testid="movie-runtime">
                  <p>{banner.runtime} mins</p>
                </li>
              </ul>
              <div className="minor">
                <div className="overview" data-testid="movie-overview">
                  <h4>{banner.overview}</h4>
                </div>
              </div>
              {/* <div className="author-details">
                <h3 id="author">Director: <span id="ath">{banner.director}</span></h3>
                <h3 id="author">Writers: <span id="ath">{banner.writers}</span></h3>
                <h3 id="author">Stars: <span id="ath">{banner.stars}</span></h3>
              </div> */}
            </div>

            <div className="button-side">
              <p id="paragraph">
                <img src={Star} alt="" /> {banner.vote_average} | {banner.vote_count}k
              </p>
              <button>
                <img src={Ticket} alt="" /> See Showtimes
              </button>
              <button>
                <img src={List} alt="" /> More Options
              </button>
            </div>
          </div>
        </div>
      );
    }

  // return <div className="banner">{renderBanner()}</div>;

export default Dashboard;
