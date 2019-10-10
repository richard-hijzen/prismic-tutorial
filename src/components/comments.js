import React from "react"
import { firebase } from '../firebase';
import { Time } from './date.js';
import "./comments.scss"

class Comments extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.id;
    this.state = {
      comments: []
    };
  }

  componentDidMount(props) {
    const id = this.props.id;
    firebase.firestore().collection(id)
      .orderBy('timestamp', 'asc')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ comments: data });
      });
  }

  render() {
    const { comments } = this.state;
    let hasComments;

    if(comments.length > 0) {
      hasComments = <div className="commentslist">
                      {comments.map(comment => (
                          <div key={comment.timestamp} className="comment">
                                
                                  <div className="comments-header">
                                    <h5>{comment.name}</h5>
                                    <h6>{comment.time}</h6>
                                  </div>
                                  <div className="comments-message">
                                    <p>{comment.message}</p>
                                  </div>
                                
                            </div>
                      ))}
                    </div>
    } else {
      hasComments = <p>No comment yet</p>
    }
    
      return (
        <>
          {hasComments}
        </>
      );
    }
  }


export default Comments;
