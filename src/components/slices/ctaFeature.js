import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"


const CTAFeature = ({ slice }) => {

  return (
    <div>
        <Img
          className="d-block w-100"
          fluid={slice.primary.featured_image.localFile.childImageSharp.fluid}
        />
        <div>
            <h3>{slice.primary.heading.text}</h3>
            <p>{slice.primary.text.text}</p>
            <Link to={`${slice.primary.cta_link.url}`}>
                {slice.primary.cta_text.text}
            </Link>
        </div>
    </div>
  )
}

export default CTAFeature