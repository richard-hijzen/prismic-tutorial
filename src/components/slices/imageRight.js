import React from "react"
import Img from "gatsby-image"
import "./imageright.scss"


const ImageRight = ({ slice }) => {

  return (
    <div className="image-right">
        <div 
            dangerouslySetInnerHTML={{
            __html: slice.primary.content.html,
            }} 

        />
        <Img
          className="d-block w-100"
          fluid={slice.primary.image.localFile.childImageSharp.fluid}
        />
    </div>
  )
}

export default ImageRight