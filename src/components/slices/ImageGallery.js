import React from "react"
import Img from 'gatsby-image'
import Slider from "react-slick"
import {Helmet} from "react-helmet"


const ImageGallery = ({ slice }) => {
    return (
        <>
            <Helmet>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Helmet>
            <div id="gallery-intro" dangerouslySetInnerHTML={{ __html: slice.primary.name_of_the_gallery.html }} />
            <Slider>
              {slice.items.map(doc => (
                <div>
                    <Img className="d-block w-100" 
                    fluid={doc.gallery_image.localFile.childImageSharp.fluid}/>
                    
                        <p>{doc.image_captions.text}</p>
                    
                </div>
              ))}
            </Slider>
        </>
    )
}

export default ImageGallery