import React, { useState,  useEffect } from 'react'

const NETLIFY_FUNC =
  'api.netlify.com/api/v1/'

export default function Comments(props) {
    const [review, setReview] = useState(["this is a test"]);

    useEffect(() => {
        fetch(`https://${NETLIFY_FUNC}/forms/${props.form_id}/submissions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'name',
                message: 'message',
              })
        })
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