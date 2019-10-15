import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import HelmComp from '../components/helmcomp';
import HeaderNav from '../components/headernav';
import CommentForm from '../components/commentform';
import Comments from '../components/comments';
import '../styles/app.scss';

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost;
  const pageId = prismicPost.uid;

  return (
    <>
      <HelmComp />
      <header id="blog-single-header">
        <HeaderNav />
        
        <Img fluid={data.image.localFile.childImageSharp.fluid} />
      </header>
      <main id="blog-single-main">
        <h1>{data.title.text}</h1>
        <article className="blog-post">
          <div className="blog-post-content container" dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </article> 
        <CommentForm id={pageId} />
        <Comments id={pageId} />
      </main>
    </>
  );
};

export default Post;

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
`;
