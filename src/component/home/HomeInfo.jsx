import React from "react";
import "./HomeInfo.css";
import { Link } from "react-router-dom";

function HomeInfo() {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2>
          Experience the height of fashion with our exquisite designer pieces.
        </h2>
        <p>
        Welcome to our exclusive unisex e-commerce homepage, where style, sophistication, and exclusivity are at the forefront of every collection. Discover a curated selection of products designed to cater to diverse tastes, ensuring that each piece reflects quality and modern elegance. Whether you're searching for timeless classics or trendsetting items, our collection is crafted with meticulous attention to detail and offers something unique for everyone. Embrace the exceptional, and elevate your style with us.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>
    </article>
  );
}

export default HomeInfo;
