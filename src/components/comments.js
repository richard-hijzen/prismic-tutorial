import React, { useState, useEffect } from "react"
import { firebase } from '../firebase';
import { Time } from './date.js';

export default function Comments(props) {
  const id = props.id;

  useEffect(() => {
      LoadMessages();
  });

// Loads chat messages history and listens for upcoming ones.
const LoadMessages = () => {
    // Create the query to load the last 12 messages and listen for new ones.
    var query = firebase.firestore()
                    .collection(id)
                    .orderBy('timestamp', 'desc')
                    .limit(12);
    
    // Start listening to the query.
    const messages = query.onSnapshot(function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
          var message = change.doc.data();
          return(
                <div className="comment">
                    <p>{message.time}</p>
                    <p>{message.name}</p>
                    <p>{message.email}</p>
                    <p>{message.message}</p>
                </div>
          );
        });
    });
    return messages;
  }

  return (
    <>
        <LoadMessages />
    </>
  )
}
