import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import "./slices/imagegallery.scss"


const ProductGallery = ({ slice }) => {
  const thumb = 
  slice.map(doc => (
  <a>
    <Img
        fluid={doc.product_image.localFile.childImageSharp.fluid}
      />
  </a>
  ))

  let settings = {
    customPaging: function(i) {
      return (
        thumb[i]
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    arrows: false,
    infinite: true,
    speed: 500,
    mobileFirst: true 
  }

  return (
    
      <Slider {...settings}>
        {slice.map(doc => (
          <div key={doc.product_image.alt}>
            <Img
              fluid={doc.product_image.localFile.childImageSharp.fluid}
            />
          </div>
        ))}
      </Slider>
    
  )
}

export default ProductGallery;