import React from "react";
import Rating from '@material-ui/lab/Rating';
import { firebase } from '../firebase';
import './averagerating.scss'

class AverageRating extends React.Component {
    constructor(props) {
      super(props);
      const id = this.props.id;
      this.state = {
        comments: [],
        rating: 0,
        average: 0,
      };
      this.ratingCount = this.ratingCount.bind(this);
    }
  
    componentDidMount() {
        const id = this.props.id;
      firebase.firestore().collection(id)
        .orderBy('timestamp', 'asc')
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          //console.log(data);
          this.setState({ comments: data });
          this.ratingCount();
        });
    }

       ratingCount = () => {
            this.state.comments.map(comment => (
                this.setState({rating: this.state.rating + comment.rating.value})
            ));
            this.setState({average: this.state.rating / this.state.comments.length})    
      };
      render() {
        const { comments } = this.state;

    return(
        <div className="average-rating"
            style={{
                display: `flex`,
                alignItems: `center`,
                padding: `0 0 10px 10px`,
                color: `#808080`
            }}>
            {(comments.length > 1) ? (
                <>
                <Rating
                    readOnly
                    value={this.state.average}
                    precision={0.1}     
                />
                <span>({comments.length})reviews</span> 
                </> 
                ) : 
                 (comments.length == 1) ? (
                    <>
                    <Rating
                        readOnly
                        value={this.state.rating}
                        precision={0.1}     
                    />
                    <span>({comments.length})review</span> 
                    </>
                 ) :
                 <>
                    <Rating
                        readOnly
                        value={this.state.average}
                        precision={0.1}     
                    />
                    <span>({comments.length})reviews</span> 
                    </> 
            }
        </div>
    );
}
}

export default AverageRating;