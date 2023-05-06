import React from "react";
import "./css/SidebarOptions.css";
// import Button from "@mui/material/Button";
import Tech from './img/Technology.jpg';
import lifestyle from './img/lifestyle.jpg';
import food from './img/food.jpg';
import echo from './img/economics.jpg';
import politics from './img/politics.jpg';
import sport from './img/sport.jpg';
function SidebarOptions() 
{
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src={Tech}
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src={lifestyle}
          alt=""
        />

        <p>Lifestyle</p>
      </div>
      <div className="sidebarOption">
        <img
          src={politics}
          alt=""
        />
        <p>Politics</p>
      </div>

      <div className="sidebarOption">
        <img
          src={food}
          alt=""
        />
        <p>Food</p>
      </div>

      <div className="sidebarOption">
        <img
          src={echo}          
          alt=""
        />
        <p>Economics</p>
      </div>

      <div className="sidebarOption">
        <img
          src={sport}
          alt=""
        />
        <p>Sport</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
