import React from "react";
import { Link } from "react-router-dom";
import { Brands } from "../../constants";

interface CardProps {
  brandArray: Brands[];
}

export const Card: React.FC<CardProps> = ({ brandArray }) => {
  console.log(brandArray);
  return (
    <div className="brands">
      {brandArray.map((item) => (
        <div className="brand" key={item.title}>
          <Link to={item.url} target="_blank">{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

