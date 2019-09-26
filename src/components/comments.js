import React from 'react'

const NETLIFY_FUNC =
  'api.netlify.com/api/v1'

  export default class Product extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        reviews: [],
      }
    }
  
    componentDidMount() {
      fetch(
        `https://${NETLIFY_FUNC}/fetchcomments?id=${
          this.props.id
        }`
      )
        .then(x => x.json())
        .then(x => {
          this.setState({ reviews: x })
        })
  
    }
  
    render() {

  
      return (
        
          <section>
            <h3 className="reviews">Reviews</h3>
  
            <div className="reviews__list">
              {this.state.reviews.map(o => (
                <p key={o.number}>
                  <div className="review__name">{o.name}</div>
                  <div>{o.data.message}</div>
                </p>
              ))}
            </div>
  
          </section>

      )
    }
  }