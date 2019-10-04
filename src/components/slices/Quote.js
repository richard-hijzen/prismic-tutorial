import React from "react"

export default ({ slice }) => (
  <div className="post-quote container">
    <blockquote>{slice.primary.quote}</blockquote>
  </div>
)
