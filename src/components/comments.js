import React from "react"
import { firebase } from '../firebase';
import { Time } from './date.js';

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
                          <div key={comment.timestamp}>
                                <div >
                                  <h5>{comment.name}</h5>
                                  <h6>{comment.message}</h6>
                                  <p>{comment.time}</p>
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
