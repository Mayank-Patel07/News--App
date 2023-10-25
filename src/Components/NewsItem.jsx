import React from "react";

export default function NewsItem(props) {
  
  let { title, description, urlToImage, url, author, time, colorname, source } =
    props;
  return (
    <div className="card my-3">
      <img
        src={urlToImage}
        className="card-img-top"
        style={{ height: "215px" }}
      />
      <div className="card-body " style={{ padding: "0.2rem " }}>
        <span
          className={`badge rounded-pill bg-${
            colorname ? colorname : "primary"
          }`}
        >
          {source.name}
        </span>
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Author : {author}</p>
        <p className="card-text">
          <small className="text-muted">
            Last updated <strong>{time}</strong>
          </small>
        </p>
        <a href={url} target="_blank" className="btn button-21">
          Read More
        </a>
      </div>
    </div>
  );
}
