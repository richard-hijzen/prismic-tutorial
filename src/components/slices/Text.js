import React from "react"

export default ({ slice }) => (
  <div className="post-text container">
    <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
  </div>
)
