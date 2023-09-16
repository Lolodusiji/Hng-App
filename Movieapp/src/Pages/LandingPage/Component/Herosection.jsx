import React from 'react';
import Logo from "/imgs/tv.svg";
import IMD from "/imgs/IMDb.svg";
import Fruit from "/imgs/Fruit.svg";
import Play from "/imgs/Play.svg";
import Header from "/imgs/headermovie.svg";
import useFetch from "../../../hook/Usefetch";
import "./Herosection.css";

const Herosection = () => {
  return (
    <div>
        <div className="generalcontainer">
        <div class="group1">
            <div className="group1_content">
            {/* <img className="headerimge" src={Header} alt=""/> */}
                <div class="nav">
                    <div class="logo-cont">
                        <a id="link1" href="#">
                        <img src={Logo} alt=""/>
                        <h3>MovieBox</h3></a>
                    </div>
                    <div className="searchbox">
                    <form >
                    <input
                    type="text"
                    id="search"
                    name="q"
                    placeholder="Enter your search term..."
                    />
                    </form>
                    </div>
                    {/* <i  id = "ham-burger" class="fa-solid fa-bars"></i> */}
                    {/* </div> */}

                    <div className="link">
                        <ul>
                            <li><a id="link2" href="#">Sign in</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="movie_content">
                    <h2>John Wick 3 : <br/>Parabellum</h2>
                    <div className="flex-general">
                        <div className="flex-aside">
                            <img src={IMD} alt=""/>
                            <p>86.0 / 100</p>
                        </div>

                        <div className="flex-otherside">
                        <img src={Fruit} alt=""/>
                            <p>97%</p>
                        </div>
                    </div>
                <div className="movie-info">
                <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                </div>
                <button id="watch">
                    <img src={Play} alt=""></img>
                    WATCH TRAILER
                </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Herosection;
