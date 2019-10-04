import React, { useState, useEffect } from "react"
import { firebase } from '../firebase';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}



export default function CommentForm(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const id = props.id;


  useEffect(() => {
    const id = props.id;
    console.log({name}, {email}, {message});
  });


    // Saves a new message on the Cloud Firestore.
    const saveMessage = (props) => {
      const id = props.id;
      // Add a new message entry to the Firebase database.
      return firebase.firestore().collection(`${props.id}`).add({
        name: `${name}`,
        email: `${email}`,
        message: `${message}`,
        //timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }

  return (
    <div className="comment-container">
      <div className="comment container">
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
