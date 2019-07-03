import React from "react"
import { graphql } from "gatsby"

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <React.Fragment>
      <h1>{data.page_title.text}</h1>
    </React.Fragment>
  )
}

export default Page

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
              primary {
                heading {
                  html
                }
                text {
                  text
                }
              }
            }
            ... on PrismicPageBodyFeature {
              id
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