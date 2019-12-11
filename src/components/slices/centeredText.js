import React from "react"

export default ({ slice }) => (
  <>
    <div className="centered-text"
      dangerouslySetInnerHTML={{
        __html: slice.primary.text.html,
      }}
    />
  </>
)