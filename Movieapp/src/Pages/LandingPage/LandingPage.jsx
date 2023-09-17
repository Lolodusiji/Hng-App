import React, { useEffect, useState } from "react";
// import React from 'react';
import Herosection  from './Component/Herosection';
import "./LandingPage.css";
import  FeatureMovie  from './Component/FeatureMovie';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div>
        <div className="Generalcontainer">
            {/* <div className="Section1"> */}
            {/* <button>
        <Link to="/Dashboard">Go to Home</Link>
      </button> */}
            <Herosection/>
            <FeatureMovie/>
            </div>   
    {/* </div> */}
    </div>
  )
}

export default LandingPage;