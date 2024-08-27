import React from "react";
import "./HomeLayout.css";
import { NavLink } from "react-router-dom";

const HomeLayout = (curElem) => {
  const { id, imgSrc, title } = curElem;

  return (
    <>
      <NavLink
        to={`singleproduct/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="cardLayout">
          <div className="cardimg">
            <img src={imgSrc} alt="" />
          </div>

          <div className="cardtitle">
            <h4>{title}</h4>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default HomeLayout;
