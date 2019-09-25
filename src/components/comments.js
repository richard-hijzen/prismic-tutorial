import React, { useState,  useEffect } from 'react'

const NETLIFY_FUNC =
  'estate-olanda.netlify.com/.netlify/functions'

export default function Comments(props) {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`https://${NETLIFY_FUNC}/fetchcomments?id=${props.id}`)
        .then(x => x.json())
        .then(x => {
            setReview({review: x})
        })
      });

      if(!review) return "<div>No comments yet</div>";

    return(
        <>
            <p>Comments in here</p>  
        </>
    )
}