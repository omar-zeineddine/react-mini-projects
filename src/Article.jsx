import React from "react";
import moment from "moment";

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("dddd, MMM. Do, YYYY")}</span>
        <span>{length} main read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
