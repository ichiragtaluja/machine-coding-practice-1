import React from "react";
import { Link } from "react-router-dom";

import { useData } from "../../context/DataProvider";
import "./Home.css";
import { Books } from "../../components/Books/Books";

export const Home = () => {
  const { categories } = useData();

  return (
    <div>
      <Link className="search" to="/search">Search</Link>
      <h1 className="nav">Home</h1>

      <div className="shelves-container">
        {categories?.map((category) => (
          <div className="shelf" key={category}>
            <h2>{category !== "None" ? category : ""}</h2>
            <Books category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};
