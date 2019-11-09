import React, { useState } from "react";
import { firebase } from '../firebase';
import Rating from '@material-ui/lab/Rating';
import { Time } from './date.js';
import "./commentform.scss"

export default function CommentForm(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [value, setValue] = useState(4);
  const [message, setMessage] = useState();
  const id = props.id;
  const product = props.product;


    // Saves a new message on the Cloud Firestore.
    const saveMessage = () => {      
      // Add a new message entry to the Firebase database.
      return firebase.firestore().collection(id).add({
        name: `${name}`,
        email: `${email}`,
        message: `${message}`,
        timestamp: new Date(),
        time: Time
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }

  return (
    <div className="comment-container">
      <div className="commentform container">
        <h3>Leave a comment here</h3>
        <form
          name={id}
          method="post"
          onSubmit={saveMessage}
        >
          <p>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
          </p>
          <p>
            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          {product ? 
          <p>
            <label htmlFor="rating">Rating:</label>
            <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            />
            </p>
            : ""
          }
          <p>
            <label htmlFor="textarea">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
            />
          </p>
          <p className="submit-button">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  )
}
