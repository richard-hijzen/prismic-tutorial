import React from "react"
import Img from "gatsby-image"
import "./imageleft.scss"


const ImageLeft = ({ slice }) => {

  return (
    <div className="image-left">
        <Img
          className="d-block w-100"
          fluid={slice.primary.image.localFile.childImageSharp.fluid}
        />
        <div 
            dangerouslySetInnerHTML={{
            __html: slice.primary.content.html,
            }} 

        />
    </div>
  )
}

export default ImageLeft