import React from "react"
import { graphql } from "gatsby"
import HeaderNav from "../components/headernav"
import CommentForm from "../components/commentform"
import Comments from "../components/comments"
import ErrorBoundary from "../components/errorboundary"
import Img from 'gatsby-image'
import "../styles/app.scss"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;
  const pageId = prismicPost.uid;

  return (
    <React.Fragment>
      <header id="blog-single-header">
        <HeaderNav />
        <h1>{data.title.text}</h1>
        <Img fluid={data.image.localFile.childImageSharp.fluid}/>
      </header>
      <main id="blog-single-main">
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        <CommentForm id={pageId} />
        <ErrorBoundary>
          <Comments id={pageId} />
        </ErrorBoundary>  
      </main>
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxHeight: 400, maxWidth: 960, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`