import React from "react";
import { urlFor } from "@/utils/sanity";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url } = data;

  return (
    <div className={`singlefolio`}>
      <img src={urlFor(image)} alt={title} />
      <div className="folioHover">
        <a className="cate" href="#">
          {categories.map((cat) => cat.title).join(', ')}
        </a>
        <h4>
          <a href={url}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
