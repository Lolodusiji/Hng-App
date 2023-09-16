import React from 'react'
import "./Sidebar.css";
import Header from "/imgs/headermovie.svg";
import Home from "/imgs/Home.svg";
import Movie from "/imgs/Movie Projector.svg";
import TV from "/imgs/TV Show.svg";
import Logo from "/imgs/tv.svg";
import Upcoming from "/imgs/Calendar.svg";
import {NavLink} from "react-router-dom"
import Logout from "/imgs/Logout.svg"

const Sidebar = () => {
  return (
          <div className="General-sidebar">
          <div className="logo_container">
            
            <img id="logo" src={Logo} />
            <p>MovieBox</p>
        
          </div>
          <ul>
            <div
              // className={({ isActive }) => (isActive ? "link active" : "link")}
              className="link"
              to="/dashboard/welcome"
            >
              <li>
                <img src={Home} alt="" />
                <p>Home</p>
              </li>
            </div>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/dashboard/overview"
            >
              <li>
                <img src={Movie} alt="" />
                <p>Movie</p>
              </li>
            </NavLink>
            <div
              // className={({ isActive }) => (isActive ? "link active" : "link")}
              className="link"
              to="/dashboard/marketreport"
            >
              <li>
                <img src={TV} alt="" />
                <p>TV Series</p>
              </li>
            </div>

            <div
              // className={({ isActive }) => (isActive ? "link active" : "link")}
              className="link"
              to="/dashboard/audiencereport"
            >
              <li>
                <img src={Upcoming} alt="" />
                <p>Upcoming</p>
              </li>
            </div>
        
          </ul>

          <div className="box">
            <h5>Play movie quizes <br/> and earn <br/>free tickets</h5>
            <p>50k people are playing now</p>
            <button id="play">
                Start Playing
            </button>
          </div>

          <div className="log_out">
            <img src={Logout} alt=""/>
            <p>Log out</p>
          </div>
        </div>
  )
}

export default Sidebar