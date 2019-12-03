import React from "react"
import Img from "gatsby-image"
import "./imageaside.scss"


const ImageAside = ({ slice }) => {

  return (
    <div className={slice.primary.side}>
        <div 
            dangerouslySetInnerHTML={{
            __html: slice.primary.content.html,
            }} 

        />
        <Img
          className="image-aside"
          fluid={slice.primary.image.localFile.childImageSharp.fluid}
        />
    </div>
  )
}

export default ImageAside