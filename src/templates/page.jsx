import React from 'react'
import { graphql, Link } from 'gatsby' 
import { ImageCaption, Quote, Text } from '../components/slices'

/*const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <React.Fragment>
      <h1>{data.page_title.text}</h1>
    </React.Fragment>
  )
}*/

export const pagesQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
        uid
        data {
          page_title {
            text
          }
          body {
            ... on PrismicPageBodyCenteredText {
              id
              slice_type
              primary {
                heading {
                  text
                }
                text {
                  html
                  text
                }
              }
            }
            ... on PrismicPageBodyFeature {
              id
              slice_type
              primary {
                featured_image {
                  alt
                  url
                }
                heading {
                  text
                }
                text {
                  text
                }
              }
            }
          }
        }
    }
  }
`

// Sort and display the different slice options
const PostSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.slice_type) {
        case 'centered_text': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Text slice={ slice } /> }
          </div>
        )

        case 'quote': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <Quote slice={ slice } /> }
          </div>
        )

        case 'feature': return (
          <div key={ index } className="homepage-slice-wrapper">
            { <ImageCaption slice={ slice } /> }
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

// Display the title, date, and content of the Post
const PostBody = ({ page }) => {
  
  const titled = page.page_title.length !== 0 ;
  return (
    <div>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back</Link>
        </div>
        {/* Render the edit button */}
        <h1 data-wio-id="page-title">
          { titled ? page.page_title.text : 'Untitled' }
        </h1>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={ page.body } />
    </div>
  );
}

export default (props) => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismicPage.data;

  if(!doc) return null;

  return(
    <div>
      <PostBody page={ doc } />
    </div>
  )
}

