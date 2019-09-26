import React from 'react'

const NETLIFY_FUNC =
  'estate-olanda.netlify.com/.netlify/functions'

  export default class Comments extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        reviews: [],
      }
    }
  
    componentDidMount() {
      fetch(
        `https://${NETLIFY_FUNC}/fetchcomments?id=${
          this.props.form_id
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
              test
            </div>
  
          </section>

      )
    }
  }