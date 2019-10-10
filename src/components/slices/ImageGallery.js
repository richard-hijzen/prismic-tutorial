import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import "./imagegallery.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageGallery = ({ slice }) => {

  let settings = {
     dots: true,
     infinite: true,
     arrows: true,
     mobileFirst: true 
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
        {slice.items.map(doc => (
          <div>
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
