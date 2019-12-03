import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./ctafeature.scss"


const CTAFeature = ({ slice }) => {

  return (
    <div className={`cta-feature-${slice.primary.image_position}`}>
        <Img 
          fluid={slice.primary.featured_image.localFile.childImageSharp.fluid}
        />
        <div className="cta-feature-text-section">
            <h3>{slice.primary.heading.text}</h3>
            <p>{slice.primary.text.text}</p>
            <Link to={`${slice.primary.cta_link.url}`}
                  className="cta-feature-button">
                {slice.primary.cta_text.text}
            </Link>
        </div>
    </div>
  )
}

export default CTAFeature