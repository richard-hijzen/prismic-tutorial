import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"

const ImageGallery = ({ slice }) => {
  return (
    <>
      <div
        id="gallery-intro"
        dangerouslySetInnerHTML={{
          __html: slice.primary.name_of_the_gallery.html,
        }}
      />
      <Slider>
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
