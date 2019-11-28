import React from "react"

export default ({ slice }) => (
  <>
    <div className="post-text"
      dangerouslySetInnerHTML={{
        __html: slice.primary.rich_text.html,
      }}
    />
  </>
)
