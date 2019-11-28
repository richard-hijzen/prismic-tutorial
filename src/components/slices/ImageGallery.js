import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import "./imagegallery.scss"


const ImageGallery = ({ slice }) => {

  let settings = {
     arrows: false,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 2500 
  }

  return (
    <>
      <div
        id="gallery-intro"
        dangerouslySetInnerHTML={{
          __html: slice.primary.name_of_the_gallery.html,
        }}
      /> 
      <Slider {...settings}>
        {slice.items.map((doc, index) => (
          <div key={index}>
            <Img
              className="d-block w-100"
              fluid={doc.gallery_image.localFile.childImageSharp.fluid}
            />

            <p>{doc.image_captions.text}</p>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default ImageGallery
