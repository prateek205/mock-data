import React from "react";
import "./HomeMapping.css";
import HomeLayout from "../HomeLayout/HomeLayout";
import { useProviderContext } from "../../context/productContext";

const HomeMapping = () => {
  const { isLoading, products } = useProviderContext();

  if (isLoading) {
    return <div>.... Loading</div>;
  }

  return (
    <>
    <div className="homeSection">
      {products.map((curElem) => {
        return <HomeLayout key={curElem.id} {...curElem} />;
      })}
      </div>
    </>
  );
};

export default HomeMapping;
