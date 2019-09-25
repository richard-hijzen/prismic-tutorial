import React, { useState,  useEffect } from 'react'

const NETLIFY_FUNC =
  'estate-olanda.netlify.com/.netlify/functions'

export default function Comments(props) {
    const [review, setReview] = useState(["this is a test"]);

    useEffect(() => {
        fetch(`https://${NETLIFY_FUNC}/fetchcomments?id=${props.id}`)
        .then(x => x.json())
        .then(x => {
            setReview({review: x})
        })
      });

      if(review.length == 0) return null;

    return(
        <>
            <p>Comments in here</p>  
        </>
    )
}