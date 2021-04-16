import React from "react";
import Link from "next/link";
import { urlFor } from "@/utils/sanity";

const BlogCard = ({ data }) => {
  const { image, title, url: slug, date } = data;
  const url = `/blog/${slug.current}`;
  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={urlFor(image)} alt={title} />
      </div>
      <div className="lbi_details">
        <Link href={url}>
          <a className="lbid_date">{date}</a>
        </Link>
        <h2>
          <Link href={url}>
            <a>{title}</a>
          </Link>
        </h2>
        <Link href={url}>
          <a className="learnM">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
