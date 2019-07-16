import React from "react"
import Img from 'gatsby-image'
import {Carousel} from 'react-bootstrap'


const ImageGallery = ({ slice }) => {
    return (
        <>
            <div id="gallery-intro" dangerouslySetInnerHTML={{ __html: slice.primary.name_of_the_gallery.html }} />
            <Carousel>
              {slice.items.map(doc => (
                <Carousel.Item>
                    <Img className="d-block w-100" 
                    fluid={doc.gallery_image.localFile.childImageSharp.fluid}/>
                    <Carousel.Caption>
                        <p>{doc.image_captions.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
        </>
    )
}

export default ImageGallery