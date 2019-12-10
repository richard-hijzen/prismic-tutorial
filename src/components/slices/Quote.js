import React from "react";
import "./quote.scss";

export default ({ slice }) => (
  <div className="post-quote container">
    <blockquote>
      <span className="quote-before">&#8220;</span>
      {slice.primary.quote.text}
      <span className="quote-after">&#x201d;</span>
    </blockquote>
  </div>
)
