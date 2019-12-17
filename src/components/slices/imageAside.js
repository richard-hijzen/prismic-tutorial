import React, {useState, useEffect, useRef } from "react"
import Img from "gatsby-image"
import { useInView } from 'react-intersection-observer'
import "./imageaside.scss"


const ImageAside = ({ slice }) => {
  const [tracker, setTracker] = useState('');
  const [ref, inView] = useInView({
    rootMargin: '0px',
    threshold: 1.0,
  });
  const imgSide = slice.primary.side;

  useEffect(() => {
    if(inView) {
      setTracker('in-view');
    }
  }, [inView])

  return (
    <div className={`img-aside ${slice.primary.side} ${tracker}`} ref={ref}>
        {imgSide == 'right' ?
        <>
        <div
            dangerouslySetInnerHTML={{
            __html: slice.primary.content.html,
            }} 
        />
        <Img
          className="image-aside"
          fluid={slice.primary.image.localFile.childImageSharp.fluid}
        />
        </> :
        <>
        <Img
          className="image-aside"
          fluid={slice.primary.image.localFile.childImageSharp.fluid}
        />
        <div
            dangerouslySetInnerHTML={{
            __html: slice.primary.content.html,
            }} 
        />
        </>
        }
    </div>
  )
}

export default ImageAside