import React from "react"
import { graphql } from "gatsby"
import TopMenu from "../components/topmenu"
import Img from 'gatsby-image'
import "../styles/app.scss"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <React.Fragment>
      <header id="blog-single-header">
        <TopMenu />
        <h1>{data.title.text}</h1>
        <Img fluid={data.image.localFile.childImageSharp.fluid}/>
      </header>
      <main id="blog-single-main">
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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